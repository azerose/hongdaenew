const PersonalitySecond = () => {
    return (
        <section className="w-full flex flex-col gap-12 items-center justify-center py-8  bg-white">
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">결과 제공</div>
                <div className="text-xl flex flex-col md:flex-row gap-4 md:gap-10">
                    <span>• 성격 유형 분석 리포트</span>
                    <span>• 대인관계 및 의사소통 스타일 진단</span>
                    <span>• 성향에 맞는 진로 및 성장 전략 제안</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">학생용</div>
                <div className="text-xl font-bold">나를 알고 나를 찾는 시간!</div>
                <div className="text-xl">
                    성격에 대한 이해는 자신감 있는 선택과 건강한 또래 관계 형성의 첫걸음입니다.
                    <br /> 진로 탐색, 자기이해, 사회성 향상에 도움을 줍니다.
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">추천 대상</div>
                <div className="text-xl flex flex-col gap-2">
                    <div>• 나에게 맞는 공부법이나 진로를 찾고 싶은 청소년</div>
                    <div>• 친구 관계나 소통에서 나만의 스타일을 알고 싶은 경우</div>
                    <div>• 자존감과 자기표현력을 키우고 싶은 청소년</div>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">성인용</div>
                <div className="text-xl font-bold">성격유형에 대한 이해는 커리어 성장의 열쇠!</div>
                <div className="text-xl">
                    자신의 업무 스타일과 대인관계 성향을 파악해 조직 내에서 더 효과적으로 소통하고
                    협업할 수 있습니다.
                    <br /> 성격유형에 맞는 일 처리 방식과 리더십 역량 개발에도 유용합니다.
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">추천 대상</div>
                <div className="text-xl flex flex-col gap-2">
                    <div>• 업무 스타일과 강점을 명확히 하고 싶은 직장인</div>
                    <div>• 팀 내 소통, 협업 방식을 개선하고 싶은 분</div>
                    <div>• 자기이해를 통해 커리어 방향을 재정립하고 싶은 분</div>
                </div>
            </div>
        </section>
    );
};

export default PersonalitySecond;
