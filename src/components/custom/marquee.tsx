'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
    return (
        <div className="relative w-full overflow-hidden bg-background py-16 sm:py-32">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background" />
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                    duration: 20,
                }}
            >
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="mx-4 flex items-center">
                        <span
                            className="px-4 text-7xl font-bold text-transparent sm:text-8xl md:text-9xl"
                            style={{
                                WebkitTextStroke:
                                    '2px hsl(var(--muted-foreground))', // tailwind gray-400
                            }}
                        >
                            Ethan Tran
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
