import Image from 'next/image';
import FirstText from './_components/fisrt-text';
import SecondSection from './_components/second-section';

const InfoPage = () => {
    return (
        <>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/banner.webp"
                    alt="banner"
                    fill
                    className="object-cover object-[center_80%]"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                            NGEC 소개
                        </h1>
                        <p className="text-xl md:text-2xl drop-shadow-md">
                            지속 가능한 미래를 위한 교육 혁신
                        </p>
                    </div>
                </div>
            </div>
            <FirstText />
            <div className="flex flex-col items-center">
                <Image src="/history_0.jpg" alt="history0" width={600} height={300} />
                <Image src="/history_1.jpg" alt="history1" width={600} height={300} />
            </div>
            <SecondSection />
        </>
    );
};

export default InfoPage;
