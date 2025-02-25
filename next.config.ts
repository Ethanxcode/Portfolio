import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */

    env: {
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    },
};

export default nextConfig;
