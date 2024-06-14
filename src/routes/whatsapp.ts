import { Router } from 'express';
import { sendMessage, receiveMessage } from '../controllers/whatsappController';

const router = Router();

router.post('/send-message', sendMessage);
router.post('/webhook', receiveMessage);

export default router;



/* import { Router } from 'express';
import axios from 'axios';

const router = Router();

const whatsappAPIBaseUrl = 'https://graph.facebook.com/v16.0'; // Atualize para a versão correta da API
const accessToken = 'EAAQQroXjx4sBOxXG7S4jhsaow8mtJsRDEIo832ZACqgczn4NLLwESlREZBkyt8su8tzJ9JMDSiZBYuqmZBBKSfjjLFEVH0Uir29Eo2gNJBtqB9X6ivqaaXg5iZAZAV7hMfR0WrRPEkM0L9AdO2qyPaTmJKVfqmkj9ZCdZCPKwZBKzk08X6Y8diKX5rAy1F4oInoSMjel0ZAEWrRrdPiGVa8lwZD'; // Substitua pelo seu token de acesso

router.post('/send-message', async (req, res) => {
    const { phoneNumber, message } = req.body;

    if (!phoneNumber || !message) {
        return res.status(400).json({ error: 'Phone number and message are required' });
    }

    try {
        const response = await axios.post(
            `${whatsappAPIBaseUrl}/326371590565328/messages`, */

