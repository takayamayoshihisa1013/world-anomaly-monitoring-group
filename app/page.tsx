import Link from "next/link";
import { Yuji_Syuku } from "next/font/google";

const yujiSyuku = Yuji_Syuku({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className="relative w-full h-screen bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden font-mono">
            
            {/* 演出1: 画面全体を覆う走査線（スキャンライン） */}
            <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-30"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)",
                    backgroundSize: "100% 4px",
                }}
            />

            {/* 演出2: 四隅の暗がり（ブラウン管モニター感） */}
            <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />

            {/* メインコンテンツ */}
            <main className="relative z-20 flex flex-col items-center gap-12 p-8 w-full max-w-3xl text-center">
                
                {/* タイトルセクション */}
                <div className="space-y-4">
                    <p className="text-[#d10000] text-xs md:text-sm tracking-[0.5em] animate-pulse">
                        RESTRICTED AREA / CLASSIFIED NETWORK
                    </p>
                    
                    <h1 className={`text-4xl md:text-6xl font-bold tracking-widest text-gray-200 [text-shadow:0_0_15px_rgba(209,0,0,0.5)] ${yujiSyuku.className}`}>
                        世界異常観測システム
                    </h1>
                    
                    <p className="text-gray-500 text-xs md:text-sm tracking-[0.3em]">
                        WORLD ANOMALY MONITORING PROTOCOL v1.0
                    </p>
                </div>

                {/* 警告文（ホラーテイストを強調） */}
                <div className="border-y border-gray-800 py-6 my-4 w-full text-gray-400 text-xs md:text-sm leading-loose">
                    <p>⚠ 警告: 本システムへの無許可アクセスは重大な規約違反とみなされます。</p>
                    <p>観測中に発生した精神的・肉体的な損害について、当機関は一切の責任を負いません。</p>
                </div>

                {/* スタートボタン */}
                <div className="relative group">
                    {/* ボタンの背景でホワッと光る赤い影 */}
                    <div className="absolute -inset-1 bg-[#d10000] opacity-0 group-hover:opacity-40 blur transition-opacity duration-500" />
                    
                    <Link 
                        href="/world_list"
                        className="relative block px-10 py-4 bg-black border border-[#d10000] text-[#d10000] hover:bg-[#d10000] hover:text-white transition-all duration-300 font-bold tracking-[0.3em]"
                    >
                        <span className="flex items-center gap-3">
                            <span className="animate-ping text-xs">●</span>
                            観測を開始する
                        </span>
                    </Link>
                </div>
            </main>
        </div>
    );
}