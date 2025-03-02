import { InfiniteMovingCards } from './ui/infinte-moving-cards';
import { fetchFeedbacks } from '@/utils/supabase/server';

export default async function Feedbacks() {
    const testimonials: {
        quote: string;
        name: string;
        title: string;
    }[] = [];

    try {
        const data = await fetchFeedbacks();
        if (data) {
            for (const item of data) {
                testimonials.push({
                    quote: item.quote,
                    name: item.name,
                    title: item.title,
                });
            }
        }
    } catch {
        return (
            <section
                id="feedbacks"
                className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32"
            >
                <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Things People Say
                </h2>
                <p className="text-lg leading-7 text-muted-foreground">
                    Failed to fetch feedbacks. Reload the page to try again
                </p>
            </section>
        );
    }

    fetchFeedbacks();

    return (
        <section
            id="feedbacks"
            className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32"
        >
            <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                Things People Say
            </h2>
            {testimonials.length === 0 && (
                <p className="text-lg leading-7 text-muted-foreground">
                    No feedbacks to display
                </p>
            )}
            {testimonials.length > 0 && (
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            )}
        </section>
    );
}
