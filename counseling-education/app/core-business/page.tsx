import FirstContents from './_components/first-contents';
import FourthContents from './_components/fourth-contents';
import SecondContents from './_components/second-contents';
import ThirdContents from './_components/third-contents';

const CoreBusinessPage = () => {
    return (
        <>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                NGEC(Next Global Education Center)의 주요 사업은 연구(R&D), 컨설팅, 그리고 교육으로
                나누어지며, 각 사업 부문은 조직 내에서 전문적인 역할을 수행하고 있습니다.
                <br /> 이들 사업은 NGEC의 핵심 가치를 실현하기 위해 밀접하게 연결되어 있으며, 내실을
                다지는 방향으로 운영됩니다. 각 사업의 주요 활동을 다음과 같이 정리할 수 있습니다.
            </section>
            <FirstContents />
            <SecondContents />
            <ThirdContents />
            <FourthContents />
        </>
    );
};

export default CoreBusinessPage;
