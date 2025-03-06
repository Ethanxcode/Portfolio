import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface ProjectCardProps {
    title: string;
    type?: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard3d({
    title,
    type,
    description,
    imageUrl,
    githubUrl,
    demoUrl,
    skills,
}: ProjectCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-stone-200 bg-gray-50 p-6 sm:w-[30rem] dark:border-stone-700 dark:bg-card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem translateZ="50" className="mt-4 w-full">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </CardItem>
                <CardItem
                    as="h3"
                    translateZ="60"
                    className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm text-muted-foreground"
                >
                    {type}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="50"
                    className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="40"
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default">
                                {skill}
                            </Badge>
                        ))}
                    </CardItem>
                )}
                <div className="mt-10 flex items-center justify-between">
                    {githubUrl && (
                        <CardItem translateZ={30}>
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Button
                                    variant="link"
                                    aria-label={`View ${title} source code on GitHub`}
                                >
                                    Link To Github
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                    {demoUrl && (
                        <CardItem translateZ={30}>
                            <Link
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Button
                                    aria-label={`View live demo of ${title}`}
                                >
                                    Live URL
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
}
