import About from '@/components/about';
// import Contact from '@/components/contact';
// import CanvasPlatformer from '@/components/custom/canvas-platformer';
// import Experiences from '@/components/experiences';
import Feedbacks from '@/components/feedbacks';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { Separator } from '@/components/ui/separator';
import MatrixLoader from '@/components/custom/matrix-loader';
import Timeline from '@/components/time-line';
import ContactForm from '@/components/custom/contact-form';
import Marquee from '@/components/custom/marquee';
import DynamicFrameLayout from '@/components/custom/dynamic-frame-layout';

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Hero />
            <Separator />
            <About />
            <Separator />
            {/* <DynamicFrameLayout /> */}
            <Separator />
            <Timeline />
            <Separator />
            {/* <Experiences />
            <Separator /> */}
            <Projects />
            <Separator />
            <Feedbacks />
            <Separator />
            <Skills />
            <Separator />
            {/* <Contact /> */}
            <Marquee />
            <Separator />
            <ContactForm />
            <Separator />
            {/* <MatrixLoader /> */}
            {/* <Card mode={0}>
                <CanvasPlatformer />
            </Card> */}
        </div>
    );
}
