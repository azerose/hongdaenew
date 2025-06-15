import Image from 'next/image';

const FourthContents = () => {
    return (
        <section className="w-full flex justify-center py-8   bg-gradient-to-r from-teal-50 to-blue-50">
            <div className=" gap-8 flex px-4 md:px-6">
                <div className="text-lg w-[600px]">
                    <div className="text-5xl font-bold mb-8">4. 운영 및 지원 사업  </div>
                    운영 및 지원본부는 회사가 원활하게 운영될 수 있도록 다양한 지원 업무를
                    담당합니다.
                    <div>
                        이 부문은 조직 내부의 효율성을 높이고, 고객이 NGEC의 교육 및 컨설팅 서비스를
                        원활히 이용할 수 있도록 지원합니다.
                    </div>
                    주요 활동은 다음과 같습니다.
                    <div>
                        - 운영관리팀은 회사의 사무 운영과 시설 및 인프라를 관리하여 효율적인 업무
                        환경을 조성합니다.
                    </div>
                    - IT 개발팀은 교육 플랫폼과 컨설팅 시스템을 개발 및 운영하여 디지털 교육 환경을
                    강화하고, 고객지원팀은 고객의 요구를 지원하며, 서비스 품질을 지속적으로
                    개선합니다.
                </div>
                <Image src="/support.jpg" alt="support" width={500} height={200} />
            </div>
        </section>
    );
};

export default FourthContents;
