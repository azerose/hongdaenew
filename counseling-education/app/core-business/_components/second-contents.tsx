import Image from 'next/image';

const SecondContents = () => {
    return (
        <section className="w-full flex justify-center py-8   bg-gradient-to-r from-teal-50 to-blue-50">
            <div className=" gap-8 flex px-4 md:px-6">
                <div className="text-lg w-[600px]">
                    <div className="text-5xl font-bold mb-8">2. 컨설팅 사업</div>
                    컨설팅 사업본부는 NGEC의 중요한 수익원 중 하나로, 개인과 기업을 위한 맞춤형
                    컨설팅 서비스를 제공합니다.
                    <div>
                        각 팀은 클라이언트의 특성에 맞는 솔루션을 제공하고, 지속적인 성장을 위한
                        전략을 제시합니다.
                    </div>
                    주요 활동은 다음과 같습니다.
                    <div>
                        - 개인 컨설팅팀은 커리어 코칭, 리더십 개발, 멘탈 코칭 등을 통해 개인의
                        성장과 자기 개발을 지원합니다.
                    </div>
                    - 기업 컨설팅팀은 기업의 조직 구조 및 인재 개발 문제를 해결하며, 브랜딩 전략팀은
                    개인 및 기업의 브랜딩 전략 수립과 실행을 지원하여 경쟁력 있는 이미지와 입지를
                    구축하도록 돕습니다.
                </div>
                <Image src="/consulting.jpg" alt="RND" width={500} height={200} />
            </div>
        </section>
    );
};

export default SecondContents;
