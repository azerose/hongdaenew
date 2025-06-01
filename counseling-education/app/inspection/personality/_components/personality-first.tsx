import Image from 'next/image';

const PersonalityFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            성격유형 검사란?
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            개인의 사고방식, 행동패턴, 대인관계 성향 등을 종합적으로 분석하여
                            자신만의 성격 특성을 이해하도록 돕는 검사입니다. 진로 탐색, 관계 형성,
                            일상생활의 만족도를 높이는 데 유용합니다.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/personal_first.jpg"
                                alt="성격 유형 검사"
                                fill
                                priority
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/personal_second.jpg"
                                alt="종합 정서 검사"
                                fill
                                priority
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PersonalityFirst;
