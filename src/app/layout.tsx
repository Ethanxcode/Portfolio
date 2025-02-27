import type { Metadata } from 'next';
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/custom/nav-bar';
import Link from 'next/link';
import ClientAnlytic from '@/components/client-analytic';
import { Toaster } from 'sonner';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const mPlusRounded = M_PLUS_Rounded_1c({
    variable: '--font-mplus-rounded',
    subsets: ['latin'],
    weight: ['400', '700', '800'],
});

export const metadata: Metadata = {
    title: 'Ethan Tran | Full-Stack Developer',
    description:
        'I explore, play, build, test and deploy software. Check out my creative portfolio to see my projects and design process.',
    keywords: [
        'Full-stack developer',
        'portfolio',
        'UI/UX design',
        'software engineering',
        'Ethan Tran',
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://ethantran.com',
    },
    openGraph: {
        title: 'Ethan Tran - Portfolio',
        description:
            'I explore, play, build, test and deploy software. Discover my projects, designs, and development journey.',
        url: 'https://ethantran.com',
        siteName: 'Ethan Tran',
        images: [
            {
                url: 'https://ethantran.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Ethan Tran Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ethan Tran - Portfolio',
        description:
            'I plan, design, build, test and deploy software. Check out my projects and creative process!',
        creator: '@Ethancodes_', // Nếu có account Twitter
        images: ['https://ethantran.com/twitter-og-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${mPlusRounded.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider defaultTheme="dark" disableTransitionOnChange>
                    <NavigationBar />
                    <main className="container mx-auto">{children}</main>
                    <footer className="container mx-auto py-4">
                        <Link
                            href="https://github.com/Ethanxcode/portfolio"
                            target="_blank"
                        >
                            <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                                © Develop by Ethan Tran · 2024
                            </p>
                        </Link>
                    </footer>
                </ThemeProvider>
                <Toaster />
                <ClientAnlytic />
            </body>
        </html>
    );
}
