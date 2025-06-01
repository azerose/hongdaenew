import type { Metadata } from 'next';
import './globals.css';
import Footer from './_components/common/footer';
import Header from './_components/common/header';

export const metadata: Metadata = {
    title: 'NGEC',
    description: 'Created with v0',
    generator: 'v0.dev',
    icons: {
        icon: [
            { url: '/NGEC_logo_green.png', sizes: '32x32' },
            { url: '/NGEC_logo_green.png', sizes: '48x48' },
            { url: '/NGEC_logo_green.png', sizes: '96x96' },
        ],
    },
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
