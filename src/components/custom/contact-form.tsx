'use client';

import { useTransition } from 'react';
import { motion } from 'framer-motion';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { sendMessageToTelegram } from '@/actions/telegram';
import { toast } from 'sonner';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phoneNumber: z
        .string()
        .min(10, { message: 'Please enter a valid phone number.' }),
    budget: z.string().min(1, { message: 'Please enter your budget.' }),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactForm() {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            budget: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, email, phoneNumber, budget, message } = values;

        const formattedMessage = `
        📩 *New Contact Information* 📩
        
        👤 *Name:* ${name || 'N/A'}
        📧 *Email:* ${email || 'N/A'}
        📞 *Phone Number:* ${phoneNumber || 'N/A'}
        💰 *Budget:* ${budget || 'N/A'}
        📝 *Message:* ${message || 'N/A'}
        
        🚀 *Sent from the portfolio!*`;

        startTransition(() => {
            sendMessageToTelegram(formattedMessage)
                .then((data) => {
                    if (data.error) {
                        toast.error(data.error);
                        form.reset();
                        return;
                    }
                    toast.success(data.message);
                    form.reset();
                })
                .catch((error) => {
                    form.reset();
                    toast.error(error.message);
                });
        });
    }

    return (
        <section
            id="contact"
            className="inset-0 z-10 bg-background bg-gradient-to-r from-background via-transparent to-background p-16 sm:p-32"
        >
            {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
            >
                <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Get in Touch
                </h2>
                <p className="text-lg leading-7 text-muted-foreground">
                    We&apos;d love to hear from you. Fill out the form below and
                    we&apos;ll get back to you as soon as possible.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+1 (555) 000-0000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="$1,000 - $5,000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your project..."
                                            className="min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            aria-label="Send your message"
                            className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#4C1D95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-stone-200 shadow-2xl shadow-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            disabled={isPending}
                        >
                            {isPending ? 'Sending...' : 'Send Message'}
                        </Button>

                        {/* border-slate-800  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] */}
                        {/* <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button> */}
                    </form>
                </Form>
            </motion.div>
            {/* </div> */}
        </section>
    );
}
