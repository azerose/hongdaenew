import WhyCard from './why-card';

const SecondSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-teal-50 to-blue-50  pt-5 pb-8 px-4">
            <div className="text-4xl font-bold pl-[325px]">왜 NGEC인가?</div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 max-w-6xl mx-auto">
                <WhyCard
                    img="/info_1.jpg"
                    alt="info"
                    title="글로벌 교육"
                    description="NGEC는 기업과 기관들과의 파트너십을 통해 글로벌 교육의 트렌드를 선도하고 있으며, 각국의 교육 시스템에 맞는 현지화 된 교육 프로그램을 제공하고 있습니다. NGEC는 지속 가능한 교육을 통해 개인과 사회에 긍정적인 영향을 미치고, 글로벌 교육 분야에서의 리더로 자리매김하고 있습니다."
                />
                <WhyCard
                    img="/info_2.jpg"
                    alt="info2"
                    title="데이터 분석/기술 기반"
                    description="체계적이고 전문화 된 기술 기반의 컨설팅과 맞춤형 브랜딩 시스템을 도입하여 2030 세대가 미래 사회에서 필요한 개성과 차별성을 확보하여, 대체되지 않고 지속가능한 사회적 역량을 개발하는 데 중점을 두고 있습니다."
                />
                <WhyCard
                    img="/info_3.jpg"
                    alt="info3"
                    title="지속가능성/ESG"
                    description="사회인으로서의 역량을 요구하는 기업 트렌드에 따라 각 개인에게 필요한 인지적, 정서적, 사회적 능력을 향상시키고, 일상적인 삶에서의 만족감과 행복감을 고취시킬 수 있는 교육 프로세스를 구축하기 위해 지속적인 연구와 개발을 추진하고 있습니다."
                />
                <WhyCard
                    img="/info_4.jpg"
                    alt="info4"
                    title="멘토링/코칭"
                    description="NGEC는 다양한 연령대와 학습 수준에 맞는 맞춤형 교육 콘텐츠를 개발하여, 개인의 잠재력을 극대화하고, 글로벌 환경에서 경쟁력 있는 인재를 양성하고 개인과 기업의 만족도를 향상시키는 것을 목표로 합니다."
                />
            </div>
        </div>
    );
};

export default SecondSection;
