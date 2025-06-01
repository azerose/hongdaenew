import type { Metadata } from 'next';
import './globals.css';
import Footer from './_components/common/footer';
import Header from './_components/common/header';

export const metadata: Metadata = {
    title: 'NGEC',
    description: 'Created with v0',
    generator: 'v0.dev',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
