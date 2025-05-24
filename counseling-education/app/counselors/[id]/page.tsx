import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Mail, Phone, Calendar, ArrowLeft, Clock, GraduationCap, Award, FileText } from "lucide-react"

export default function CounselorDetailPage({ params }: { params: { id: string } }) {
  // 실제 구현에서는 params.id를 사용하여 상담사 정보를 가져옵니다
  // 여기서는 예시로 하드코딩된 데이터를 사용합니다
  const counselor = {
    id: "1",
    name: "김지현",
    title: "심리상담 전문가",
    email: "kim.jihyun@mindgrowth.kr",
    phone: "02-123-4567 (내선 101)",
    specialties: ["성인상담", "우울증", "불안장애", "대인관계"],
    bio: "10년 이상의 임상 경험을 가진 심리상담 전문가입니다. 성인의 우울, 불안, 대인관계 문제 등을 전문적으로 다루며, 인지행동치료(CBT)와 수용전념치료(ACT)를 주로 활용합니다. 내담자 개개인의 고유한 경험과 감정을 존중하며, 함께 성장하는 상담을 지향합니다.",
    education: [
      "서울대학교 심리학과 학사",
      "연세대학교 임상심리학 석사",
      "한국상담심리학회 상담심리사 1급",
      "한국임상심리학회 임상심리전문가",
    ],
    experience: [
      "현) 마음성장연구소 수석 상담사 (2018 ~ 현재)",
      "전) 서울심리상담센터 선임 상담사 (2013 ~ 2018)",
      "전) 대학병원 정신건강의학과 임상심리사 (2010 ~ 2013)",
    ],
    approach:
      "인지행동치료(CBT), 수용전념치료(ACT), 마음챙김 기반 인지치료(MBCT) 등 과학적 근거에 기반한 다양한 치료 접근법을 내담자의 특성과 문제에 맞게 통합적으로 적용합니다. 내담자가 자신의 문제를 이해하고 스스로 해결할 수 있는 힘을 기르도록 돕는 것을 중요시합니다.",
    sessions: [
      {
        title: "개인 심리상담",
        duration: "50분",
        price: "100,000원",
        description: "우울, 불안, 스트레스, 대인관계 등 다양한 심리적 어려움에 대한 1:1 맞춤형 상담",
      },
      {
        title: "부부/커플 상담",
        duration: "80분",
        price: "150,000원",
        description: "관계 개선, 의사소통 향상, 갈등 해결을 위한 커플 대상 상담",
      },
      {
        title: "심리검사 및 해석",
        duration: "120분",
        price: "200,000원",
        description: "MMPI-2, TCI, SCT 등 다양한 심리검사와 전문적인 해석 제공",
      },
    ],
  }

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
            <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
              홈
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              소개
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              교육 프로그램
            </Link>
            <Link href="/counselors" className="text-sm font-medium text-teal-600 transition-colors">
              전문가 소개
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              후기
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              문의하기
            </Link>
          </nav>
          <Button className="bg-teal-600 hover:bg-teal-700">상담 신청</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 상단 프로필 섹션 */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <Link href="/counselors" className="inline-flex items-center text-teal-600 mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" /> 상담사 목록으로 돌아가기
            </Link>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=600&width=450"
                    alt={`${counselor.name} 상담사`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
                    {counselor.name} 상담사
                  </h1>
                  <p className="text-xl text-gray-500">{counselor.title}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {counselor.specialties.map((specialty, index) => (
                    <Badge key={index} className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600">{counselor.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>{counselor.email}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{counselor.phone}</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                  <Calendar className="h-4 w-4 mr-2" /> 상담 예약하기
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 상세 정보 탭 섹션 */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profile">프로필</TabsTrigger>
                <TabsTrigger value="approach">상담 접근법</TabsTrigger>
                <TabsTrigger value="sessions">상담 프로그램</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <GraduationCap className="h-6 w-6 mr-2 text-teal-600" /> 학력 및 자격
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    {counselor.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-2 text-teal-600" /> 경력
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    {counselor.experience.map((exp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="approach" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-teal-600" /> 상담 접근법
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">{counselor.approach}</p>
                </div>
                <Card className="bg-teal-50 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">상담 철학</h3>
                    <p className="text-gray-600">
                      "내담자가 자신의 내면의 힘을 발견하고, 스스로 성장할 수 있도록 돕는 것이 상담사의 역할이라고
                      생각합니다. 모든 사람은 자신만의 고유한 이야기와 경험을 가지고 있으며, 그 안에서 의미와 해결책을
                      찾을 수 있습니다."
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sessions" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-teal-600" /> 상담 프로그램
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {counselor.sessions.map((session, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{session.duration}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{session.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-teal-600">{session.price}</span>
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                              예약하기
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="bg-gray-50 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">상담 진행 방식</h3>
                    <p className="text-gray-600 mb-4">
                      상담은 대면(센터 내원) 또는 비대면(화상 상담)으로 진행 가능합니다. 첫 상담에서는 내담자의 현재
                      상황과 어려움을 파악하고, 앞으로의 상담 방향을 함께 설정합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="flex items-center gap-1">
                        <Phone className="h-4 w-4" /> 전화 문의하기
                      </Button>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        <Calendar className="h-4 w-4 mr-2" /> 상담 예약하기
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 추천 상담사 섹션 */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">다른 전문 상담사</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 추천 상담사 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="박성민 상담사"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">박성민 상담사</h3>
                    <p className="text-white/90 text-sm">아동청소년 전문가</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">아동청소년</Badge>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">ADHD</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    프로필 보기
                  </Button>
                </CardContent>
              </Card>

              {/* 추천 상담사 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="이수진 상담사"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">이수진 상담사</h3>
                    <p className="text-white/90 text-sm">가족상담 전문가</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">가족상담</Badge>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">부부관계</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    프로필 보기
                  </Button>
                </CardContent>
              </Card>

              {/* 추천 상담사 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="한미영 상담사"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">한미영 상담사</h3>
                    <p className="text-white/90 text-sm">트라우마 치료 전문가</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">트라우마</Badge>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">PTSD</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    프로필 보기
                  </Button>
                </CardContent>
              </Card>
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
          <p className="text-sm text-gray-500">© 2025 마음성장연구소. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
