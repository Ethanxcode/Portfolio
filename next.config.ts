import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */

    // async headers() {
    //     return [
    //         {
    //             // Áp dụng cho tất cả các file
    //             source: '/:all*(svg|jpg|jpeg|png|css|js)',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     // 31 ngày = 31 * 24 * 60 * 60 = 2678400 giây
    //                     value: 'public, max-age=2678400, immutable',
    //                 },
    //             ],
    //         },
    //     ];
    // },

    env: {
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    },
};

export default nextConfig;
