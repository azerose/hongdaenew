import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
                <div className="flex items-center gap-1">
                    <Image src="/NGEC_logo_green.png" alt="NGEC" width={40} height={40} />
                    <span className="font-semibold">NGEC</span>
                </div>
                <p className="text-sm text-gray-500">© 2025 마음성장연구소. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
                    >
                        개인정보처리방침
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
                    >
                        이용약관
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
