import Image from 'next/image';

const CareerFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="grid  lg:grid-cols-2  justify-center items-center">
                        <div className="mx-auto grid max-w-5xl mt-12">
                            <div className="w-[500px] h-[550px] relative">
                                <Image
                                    src="/career_main.jpg"
                                    alt="성인 지능 검사"
                                    fill
                                    priority
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                진로 프로그램
                            </h1>
                            <p className="max-w-[600px] pt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                자신의 직업적 삶을 더욱 의미 있고 가치 있게 만들어가는 여정입니다.
                                <br />
                                코칭센터에서 제공하는 진로 프로그램은 단순히 직업을 선택하는 과정에
                                그치지 않고, 개인의 성향, 가치는 물론 목표와 비전까지 종합적으로
                                고려하는 전방위적인 지원을 제공합니다.
                                <br /> 이는 자신의 강점을 발견하고, 그 강점을 어떻게 효과적으로
                                활용할 수 있을지 구체적인 계획을 세워 나가는 과정입니다.
                                <br /> 개인의 내면적인 가능성을 깨우고, 직업적 삶에서의 만족감과
                                성취감을 높이기 위한 동기부여와 실질적인 방법론을 제시합니다.
                                <br /> 더 이상 불확실성과 혼란에 빠지지 않고, 명확한 진로를 설정하여
                                안정적이고 행복한 직업적 삶을 살아갈 수 있도록 돕고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerFirst;
