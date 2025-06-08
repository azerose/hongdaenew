const MentalSecond = () => {
    return (
        <section className="w-full flex flex-col gap-12 items-center justify-center py-8  bg-white">
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">추천 대상</div>
                <div className="text-xl flex flex-col   md:gap-3">
                    <div className="flex gap-10 md:gap-10">
                        <span>1. 스트레스와 불안을 겪고 있는 사람 </span>
                        <span>2. 목표를 달성하는 데 어려움을 겪는 사람</span>
                    </div>
                    <div className=" flex gap-10 md:gap-10">
                        <span>3. 자신감이 부족한 사람 </span>
                        <span>4. 감정적인 어려움을 겪고 있는 사람</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <div className="text-3xl font-bold tracking-tighter">코칭 이후의 달라질 모습</div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">1. 정신적 안정과 스트레스 관리 향상</div>
                </div>
                <div className="text-xl">
                    정신적 안정과 스트레스 관리 향상 자신만의 스트레스 관리 방법과 안정적인 상태를
                    유지하는 법을 익히게 되며, 어려운 상황에서도 차분하게 대처할 수 있습니다.
                </div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">2. 긍정적인 사고방식과 자기 존중감 향상</div>
                </div>
                <div className="text-xl">
                    자신의 가치를 인식하고, 부정적인 사고 패턴을 긍정적으로 전환하여 더 큰 자신감을
                    얻을 수 있습니다. 
                </div>

                <div className="text-xl font-semibold">
                    <div className="font-bold">3. 목표 달성을 위한 집중력 및 인내심 향상 </div>
                </div>
                <div className="text-xl">
                    목표에 대한 명확한 비전을 갖고, 그에 맞는 실천 계획을 세워 꾸준히 실천할 수
                    있습니다.
                </div>
                <div className="text-xl font-semibold">
                    <div className="font-bold">4. 감정 조절 능력 향상 </div>
                </div>
                <div className="text-xl">
                    감정적인 어려움을 극복하고, 상황에 맞게 감정을 조절할 수 있는 능력이 향상되어
                    삶의 질이 향상됩니다.
                </div>
            </div>
        </section>
    );
};

export default MentalSecond;
