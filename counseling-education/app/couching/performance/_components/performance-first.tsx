import Image from 'next/image';

const PerformanceFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="grid  lg:grid-cols-2  justify-center items-center">
                        <div className="mx-auto grid max-w-5xl mt-12">
                            <div className="w-[500px] h-[550px] relative">
                                <Image
                                    src="/performance.jpg"
                                    alt="연기"
                                    fill
                                    priority
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                연기/연극 프로그램
                            </h1>
                            <p className="max-w-[600px] pt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                단순히 기술적인 연기력을 향상시키는 것 이상의 의미를 지닙니다.
                                <br />
                                개개인의 내면을 깊이 탐구하고, 감정 표현 및 상상력을 극대화하는 것을
                                중점적으로 다룹니다.
                                <br /> 각기 다른 캐릭터와 상황을 표현하는 데 있어 필요한 창의성과
                                감동을 전달하는 능력을 향상시키고 있으며 이 코칭은 배우로서의
                                표현력을 넘어, 무대 경험과 팀워크, 그리고 사람과의 소통을
                                중요시합니다.
                                <br /> 진정성 있는 연기를 통해 무대에서뿐만 아니라 일상에서도
                                자신감을 가지고 보다 깊이 있는 소통을 이끌어낼 수 있는 능력을
                                배양하는 과정입니다.
                                <br /> 코칭을 통해 자신의 감정을 자유롭게 표현하고, 무대에서의
                                자신감을 얻으며, 더욱 성숙한 배우로서의 성장을 경험하게 됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PerformanceFirst;
