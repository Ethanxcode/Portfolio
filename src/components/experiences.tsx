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
            className="bg-background text-foreground sm:py-32 py-16"
        >
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded">
                Where I've Worked
            </h2>
            <br />
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0 overflow-x-auto md:overflow-x-visible">
                    <div className="flex md:flex-col md:border-l md:border-border">
                        {workExperiences.map((exp) => (
                            <Button
                                key={exp.company}
                                variant="ghost"
                                className={`px-4 py-2 text-sm min-w-[120px] md:w-full justify-start rounded-none ${
                                    selectedCompany.company === exp.company
                                        ? 'bg-secondary md:border-l-2 md:border-primary'
                                        : ''
                                }`}
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
                <div className="w-full md:w-2/3 lg:w-3/4 md:pl-8">
                    <h3 className="text-xl font-semibold mb-1">
                        {selectedCompany.position}{' '}
                        <span className="text-primary">
                            @ {selectedCompany.company}
                        </span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        {selectedCompany.duration}
                    </p>
                    <ul className="space-y-4">
                        {selectedCompany.responsibilities.map(
                            (responsibility, index) => (
                                <li key={index} className="flex items-start">
                                    <ArrowRightIcon className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                    <span>{responsibility}</span>
                                </li>
                            ),
                        )}
                    </ul>
                    <br />
                    {selectedCompany.skills && (
                        <div className="flex gap-2 flex-wrap">
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
