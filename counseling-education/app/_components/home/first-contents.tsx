import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const FirstContents = () => {
    return (
        <section className="w-full  flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="flex flex-col gap-2 text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            개인 역량과 사회적 책임을 키워
                            <div>지속 가능하고 혁신적인</div>
                            <div>글로벌 미래를 만듭니다.</div>
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            NGEC는 ESG 경영을 기반으로 개인 역량 강화와 글로벌 인재 양성을 선도하는
                            교육 기업입니다. 맞춤형 교육과 전문 컨설팅으로 2030 세대의 차별화된
                            경쟁력과 지속가능한 성장을 지원합니다.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/couching">
                                <Button className="bg-teal-600 hover:bg-teal-700">
                                    프로그램 알아보기
                                </Button>
                            </Link>
                            <Button variant="outline">무료 상담 신청</Button>
                        </div>
                    </div>
                    <div className="mx-auto lg:mx-0 w-full aspect-video overflow-hidden rounded-xl">
                        <Image
                            src="/home_main.jpg"
                            height={500}
                            width={900}
                            alt="상담교육 이미지"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstContents;
