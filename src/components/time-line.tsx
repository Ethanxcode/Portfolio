'use client';

import { useState, useRef, memo, useMemo, useEffect } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from 'framer-motion';
import { Reveal } from './custom/reveal';
import { Badge } from './ui/badge';
import { ArrowRightIcon } from 'lucide-react';
import workExperiences from '@/lib/work-experiences.json';

// Simple hook để detect mobile (<640px)
function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);
    return matches;
}

interface WorkIconProps {
    progress: number;
    strokeColor?: string;
    className?: string;
    title?: string;
}

export const WorkIcon = memo(function WorkIcon({
    progress,
    strokeColor = 'currentColor',
    className = 'w-6 h-6 text-white',
    title = 'Work Icon',
}: WorkIconProps) {
    const scaleStyle = useMemo(
        () => ({ transform: `scale(${progress})` }),
        [progress],
    );

    return (
        <motion.svg
            role="img"
            aria-label={title}
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={scaleStyle}
        >
            <title>{title}</title>
            <path d="M4 7V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V7" />
            <path d="M4 7H20V21H4V7Z" />
            <path d="M8 11H16" />
        </motion.svg>
    );
});

export default function Timeline() {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Phát hiện nếu màn hình nhỏ (<640px)
    const isMobile = useMediaQuery('(max-width: 640px)');

    return (
        <section
            id="experiences"
            ref={containerRef}
            className="py-20 bg-background overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        Where I've Worked
                    </h2>
                    <br />
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
                        style={{ scaleY: scaleX }}
                    />

                    {/* Work Icon */}
                    <motion.div
                        className="sticky"
                        style={{
                            top: isMobile ? '10%' : '48%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            color: 'var(--primary)',
                            y: useTransform(
                                scrollYProgress,
                                [0, 200],
                                [0, 100],
                            ),
                        }}
                    >
                        {/* <WorkIcon
                            progress={
                                useTransform(
                                    scrollYProgress,
                                    [0, 1],
                                    [0.5, 1],
                                ) as any
                            }
                        /> */}
                    </motion.div>

                    {workExperiences.map((event, index) => (
                        <TimelineEvent
                            key={index}
                            event={event}
                            index={index}
                            isExpanded={expandedEvent === index}
                            onToggle={() =>
                                setExpandedEvent(
                                    expandedEvent === index ? null : index,
                                )
                            }
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineEvent({
    event,
    index,
    isExpanded,
    onToggle,
    isMobile,
}: {
    event: {
        position: string;
        company: string;
        duration: string;
        responsibilities: string[];
        skills: string[];
    };
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
    isMobile: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            className={`mb-8 ${
                isMobile
                    ? 'flex flex-col items-center'
                    : `flex justify-between items-center w-full ${
                          index % 2 === 0 ? 'flex-row-reverse' : ''
                      }`
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            {/* Trên desktop: để khoảng trống bên trái cho căn lề xen kẽ, còn mobile thì không cần */}
            {isMobile ? null : <div className="w-5/12" />}
            <div className="z-20 mb- isMobile:mb-0">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <div className="w-3 h-3 bg-background rounded-full" />
                </div>
            </div>
            <motion.div
                className={
                    isMobile
                        ? 'w-full mt-4 cursor-pointer z-30'
                        : 'w-5/12 cursor-pointer'
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
            >
                <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
                    <span className="font-bold text-primary">
                        {event.position}
                    </span>
                    <p className="text-sm text-muted-foreground">
                        {event.company} &bull; {event.duration}
                    </p>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2"
                    >
                        <div className="text-sm text-muted-foreground">
                            <ul className="space-y-4">
                                {event.responsibilities.map(
                                    (responsibility, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <ArrowRightIcon className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                            <span>{responsibility}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <br />
                            <div className="flex gap-2 flex-wrap">
                                {event.skills.map((skill) => (
                                    <Reveal
                                        key={skill}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.1,
                                                delay: index / 40,
                                            },
                                        }}
                                    >
                                        <Badge variant="default">{skill}</Badge>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
