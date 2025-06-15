import { Phone, Mail } from 'lucide-react';
import ProgramList from './_components/home/program-list';
import FirstContents from './_components/home/first-contents';
import SecondContents from './_components/home/second-contents';
import Review from './_components/home/review';

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
                <Review />
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
                                        <span className="text-gray-700">010-9568-4288</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-teal-600" />
                                        <span className="text-gray-700">h_813@nate.com</span>
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
