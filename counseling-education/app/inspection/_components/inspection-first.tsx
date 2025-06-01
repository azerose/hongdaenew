import Image from 'next/image';

const InspectionFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            종합정서 검사란?
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            감정 인식, 표현, 조절 능력을 종합적으로 평가하여 개인의 정서적 강점과
                            개선 방향을 제시하는 검사입니다. 자신에 대한 이해를 높이고 감정관리
                            능력을 키워, 더 건강한 관계와 삶의 질 향상을 돕고 있습니다.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/total_test.jpg"
                                alt="종합 정서 검사"
                                fill
                                priority
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-[500px] h-[500px] relative">
                            <Image
                                src="/total_sub.jpg"
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

export default InspectionFirst;
