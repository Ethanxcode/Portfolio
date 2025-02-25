'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FrameComponent } from './frame-component';
import framesData from '@/lib/media.json';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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

    // Phát hiện mobile (max-width: 640px)
    const isMobile = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        setFrames(framesData.frames);
    }, []);

    // Tính rows và cols dựa trên số frames
    const getGridSize = (numFrames: number) => {
        if (numFrames <= 3) {
            return { rows: 1, cols: numFrames };
        } else if (numFrames <= 6) {
            return { rows: 2, cols: 3 };
        } else {
            return { rows: 3, cols: 3 };
        }
    };

    const { rows, cols } = getGridSize(frames.length);
    const frameBorderRadius = 0;

    // Hover size logic (desktop)
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

    // Nếu mobile => hiển thị dạng horizontal scroller
    if (isMobile) {
        return (
            <section
                id="collections"
                className=" flex-col gap-4 py-16 sm:py-32 hidden md:flex"
            >
                <div className="text-center mb-12">
                    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded">
                        Where I've traveled
                    </h2>
                    <p className="text-lg text-muted-foreground leading-7">
                        A collection of places I've visited, special moments,
                        and memories captured in time.
                    </p>
                </div>

                {/* Horizontal scroll + drag */}
                <motion.div
                    className="flex gap-2 overflow-x-auto px-4"
                    drag="x"
                    // Giới hạn kéo (có thể tuỳ chỉnh, hoặc bỏ hẳn để scroll+drag thoải mái)
                    dragConstraints={{ left: -1000, right: 0 }}
                    style={{ cursor: 'grab' }}
                >
                    {frames.map((frame) => (
                        <motion.div
                            key={frame.id}
                            className="relative shrink-0"
                            style={{
                                width: '80vw', // hoặc 'min-w-[80%]' tùy Tailwind
                                borderRadius: `${frameBorderRadius}px`,
                                overflow: 'hidden',
                            }}
                        >
                            <FrameComponent
                                {...framesData.defaultProps}
                                {...frame}
                                borderRadius={frameBorderRadius}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        );
    }

    // Ngược lại, desktop layout
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        >
            <div className="text-center mb-12">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded">
                    Where I've traveled
                </h2>
                <p className="text-lg text-muted-foreground leading-7">
                    A collection of places I've visited, special moments, and
                    memories captured in time.
                </p>
            </div>

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
