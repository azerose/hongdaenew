import Image from 'next/image';
import FirstText from './_components/fisrt-text';
import SecondSection from './_components/second-section';

const InfoPage = () => {
    return (
        <>
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
