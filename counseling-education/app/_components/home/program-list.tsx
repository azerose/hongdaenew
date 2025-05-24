import ProgramCard from './program-card';

const ProgramList = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className=" px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                코칭 프로그램
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                개개인에 맞는 다양한 프로그램을 제공합니다
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <ProgramCard
                            img="/career_coaching.png"
                            alt="진로코칭"
                            title="진로코칭"
                            description="직업적 삶을 더욱 의미있고 가치있게 만드는 과정입니다."
                            link=""
                        />
                        <ProgramCard
                            img="/NPL_coaching.jpg"
                            alt="NLP 코칭(Neuro Linguistic Programming)"
                            title="NLP 코칭"
                            description="NLP(Neuro Linguistic Programming) 인간의 뇌, 언어, 행동 간의 상호작용을 이해하고 개선하는 데 초점을 맞춘 강력한 자기 발전을 할 수 있게 돕고 있습니다."
                            link=""
                        />
                        <ProgramCard
                            img="/musical_coaching.jpg"
                            alt="연기/연극 코칭"
                            title="연기/연극 코칭"
                            description="단순히 기술적 연기력 향상만이 아닌 그 이상의 개개인의 내면을 깊이 탐구하고, 감정 표현 및 상상력을 극대화 하는 과정입니다."
                            link=""
                        />
                        <ProgramCard
                            img="/mental_coaching.jpg"
                            alt="멘탈코칭"
                            title="멘탈코칭"
                            description="정신적, 감정적 안정성을 높이고, 삶의 질을 향상 시키기 위한 중요한 과정입니다."
                            link=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProgramList;
