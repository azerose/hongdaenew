import Image from 'next/image';

const NlpFirst = () => {
    return (
        <div>
            <section className="w-full flex items-center justify-center  py-10 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="grid  lg:grid-cols-2  justify-center items-center">
                        <div className="mx-auto grid max-w-5xl mt-12">
                            <div className="w-[500px] h-[550px] relative">
                                <Image
                                    src="/npl_main.jpg"
                                    alt="nlp 검사"
                                    fill
                                    priority
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                NLP프로그램 (Neuro Linguistic Programming)
                            </h1>
                            <p className="max-w-[600px] pt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                인간의 뇌, 언어, 행동 간의 상호작용을 이해하고 개선하는 데 초점을
                                맞춘 강력한 자기 발전 도구입니다.
                                <br />
                                코칭센터에서 제공하는 NLP프로그램은 부정적인 사고 패턴을 변화시키고,
                                목표 달성을 위한 내적 자원을 발굴하여 실질적인 성과를 이루도록
                                돕습니다.
                                <br /> NLP는 우리가 사용하는 언어와 신경학적 과정, 그리고 그것들이
                                우리의 행동에 미치는 영향을 탐구함으로써, 보다 효율적이고 긍정적인
                                변화를 일으킬 수 있는 기회를 제공합니다.
                                <br /> 코칭은 개인의 한계를 넘어설 수 있도록 돕고, 새로운 사고의
                                틀을 만들어가며, 더 나은 선택을 할 수 있도록 유도합니다.
                                <br /> 이 과정을 통해 스스로의 잠재력을 깨우고, 삶의 변화에 NLP
                                프로그램은 직장 내에서의 성과 향상, 대인 관계 개선, 개인적 목표 달성
                                등 다양한 분야에서 강력한 변화를 일으킬 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default NlpFirst;
