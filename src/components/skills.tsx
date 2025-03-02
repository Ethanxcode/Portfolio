import Image from 'next/image';
import { Reveal } from './custom/reveal';
import ChatGpt from './ui/gpt';
import Copilot from './ui/copilot';

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32"
        >
            <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                Skills & Tools
            </h2>
            <p className="text-center leading-7 text-muted-foreground">
                My primary focus lies in frontend development and backend
                development. Full-stack is the way to go xD.
            </p>
            <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* Languages */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Languages
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/JavaScript.svg"
                                    alt="JavaScript logo"
                                    width={100}
                                    height={100}
                                    // Bỏ priority để lazy load
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    JavaScript
                                </p>
                            </div>
                            {/* TypeScript */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/TypeScript.svg"
                                    alt="TypeScript logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    TypeScript
                                </p>
                            </div>
                            {/* Go */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Golang.svg"
                                    alt="Go logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Go
                                </p>
                            </div>
                            {/* Python */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Python.svg"
                                    alt="Python logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Python
                                </p>
                            </div>
                            {/* PHP */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Php.svg"
                                    alt="PHP logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    PHP
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Frontend */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Frontend
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* CSS */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Css.svg"
                                    alt="CSS logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    CSS
                                </p>
                            </div>
                            {/* HTML */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Html.svg"
                                    alt="HTML logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    HTML
                                </p>
                            </div>
                            {/* React */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/React.svg"
                                    alt="React logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="animate-spin hover:animate-none"
                                />
                                <p className="text-sm text-muted-foreground">
                                    React
                                </p>
                            </div>
                            {/* NextJS */}
                            <div className="flex flex-col items-center justify-center">
                                {/* SVG dành cho light mode */}
                                <Image
                                    src="/assets/icons/NextJs-light.svg"
                                    alt="NextJs logo light"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="block hover:animate-spin dark:block"
                                />
                                {/* SVG dành cho dark mode */}
                                <Image
                                    src="/assets/icons/NextJs-black.svg"
                                    alt="NextJs logo dark"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hidden hover:animate-spin dark:hidden"
                                />
                                <p className="text-sm text-muted-foreground">
                                    NextJS
                                </p>
                            </div>
                            {/* VueJs */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Vuejs.svg"
                                    alt="Vuejs logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Vuejs
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Backend */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Backend
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* Laravel */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Laravel.svg"
                                    alt="Laravel logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Laravel
                                </p>
                            </div>
                            {/* Lumen */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Lumen.svg"
                                    alt="Lumen logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Lumen
                                </p>
                            </div>
                            {/* NestJS */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/NestJs.svg"
                                    alt="NestJS logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    NestJS
                                </p>
                            </div>
                            {/* Node */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Node.svg"
                                    alt="Node logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Node
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Database & Cloud */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.3 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Database & Cloud
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* AWS */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Aws.svg"
                                    alt="Aws logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    AWS
                                </p>
                            </div>
                            {/* PostgreSQL */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/PostgreSql.svg"
                                    alt="PostgreSQL logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    PostgreSQL
                                </p>
                            </div>
                            {/* MySQL */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/MySql.svg"
                                    alt="MySQL logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    MySQL
                                </p>
                            </div>
                            {/* MongoDB */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/mongodb.svg"
                                    alt="MongoDB logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    MongoDB
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Tools */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.4 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Tools
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* Git */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Git.svg"
                                    alt="Git logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Git
                                </p>
                            </div>
                            {/* Figma */}
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/assets/icons/Figma.svg"
                                    alt="Figma logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="hover:animate-spin"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Figma
                                </p>
                            </div>
                            {/* OpenAI */}
                            <div className="flex flex-col items-center justify-center">
                                <ChatGpt className="hover:animate-spin" />
                                <p className="text-sm text-muted-foreground">
                                    OpenAI
                                </p>
                            </div>
                            {/* Copilot */}
                            <div className="flex flex-col items-center justify-center">
                                <Copilot className="hover:animate-spin" />
                                <p className="text-sm text-muted-foreground">
                                    Copilot
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
