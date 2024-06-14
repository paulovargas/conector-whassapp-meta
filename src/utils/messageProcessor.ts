export const processMessage = (message: any): string | null => {
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
