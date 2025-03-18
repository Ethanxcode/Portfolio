import { Reveal } from './custom/reveal';

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 py-16 sm:py-32">
            <h2
                id="about"
                className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl"
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
                <p className="text-lg leading-7 text-muted-foreground">
                    🎓 I am <strong>Tran Nguyen Dang Huy</strong> from 📍 Ho Chi
                    Minh, Vietnam. I have graduated with a degree in{' '}
                    <strong>Information Technology</strong> and currently work
                    as a <strong>Full Stack Developer</strong> with over{' '}
                    <strong>1 year of experience</strong>. My passion lies in
                    building high-quality, scalable software applications,
                    mastering both frontend and backend development. As the
                    saying goes,
                    <em> "Once you go full stack, you never go back."</em>
                    <br />
                    <br />
                    📚 Besides coding, I enjoy reading books, particularly in
                    self-help and fiction. Some of my favorites include{' '}
                    <strong>Kafka on the Shore</strong> by{' '}
                    <em>Haruki Murakami</em>
                    and <strong>The Courage to Be Disliked</strong> by{' '}
                    <em>Ichiro Kishimi & Fumitake Koga</em>.
                </p>
            </Reveal>
        </section>
    );
}
