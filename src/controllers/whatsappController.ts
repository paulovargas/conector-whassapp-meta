import { Request, Response } from 'express';
import { sendMessageToWhatsApp, processReceivedMessage } from '../services/whatsappService';

export const sendMessage = async (req: Request, res: Response) => {
    const { phoneNumber, message } = req.body;

    if (!phoneNumber || !message) {
        return res.status(400).json({ error: 'Phone number and message are required' });
    }

    try {
        const response = await sendMessageToWhatsApp(phoneNumber, message);
        res.json(response.data);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};

export const receiveMessage = async (req: Request, res: Response) => {
    const body = req.body;

    if (body.object) {
        if (body.entry && body.entry[0].changes && body.entry[0].changes[0].value.messages && body.entry[0].changes[0].value.messages[0]) {
            const message = body.entry[0].changes[0].value.messages[0];

            console.log('Mensagem recebida:', message);

            const responseMessage = processReceivedMessage(message);

            if (responseMessage) {
                try {
                    await sendMessageToWhatsApp(message.from, responseMessage);
                } catch (error) {
                    console.error('Error sending message:', error);
                }
            }
        }

        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
};
