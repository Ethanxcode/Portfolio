import { Reveal } from './custom/reveal';

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
            <h2
                id="about"
                className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mplus-rounded"
            >
                About Me
            </h2>
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <p className="text-lg text-muted-foreground leading-7">
                    🎓 I am Tran Nguyen Dang Huy located at📍 Ho Chi Minh,
                    Vietnam. I am also Pursuing my Associate's Degree, in{' '}
                    <strong>Information Technology</strong> and will graduate in
                    mid-2024. I'm passionate about coding, reading, and creating
                    valuable digital products.
                    <br />
                    <br />
                    📚 I also love reading books on Self-help & Novel. My
                    favorite ones are Kafka At The Shore by Murakami Haruki in
                    the genre of the novel and THE COURAGE TO BE DISLIKED by
                    Ksishimi Ichiro & Koga Fumitake in the genre of self-help.
                    <br />
                    <br />
                    Presently, my primary focus revolves around mastering the
                    art of building high-quality and scalable software
                    applications, continuously refining my skills in both
                    frontend and backend development. As the saying goes,
                    <em>"Once you go fullstack, you never go back"</em>.
                </p>
            </Reveal>
        </section>
    );
}
