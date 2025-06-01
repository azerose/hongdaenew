import Image from 'next/image';

const IntelligenceFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            성인지능 검사란?
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            언어 이해, 논리적 사고, 기억력, 집중력 등 다양한 인지 기능을 종합적으로
                            평가하는 검사입니다. 자신의 인지능력 특성을 파악하고, 성장과 자기계발
                            방향을 설정하는 데 도움을 줍니다.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/intel_first.jpg"
                                alt="성인 지능 검사"
                                fill
                                priority
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/intel_second.jpg"
                                alt="성인 지능 검사"
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

export default IntelligenceFirst;
