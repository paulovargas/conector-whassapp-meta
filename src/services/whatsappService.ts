import axios from 'axios';

const whatsappAPIBaseUrl = 'https://graph.facebook.com/v16.0';
const accessToken = process.env.ACCESS_TOKEN;
const phoneNumberId = process.env.PHONE_NUMBER_ID;

export const sendMessageToWhatsApp = async (phoneNumber: string, message: string) => {
    return axios.post(
        `${whatsappAPIBaseUrl}/${phoneNumberId}/messages`,
        {
            messaging_product: 'whatsapp',
            to: phoneNumber,
            text: { body: message }
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }
    );
};

export const processReceivedMessage = (message: any): string | null => {
    if (message.text && message.text.body) {
        const receivedText = message.text.body.toLowerCase();

        if (receivedText === 'oi' || receivedText === 'olá') {
            return 'Olá! Como posso ajudar você?';
        } else if (receivedText.includes('info')) {
            return 'Esta é uma resposta automatizada do bot.';
        } else {
            return 'Desculpe, não entendi sua mensagem.';
        }
    }

    return null;
};
