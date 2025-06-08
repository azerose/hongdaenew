import Image from 'next/image';
import TextSection from './_components/text-section';

const LinePage = () => {
    return (
        <div className="flex flex-col items-center">
            <Image src="/line.jpg" alt="조직도" width={1000} height={300} />
            <div className="w-full px-[450px] py-10">
                <TextSection />
            </div>
        </div>
    );
};

export default LinePage;
