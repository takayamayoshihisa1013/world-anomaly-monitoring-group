import Link from "next/link"
import { WORLD_LIST } from "../constants/WorldList"
import Image from "next/image"

export default function WorldList() {
    return (
        <div className="relative w-screen h-screen bg-[#050505] text-gray-300 font-mono overflow-hidden">

            {/* 演出レイヤー1: ブラウン管の湾曲感（四隅を暗くする）と走査線（横縞） */}
            <div
                className="absolute inset-0 z-50 pointer-events-none"
                style={{
                    // 横縞のグラデーション
                    backgroundImage: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 50%)",
                    backgroundSize: "100% 4px",
                    // 四隅をグルッと暗くする（モニターのガラスの湾曲を表現）
                    boxShadow: "inset 0 0 100px rgba(0,0,0,0.9), inset 0 0 30px rgba(0,0,0,0.8)"
                }}
            />

            {/* 演出レイヤー2: たまに走る激しい砂嵐ノイズ */}
            <div
                className="absolute inset-0 z-40 pointer-events-none opacity-0 animate-monitor-glitch mix-blend-screen"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* メインコンテンツ（ここがモニターの中に表示されるデータ） */}
            <div className="relative z-10 w-full h-full p-10 overflow-y-auto horror-scroll">

                {/* ヘッダー的な部分 */}
                <div className="mb-10 border-b border-gray-600 pb-4">
                    <p className="text-[#d10000] animate-pulse font-bold tracking-widest mb-2">SYSTEM: ONLINE</p>
                    <h1 className="text-4xl font-bold tracking-widest [text-shadow:0_0_8px_rgba(255,255,255,0.3)]">
                        観測対象ワールド一覧
                    </h1>
                </div>

                {/* リスト表示部分 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WORLD_LIST.map((world) => (

                        <Link href={`/world_list/world/${world.id}`} key={world.id}>
                            <div className="border border-gray-700 bg-black/40 p-5 hover:bg-gray-800/50 hover:border-[#d10000] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                                {/* ホバー時に左端に出る赤いアクセント */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d10000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <p className="text-2xl mb-2 group-hover:text-white transition-colors">
                                    <span className="text-gray-500 mr-2">ID:{String(world.id).padStart(3, '0')}</span>
                                    {world.name}
                                </p>
                                <p className="text-sm text-gray-400">
                                    anomaly_level: {world.status[0].anomaly_level}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
