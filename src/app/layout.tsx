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
    description: 'I plan, design, build, test and deploy software',
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
