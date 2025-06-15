import Image from 'next/image';

const FirstContents = () => {
    return (
        <section className="w-full flex justify-center py-8  bg-white">
            <div className=" gap-8 flex px-4 md:px-6">
                <Image src="/Rnd.jpg" alt="RND" width={500} height={200} />
                <div className="text-lg w-[600px]">
                    <div className="text-5xl font-bold mb-8">1. 연구(R&D) 사업 </div>
                    NGEC의 연구개발본부는 차별화된 교육 및 컨설팅 프로그램 개발을 위해 핵심적인
                    역할을 합니다.
                    <div>
                        이 부문은 교육 혁신과 데이터 기반 솔루션을 제공하여, 지속 가능한 성장과
                        글로벌 시장에서의 경쟁력을 확보하는 데 기여합니다.
                    </div>
                    주요 활동은 다음과 같습니다.
                    <div>
                        - 교육 연구팀은 교육 이론 및 심리학적 연구를 통해 혁신적인 교육 방법론을
                        개발하고, 컨설팅 기법 개발팀은 맞춤형 컨설팅 도구와 기법을 개발하여,
                        클라이언트가 실질적으로 적용할 수 있는 솔루션을 제공합니다.
                    </div>
                    - SWOT 분석팀은 개인과 기업에 맞춤형 SWOT 모델을 개발하여 진단 및 전략적 계획을
                    지원하며, AI & 데이터 분석팀은 교육 및 코칭 맞춤형 데이터 기반 솔루션을 개발하여
                    교육 효과와 컨설팅 성과를 극대화합니다.
                </div>
            </div>
        </section>
    );
};

export default FirstContents;
