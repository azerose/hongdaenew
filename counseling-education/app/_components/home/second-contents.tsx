import { UserRoundPen, BookOpenText, ClipboardPen } from 'lucide-react';
import SecondCard from './second-card';

const SecondContents = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block mb-3 rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                            NGEC를 선택하는 이유?
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            다음세대에도 지속 가능한 프로그램
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            ESG경영을 모티브로 개인의 내적 역량을 강화하고 <br />
                            사회적 기업과 교육 기관들의 혁신을 선도하는 교육 과정을 제공합니다.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <SecondCard
                        icon={ClipboardPen}
                        title="전문적 검사 진행"
                        desc="SWOT 분석 모듈 제작과 다양한 연령대와 학습 수준에 자는 맞춤형 검사 제공"
                    />
                    <SecondCard
                        icon={BookOpenText}
                        title="다양한 프로그램 진행"
                        desc="개인의 잠재력을 극대화하고 경쟁력 있는 인재를 양성하기 위한 커리큘럼  "
                    />
                    <SecondCard
                        icon={UserRoundPen}
                        title="실전 중심 교육"
                        desc="기업과 기관들과의 파트너십을 통해 글로벌 교육의 트렌드를 선도하며 현장에서 바로 적용 가능한 실습 위주의 교육 제공"
                    />
                </div>
            </div>
        </section>
    );
};

export default SecondContents;
