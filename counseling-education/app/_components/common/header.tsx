import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-1">
                    <Image src="/NGEC_logo_green.png" alt="NGEC" width={40} height={40} />
                    <span className="text-xl font-bold">NGEC</span>
                </div>
                <nav className="hidden md:flex items-center gap-12">
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-teal-600 transition-colors"
                    >
                        소개
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-teal-600 transition-colors"
                    >
                        코칭 프로그램
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-teal-600 transition-colors"
                    >
                        교육 프로그램
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-teal-600 transition-colors"
                    >
                        주요사업
                    </Link>
                </nav>
                <Button className="bg-teal-600 hover:bg-teal-700">상담 신청</Button>
            </div>
        </header>
    );
};

export default Header;
