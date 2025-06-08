import MentalFirst from './_components/mental-first';
import MentalSecond from './_components/mental-second';

const MentalPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <MentalFirst />
            <MentalSecond />
        </div>
    );
};

export default MentalPage;
