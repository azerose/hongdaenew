import Image from 'next/image';

export default function CouchingPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="relative w-full h-full">
                <Image
                    src="/couching_main.jpg"
                    alt="코칭 프로그램"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
