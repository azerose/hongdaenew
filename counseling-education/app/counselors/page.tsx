import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  Search,
} from "lucide-react";

export default function CounselorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 네비게이션 바 */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">마음성장연구소</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              홈
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              소개
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              교육 프로그램
            </Link>
            <Link
              href="/counselors"
              className="text-sm font-medium text-teal-600 transition-colors"
            >
              전문가 소개
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              후기
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              문의하기
            </Link>
          </nav>
          <Button className="bg-teal-600 hover:bg-teal-700">상담 신청</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  전문 상담사 소개
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  마음성장연구소의 전문 상담사들을 소개합니다. 각 분야의
                  전문가들이 여러분의 성장을 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 검색 및 필터 섹션 */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="상담사 이름 또는 전문 분야 검색"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid grid-cols-4 md:grid-cols-5 w-full md:w-auto">
                  <TabsTrigger value="all">전체</TabsTrigger>
                  <TabsTrigger value="adult">성인상담</TabsTrigger>
                  <TabsTrigger value="child">아동청소년</TabsTrigger>
                  <TabsTrigger value="family">가족상담</TabsTrigger>
                  <TabsTrigger value="career" className="hidden md:block">
                    진로상담
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 상담사 1 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="김지현 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            김지현 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            심리상담 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            성인상담
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            우울증
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            불안장애
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          10년 이상의 임상 경험을 가진 심리상담 전문가입니다.
                          성인의 우울, 불안, 대인관계 문제 등을 전문적으로
                          다루며, 인지행동치료(CBT)와 수용전념치료(ACT)를 주로
                          활용합니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>kim.jihyun@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 101)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* 상담사 2 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="박성민 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            박성민 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            아동청소년 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            아동청소년
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            ADHD
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            학교적응
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          아동청소년 심리 전문가로 ADHD, 학습장애, 또래관계 문제
                          등을 전문적으로 다룹니다. 놀이치료와 미술치료를 통해
                          아이들의 건강한 성장을 돕고 있습니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>park.sm@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 102)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* 상담사 3 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="이수진 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            이수진 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            가족상담 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            가족상담
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            부부관계
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            부모교육
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          가족 시스템 전문가로 부부관계, 부모-자녀 관계 개선을
                          위한 상담을 제공합니다. 가족 구성원 간의 소통 방식을
                          개선하고 건강한 가족 문화를 만드는 데 도움을 드립니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>lee.sj@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 103)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* 상담사 4 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="정민우 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            정민우 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            진로상담 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            진로상담
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            직업적성
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            경력전환
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          진로 및 직업 전문 상담사로 청소년과 성인의 진로 탐색,
                          직업 적성 파악, 경력 전환 등을 돕습니다. 다양한
                          심리검사와 코칭 기법을 활용한 맞춤형 진로 상담을
                          제공합니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>jung.mw@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 104)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* 상담사 5 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="한미영 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            한미영 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            트라우마 치료 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            트라우마
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            PTSD
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            EMDR
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          트라우마 치료 전문가로 EMDR, 트라우마 집중
                          인지행동치료 등 다양한 기법을 활용합니다. 외상 후
                          스트레스, 상실, 애도 등의 문제를 전문적으로 다룹니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>han.my@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 105)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* 상담사 6 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="최준호 상담사"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">
                            최준호 상담사
                          </h3>
                          <p className="text-white/90 text-sm">
                            중독 치료 전문가
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            중독
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            게임중독
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                            회복
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          다양한 중독 문제(게임, 스마트폰, 알코올 등)에 대한
                          전문 상담사입니다. 동기강화상담과 인지행동치료를 통해
                          중독 행동의 조절과 건강한 생활 패턴 회복을 돕습니다.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>choi.jh@mindgrowth.kr</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>02-123-4567 (내선 106)</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            상세 프로필 <ArrowRight className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" /> 상담 예약
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="adult" className="mt-0">
                  {/* 성인상담 전문가만 필터링하여 표시 */}
                </TabsContent>
                <TabsContent value="child" className="mt-0">
                  {/* 아동청소년 전문가만 필터링하여 표시 */}
                </TabsContent>
                <TabsContent value="family" className="mt-0">
                  {/* 가족상담 전문가만 필터링하여 표시 */}
                </TabsContent>
                <TabsContent value="career" className="mt-0">
                  {/* 진로상담 전문가만 필터링하여 표시 */}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="w-full py-12 md:py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                전문 상담사와 함께 더 나은 내일을 만들어보세요
              </h2>
              <p className="max-w-[600px] text-gray-500">
                마음성장연구소의 전문 상담사들이 여러분의 심리적 어려움을 함께
                해결해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  상담 예약하기
                </Button>
                <Button variant="outline">무료 상담 문의</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-teal-600" />
            <span className="font-semibold">마음성장연구소</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 마음성장연구소. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
