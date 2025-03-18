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
    title: 'Ethan Tran',
    description:
        'I explore, play, build, test and deploy software. Discover my projects, and development journey.',
    keywords: [
        'Ethan Tran',
        'Full-stack developer',
        'portfolio',
        'software engineering',
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://ethantran.is-a.dev',
    },
    openGraph: {
        title: 'Ethan Tran',
        description:
            'I explore, play, build, test and deploy software. Discover my projects, and development journey.',
        url: 'https://ethantran.is-a.dev',
        siteName: 'Ethan Tran',
        images: [
            {
                url: 'https://ethantran.is-a.dev/assets/images/logo.png',
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
        title: 'Ethan Tran',
        description:
            'I explore, play, build, test and deploy software. Discover my projects, and development journey.',
        creator: '@Ethancodes_', // Nếu có account Twitter
        // images: ['https://ethantran.is-a.dev/twitter-og-image.jpg'],
        images: ['https://ethantran.is-a.dev/assets/images/logo.png'],
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
            <head>
                <meta
                    name="google-site-verification"
                    content="oq97PEb7NGCa4Ys8zcd4Wesa87Y-EeXdkdvyz-5UlVA"
                />
            </head>
            <body
                className={`${mPlusRounded.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavigationBar />
                    <div className="relative min-h-dvh w-full overflow-hidden bg-background fade-in">
                        {/* Grid overlay */}

                        <main className="container relative mx-auto max-w-7xl">
                            {/* Grid overlay */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `
                                linear-gradient(to right, var(--theme-grid-color) 1px, transparent 1px),
                                linear-gradient(to bottom, var(--theme-grid-color) 1px, transparent 1px)
                                `,
                                    backgroundSize: '32px 32px',
                                    backgroundPosition: '0 0',
                                }}
                            />
                            {children}
                        </main>
                    </div>

                    <footer className="container mx-auto py-4">
                        <Link
                            href="https://github.com/Ethanxcode/portfolio"
                            target="_blank"
                        >
                            <p className="text-center text-sm text-muted-foreground transition-all hover:text-white">
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
