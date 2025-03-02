import axios from 'axios';

export async function sendMessageToTelegram(message: string) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        throw new Error('Missing Telegram bot token or chat ID');
    }

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await axios.post(
            telegramApiUrl,
            {
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        const data = response.data;

        if (response.status !== 200) {
            return { message: data.description || 'Gửi tin nhắn thất bại' };
        }
        return {
            message:
                'Thông tin của bạn đã được ghi nhận, xin vui lòng đợi tin nhắn hoặc phản hồi từ số điện thoại liên hệ',
        };
    } catch (error: any) {
        console.error('Error sending message to Telegram:', error.message);
        return { error: 'Không thể gửi tin nhắn' };
    }
}
