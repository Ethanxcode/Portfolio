import Image from 'next/image';
import { Reveal } from './custom/reveal';
import ChatGpt from './ui/gpt';
import Copilot from './ui/copilot';
import MatrixLoader from './custom/matrix-loader';
import Card from './custom/matrix-card';
import CanvasPlatformer from './custom/canvas-platformer';

export default function Skills() {
    const splineUrl = process.env.NEXT_PUBLIC_SPLINE_URL || '';

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        >
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded">
                Skills & Tools
            </h2>
            <p className="leading-7 text-center">
                My primary focus lies in frontend development and backend
                development. Full-stack is the way to go xD.
            </p>
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
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
                                        alt="Javascrip logo"
                                        width={100}
                                        height={100}
                                        priority
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
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        TypeScript
                                    </p>
                                </div>
                                {/* Java */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Java.svg"
                                        alt="Java logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Java
                                    </p>
                                </div>
                                {/* Python */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Python.svg"
                                        alt="Python logo"
                                        width={100}
                                        height={100}
                                        priority
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
                                        priority
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
                                        priority
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
                                        priority
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
                                        className="animate-spin hover:animate-none"
                                        priority
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        React
                                    </p>
                                </div>

                                {/* NextJS */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/NextJs.svg"
                                        alt="Javascrip logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        NextJS
                                    </p>
                                </div>

                                {/* Angular */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Angular.svg"
                                        alt="Angular logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Angular
                                    </p>
                                </div>

                                {/* VueJs */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Vuejs.svg"
                                        alt="Vuejs logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Angular
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
                                {/* NestJS */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/NestJs.svg"
                                        alt="NestJS logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        NestJS
                                    </p>
                                </div>

                                {/* Spring Boot */}
                                {/* <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#8bc34a"
                                            d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Spring Boot
                                    </p>
                                </div> */}

                                {/* Django */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Django.svg"
                                        alt="Django logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Django
                                    </p>
                                </div>

                                {/* Node */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/Node.svg"
                                        alt="Node logo"
                                        width={100}
                                        height={100}
                                        priority
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
                                        priority
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
                                        priority
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
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        MySQL
                                    </p>
                                </div>

                                {/* Google Cloud */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/GoogleCloud.svg"
                                        alt="Google Cloud logo"
                                        width={100}
                                        height={100}
                                        priority
                                        className="hover:animate-spin"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Google Cloud
                                    </p>
                                </div>

                                {/* MongoDB */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/assets/icons/mongodb.svg"
                                        alt="MongoDB logo"
                                        width={100}
                                        height={100}
                                        priority
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
                                        priority
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
                                        priority
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
            </>

            {/* <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 ">
                <Spline scene={splineUrl} /> 
                <aside className="bg-black hidden md:block text-white p-6 rounded-lg w-1/2 max-w-lg font-mono">
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p className="text-sm">bash</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-green-400">$ npm install next</p>
                            <p className="text-white">+ next@15.1.0</p>
                            <p className="text-white">
                                added 1 package, and audited 2 packages in 3s
                            </p>
                            <p className="text-green-400">$</p>
                        </div>
                    </Reveal>
                </aside>
            </div> */}
        </section>
    );
}
