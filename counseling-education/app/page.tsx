import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import ProgramList from './_components/home/program-list';
import FirstContents from './_components/home/first-contents';
import SecondContents from './_components/home/second-contents';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* 히어로 섹션 */}
                <FirstContents />

                {/* 특징 섹션 */}
                <SecondContents />

                {/* 프로그램 섹션 */}
                <ProgramList />

                {/* 후기 섹션 */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    교육생 후기
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    마음성장연구소의 교육을 경험한 분들의 생생한 이야기를
                                    들어보세요.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
                            <Card className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                                <span className="font-semibold text-gray-700">
                                                    김
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-semibold">김미영</p>
                                                <p className="text-sm text-gray-500">
                                                    심리상담사 과정 수료
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            "이론과 실습이 균형있게 구성되어 있어 실제 상담 현장에서
                                            바로 적용할 수 있었습니다. 특히 사례 연구 시간이 많아
                                            실전 감각을 키울 수 있었어요."
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                                <span className="font-semibold text-gray-700">
                                                    박
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-semibold">박준호</p>
                                                <p className="text-sm text-gray-500">
                                                    아동상담사 과정 수료
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            "직장을 다니면서도 주말 과정으로 무리 없이 공부할 수
                                            있었습니다. 강사진의 현장 경험이 풍부해서 실질적인
                                            노하우를 많이 배울 수 있었어요."
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                                                <span className="font-semibold text-gray-700">
                                                    이
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-semibold">이지현</p>
                                                <p className="text-sm text-gray-500">
                                                    가족상담사 과정 수료
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            "수료 후 바로 취업에 성공했습니다. 교육 과정에서 배운
                                            내용이 실제 상담 현장에서 큰 도움이 되고 있어요.
                                            체계적인 커리큘럼이 정말 좋았습니다."
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 문의하기 섹션 */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 justify-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    궁금한 점이 있으신가요?
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    상담교육 과정에 대한 자세한 안내를 원하시면 문의해 주세요. 전문
                                    상담사가 친절하게 안내해 드립니다.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-teal-600" />
                                        <span className="text-gray-700">02-123-4567</span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
