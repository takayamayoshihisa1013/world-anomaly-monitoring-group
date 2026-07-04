export default function About() {
    return (
        <div className="w-full min-h-screen bg-[#050505] text-gray-300 font-mono p-10 flex flex-col items-center justify-center">

            <div className="max-w-[700px] border border-gray-700 bg-black/60 p-8 shadow-[0_0_20px_rgba(0,0,0,0.8)] relative">

                <div className="absolute top-0 left-0 w-full h-1 bg-[#d10000]" />

                <h1 className="text-3xl font-bold text-white mb-8 tracking-widest border-b border-gray-700 pb-4">
                    SYSTEM INFO <span className="text-[#d10000] text-sm animate-pulse ml-2">v1.0.4</span>
                </h1>

                <div className="space-y-6 leading-relaxed">
                    <p>
                        本システムは、多次元宇宙における現実改変および特異点（アノマリー）を遠隔観測するための機密ネットワークです。
                    </p>

                    <div>
                        <h2 className="text-[#d10000] font-bold mb-2">■ 観測員の皆様へ</h2>
                        <p>
                            あなたの任務は、指定された各ワールドの「異常レベル」を監視し、事象の記録を維持することです。観測対象への直接的な干渉はシステム上不可能です。ただ、見つめ続けてください。
                        </p>
                    </div>

                    <div className="bg-[#d10000]/10 border border-[#d10000]/30 p-4">
                        <h2 className="text-[#d10000] font-bold mb-2">⚠ 警告</h2>
                        <p className="text-sm">
                            監視対象からの精神的干渉を防ぐため、長時間の連続観測は推奨されません。<br />
                            もしモニター越しに<span className="line-through opacity-50">「視線」を感じた場合</span>、ただちに観測を中断し、システムからログアウトしてください。
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-gray-600">
                    <p>Copyright © 2026 Anomaly Monitoring Organization.</p>
                    <p>All Rights Reserved.</p>
                </div>

            </div>
        </div>
    )
}
