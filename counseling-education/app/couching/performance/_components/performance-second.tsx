const PerformanceSecond = () => {
    return (
        <section className="w-full flex flex-col gap-12 items-center justify-center py-8  bg-white">
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">추천 대상</div>
                <div className="text-xl flex flex-col   md:gap-3">
                    <div className="flex gap-10 md:gap-10">
                        <span>1. 연기를 시작하고자 하는 초보자 </span>
                        <span>2. 무대 경험이 부족한 배우</span>
                    </div>
                    <div className=" flex gap-10 md:gap-10">
                        <span>3. 자신감을 키우고 싶어하는 사람</span>
                        <span>4. 특정 작품이나 캐릭터에 대해 더 깊이 이해하고 싶어하는 사람 </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">코칭 이후의 달라질 모습</div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">1. 자연스러운 감정 표현</div>
                </div>
                <div className="text-xl mb-3">
                    감정에 대한 이해가 깊어져, 상황에 맞는 감정을 더 진정성 있게 표현할 수 있게
                    됩니다. 
                </div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">2.무대 공포증 극복과 자신감 향상</div>
                </div>
                <div className="text-xl mb-3">
                    무대나 화면에서의 불안감을 극복하고, 더 자신감 있게 연기를 할 수 있도록
                    자아확립과 회복탄력성이 높아지게 됩니다.
                </div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">3. 캐릭터 이해의 스펙트럼 확장</div>
                </div>
                <div className="text-xl mb-3">
                    깊이 있는 내면의 이해를 바탕으로 자신이 맡은 캐릭터를 이해하고, 캐릭터의
                    성격이나 심리상태를 더 깊이 있게 표현할 수 있는 능력이 향상됩니다.
                </div>

                <div className="text-xl font-semibold">
                    <div className="font-bold">4. 연기 기술의 향상 </div>
                </div>
                <div className="text-xl">
                    대사 전달과 발음, 몸짓, 표정 등 연기에 필요한 전반적인 기술이 향상되어 더욱
                    입체적이고 풍부한 연기를 보여줄 수 있습니다.
                </div>
            </div>
        </section>
    );
};

export default PerformanceSecond;
