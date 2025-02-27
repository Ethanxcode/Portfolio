import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import { Button } from './ui/button';
import { AtSign, Github, Linkedin } from 'lucide-react';
import { Reveal } from './custom/reveal';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

import { Readcv } from '@/components/ui/readcv';

export default function Hero() {
    const name = [{ text: 'Ethan' }, { text: 'Tran' }];

    return (
        <header
            id="hero"
            className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-16"
        >
            <div className="flex flex-col gap-2 w-full">
                <TypewriterEffectSmooth words={name} />
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 font-mplus-rounded from-neutral-900 to-neutral-700">
                        Junior Full-stack Developer
                    </h3>
                </Reveal>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="leading-7 font-mplus-rounded">
                        I Love'd to explore, build, test and deploy software.
                    </p>
                </Reveal>
                <div className="flex gap-4">
                    <TooltipProvider>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.linkedin.com/in/trannguyendanghuy/"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.2 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://github.com/Ethanxcode"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Github"
                                        >
                                            <Github />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="mailto:danhuy.work@gmail.com"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Email"
                                        >
                                            <AtSign />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        download
                                        href="/resume-Huy-Tran-Nguyen-Dang.pdf"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Download Resume"
                                        >
                                            <Readcv />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Resume</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                    </TooltipProvider>
                </div>
            </div>
            <div className="flex relative w-full h-full">
                <Image
                    src={'/assets/images/me-3.jpg'}
                    alt="Me"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    className="rounded-md object-cover"
                />
            </div>
        </header>
    );
}
