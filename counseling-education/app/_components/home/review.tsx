import { Card, CardContent } from '@/components/ui/card';

const Review = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            교육생 후기
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            NGEC의 교육을 경험한 분들의 생생한 이야기를 들어보세요.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                        <span className="font-semibold text-gray-700">김</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">김0영</p>
                                        <p className="text-sm text-gray-500">
                                            멘탈 코칭 프로그램 수료
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "입시로 지쳐 있던 저에게 큰 전환점이 되었어요. 감정을 다스리는
                                    방법을 배우며 마음의 여유를 되찾았고, 작은 성취에도 자신감을
                                    갖게 되었어요. 무엇을 좋아하고 잘할 수 있는지 알게 되니, 막연히
                                    불안했던 미래가 이제는 도전하고 싶은 목표로 가득해졌어요."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                        <span className="font-semibold text-gray-700">이</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">이0하</p>
                                        <p className="text-sm text-gray-500">
                                            연기/연극 프로그램 수료
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "저는 단순히 연기 기술만이 아니라 제 자신을 깊이 들여다보는 법을
                                    배웠습니다. 무대에 서는 게 늘 두려웠던 저였지만, 감정을
                                    자연스럽게 표현하는 연습을 통해 점차 자신감을 얻을 수 있었고,
                                    특히 캐릭터의 심리를 분석하고 이해하는 과정이 인상 깊었어요.
                                    지금은 소극장에서 직접 기획한 연극을 무대에 올리며 관객들과
                                    진정성 있는 소통을 이어가고 있습니다. 정말 추천드리고 싶어요!"
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                        <span className="font-semibold text-gray-700">최</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">최0혁</p>
                                        <p className="text-sm text-gray-500">멘토링/코칭</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "20대 초반, 인간관계에 자신이 없던 제가 NGEC 멘토링 코칭을 통해
                                    타인을 이해하고 공감하는 능력이 눈에 띄게 향상됐어요. 피드백을
                                    주고받는 연습을 통해 소통 방식이 달라졌고, 자연스럽게 팀
                                    프로젝트에서도 리더 역할을 맡게 되었습니다. 덕분에 졸업 후 첫
                                    직장에서 빠르게 인정받아 기획 업무를 주도할 수 있었어요. 단순한
                                    커리어 교육이 아니라, 삶의 방향까지 바꿔준 경험이었습니다."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Review;
