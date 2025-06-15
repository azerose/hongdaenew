import Image from 'next/image';

const ThirdContents = () => {
    return (
        <section className="w-full flex justify-center py-8  bg-white">
            <div className=" gap-8 flex px-4 md:px-6">
                <Image src="/education.jpg" alt="RND" width={500} height={200} />
                <div className="text-lg w-[600px]">
                    <div className="text-5xl font-bold mb-8">3. 교육 사업  </div>
                    교육 사업본부는 NGEC의 핵심 교육 프로그램을 기획하고 운영하는 부서로, 내실 있는
                    교육 콘텐츠와 효율적인 과정 운영을 통해 학생들에게 가치를 제공합니다.
                    <div>주요 활동은 다음과 같습니다.</div>
                    <div>
                        - 교육기획팀은 다양한 교육 콘텐츠와 커리큘럼을 개발하여 학습자의 요구에 맞는
                        교육 프로그램을 기획합니다.
                    </div>
                    - 강사운영팀은 전문 강사진을 운영하고 관리하며, 교육운영팀은 온·오프라인 교육
                    과정의 운영과 수강생 관리를 통해 교육의 품질과 효율성을 극대화합니다.
                </div>
            </div>
        </section>
    );
};

export default ThirdContents;
