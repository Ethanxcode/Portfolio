'use client';

import { ArrowRightIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Reveal } from './custom/reveal';
import { Badge } from './ui/badge';
import workExperiences from '@/lib/work-experiences.json';

interface WorkExperience {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
    skills: string[];
}

export default function Experiences() {
    const [selectedCompany, setSelectedCompany] = useState<WorkExperience>(
        workExperiences[0],
    );

    return (
        <section
            id="experiences"
            className="bg-background py-16 text-foreground sm:py-32"
        >
            <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                Where I&#39;ve Worked
            </h2>
            <br />
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-full overflow-x-auto md:mb-0 md:w-1/3 md:overflow-x-visible lg:w-1/4">
                    <div className="flex md:flex-col md:border-l md:border-border">
                        {workExperiences.map((exp) => (
                            <Button
                                key={exp.company}
                                variant="ghost"
                                className={`min-w-[120px] justify-start rounded-none px-4 py-2 text-sm md:w-full ${selectedCompany.company === exp.company ? 'bg-secondary md:border-l-2 md:border-primary' : ''}`}
                                onClick={() => setSelectedCompany(exp)}
                                aria-label={`Show work experience at ${exp.company}`}
                            >
                                <span className="truncate" title={exp.company}>
                                    {exp.company}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-2/3 md:pl-8 lg:w-3/4">
                    <h3 className="mb-1 text-xl font-semibold">
                        {selectedCompany.position}{' '}
                        <span className="text-primary">
                            @ {selectedCompany.company}
                        </span>
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                        {selectedCompany.duration}
                    </p>
                    <ul className="space-y-4">
                        {selectedCompany.responsibilities.map(
                            (responsibility, index) => (
                                <li key={index} className="flex items-start">
                                    <ArrowRightIcon className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                                    <span>{responsibility}</span>
                                </li>
                            ),
                        )}
                    </ul>
                    <br />
                    {selectedCompany.skills && (
                        <div className="flex flex-wrap gap-2">
                            {selectedCompany.skills.map((skill, index) => (
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
                    )}
                </div>
            </div>
        </section>
    );
}
