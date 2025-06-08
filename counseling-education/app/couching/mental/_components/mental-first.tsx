import Image from 'next/image';

const MentalFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="grid  lg:grid-cols-2  justify-center items-center">
                        <div className="mx-auto grid max-w-5xl mt-12">
                            <div className="w-[500px] h-[550px] relative">
                                <Image
                                    src="/npl_main.jpg"
                                    alt="npl 검사"
                                    fill
                                    priority
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                멘탈 프로그램
                            </h1>
                            <p className="max-w-[600px] pt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                개인의 정신적, 감정적 안정성을 높이고, 삶의 질을 향상시키기 위한
                                중요한 과정입니다.
                                <br /> 코칭센터에서 제공하는 멘탈 프로그램은 단순히 스트레스나
                                불안감을 해소하는 것에 그치지 않고, 삶의 전반적인 균형을 맞추고,
                                감정적 회복력과 긍정적인 사고 방식을 키우는 데 중점을 둡니다.
                                <br />
                                전문가를 통해 개인의 상황과 성향에 맞춘 맞춤형 코칭을 통해 내면의
                                힘을 깨우고, 자신감과 자기 존중감을 회복할 수 있도록 돕습니다.
                                <br /> 또한, 멘탈 코칭은 도전적인 상황에서도 침착하게 대응할 수
                                있도록 해주며, 장기적인 목표를 달성하기 위한 멘탈적인 준비를 철저히
                                할 수 있도록 지원합니다.
                                <br /> 코칭을 통해 보다 강한 마음을 가지게 되며, 지속적인 발전을
                                위한 내적 동기를 발견할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MentalFirst;
