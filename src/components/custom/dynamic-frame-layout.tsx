'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FrameComponent } from './frame-component';
import framesData from '@/lib/media.json';

interface Frame {
    id: number;
    images: string[];
    videos?: string[];
    className: string;
    label: string;
    width?: string;
    height?: string;
    borderSize?: number;
}

export default function DynamicFrameLayout() {
    const [frames, setFrames] = useState<Frame[]>([]);
    const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
        null,
    );

    // Lấy dữ liệu từ file media.json
    useEffect(() => {
        setFrames(framesData.frames);
    }, []);

    // Tính rows và cols dựa trên số frames
    const getGridSize = (numFrames: number) => {
        // Bạn có thể tùy chỉnh logic này, đây chỉ là ví dụ:
        if (numFrames <= 3) {
            return { rows: 1, cols: numFrames }; // ví dụ: 2 frames => 1x2
        } else if (numFrames <= 6) {
            return { rows: 2, cols: 3 }; // 4-6 frames => 2x3
        } else {
            return { rows: 3, cols: 3 }; // 7-9 frames => 3x3
        }
    };

    // Default vibes
    const { rows, cols } = getGridSize(frames.length);
    const frameBorderRadius = 0;

    // Hover size logic: row/col nào bị hover sẽ là "2fr", còn lại "1fr"
    const getRowSizes = () => {
        const rowSizes = [];
        for (let r = 0; r < rows; r++) {
            if (hovered?.row === r) {
                rowSizes.push('2fr');
            } else {
                rowSizes.push('1fr');
            }
        }
        return rowSizes.join(' ');
    };

    const getColSizes = () => {
        const colSizes = [];
        for (let c = 0; c < cols; c++) {
            if (hovered?.col === c) {
                colSizes.push('2fr');
            } else {
                colSizes.push('1fr');
            }
        }
        return colSizes.join(' ');
    };

    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded">
                    Where I've traveled
                </h2>
                <p className="text-lg text-muted-foreground leading-7">
                    A collection of places I've visited, special moments, and
                    memories captured in time.
                </p>
            </motion.div>

            <div className="w-full h-[100dvh] overflow-hidden">
                <div
                    className="relative w-full h-full"
                    style={{
                        display: 'grid',
                        gridTemplateRows: getRowSizes(),
                        gridTemplateColumns: getColSizes(),
                        gap: '4px',
                        transition:
                            'grid-template-rows 0.4s ease, grid-template-columns 0.4s ease',
                        width: '100%',
                        margin: '0 auto',
                    }}
                >
                    {frames.map((frame, index) => {
                        // Tính toán row, col dựa trên số cols
                        const row = Math.floor(index / cols);
                        const col = index % cols;

                        return (
                            <motion.div
                                key={frame.id}
                                className="relative"
                                style={{
                                    transition: 'transform 0.4s ease',
                                    borderRadius: `${frameBorderRadius}px`,
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={() => setHovered({ row, col })}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <FrameComponent
                                    {...framesData.defaultProps}
                                    {...frame}
                                    borderRadius={frameBorderRadius}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
