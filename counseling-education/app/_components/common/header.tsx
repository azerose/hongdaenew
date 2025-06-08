'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MenuItem } from './types';

const MENU_LIST: MenuItem[] = [
    {
        id: 0,
        title: '소개',
        link: '/info',
        submenu: [
            { title: '회사 소개', link: '/info' },
            { title: '조직도', link: '/info/line' },
        ],
    },
    {
        id: 1,
        title: '코칭 프로그램',
        link: '/couching',
        submenu: [
            { title: '코칭 프로세스', link: '/couching' },
            { title: '진로 프로그램', link: '/couching/career' },
            { title: 'NPL 프로그램', link: '/couching/npl' },
            { title: '연기/연극 프로그램', link: '/couching/performance' },
            { title: '멘탈 프로그램', link: '/couching/mental' },
        ],
    },
    {
        id: 2,
        title: '검사 프로그램',
        link: '/inspection',
        submenu: [
            { title: '종합 정서 검사', link: '/inspection' },
            { title: '성격 유형 검사', link: '/inspection/personality' },
            { title: '성인 지능검사', link: '/inspection/intelligence' },
        ],
    },
    {
        id: 3,
        title: '주요사업',
        link: '/core-business',
    },
];

const Header = () => {
    return (
        <header className="sticky  top-0 z-40 border-b bg-background">
            <div className=" w-full flex h-16 items-center justify-between py-4">
                <Link className="cursor-pointer flex items-center gap-1" href={'/'}>
                    <Image src="/NGEC_logo_green.png" alt="NGEC" width={40} height={40} />
                    <span className="text-xl font-bold">NGEC</span>
                </Link>
                <nav className="hidden md:flex items-center gap-12">
                    {MENU_LIST.map((menu) => (
                        <div key={menu.id} className="relative group">
                            <Link
                                href={menu.link}
                                className="text-sm font-medium hover:text-teal-600 transition-colors"
                            >
                                {menu.title}
                            </Link>
                            {menu.submenu && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {menu.submenu.map((submenu, index) => (
                                        <Link
                                            key={index}
                                            href={submenu.link}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                                        >
                                            {submenu.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <Button className="bg-teal-600 hover:bg-teal-700">상담 신청</Button>
            </div>
        </header>
    );
};

export default Header;
