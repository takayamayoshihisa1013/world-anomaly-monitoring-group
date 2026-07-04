"use client"

import { WORLD_LIST, WorldStatus } from "../../../constants/WorldList"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

import { Yuji_Syuku } from "next/font/google";
import Link from "next/link";

const yujiSyuku = Yuji_Syuku({
    weight: "400",
    subsets: ["latin"],
});

export default function World() {

    const params = useParams();
    const worldId = params.world_id;;
    const [menuOpen, setMenuOpen] = useState(false)

    // ▼ ノイズの表示状態を管理するstateを追加 ▼
    const [showStatic, setShowStatic] = useState(false);

    const [worldStatus, setWorldStatus] = useState<WorldStatus>({
        id: 0,
        is_anomaly: false,
        anomaly_level: 10,
        status_name: "",
        description: "",
        image: "",
        weight: 0,
    });

    const selectedWorld = WORLD_LIST.find((world) => world.id === Number(worldId));

    if (!selectedWorld) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <h1>世界が見つかりません</h1>
            </div>
        )
    }

    useEffect(() => {
        if (!selectedWorld) return;

        const keyString = `world_${worldId}`;
        const CACHE_TIME_MS = 10 * 60 * 1000; // 10分
        let timeoutId: NodeJS.Timeout; // タイマーをお掃除するためのID

        const rollNewStatus = () => {
            const totalWeight = selectedWorld.status.reduce((sum, item) => sum + item.weight, 0);
            const randomNum = Math.floor(Math.random() * totalWeight);

            let currentWeight = 0;
            let selectedStatus: WorldStatus | null = null;

            for (const status of selectedWorld.status) {
                currentWeight += status.weight;
                if (randomNum <= currentWeight) {
                    selectedStatus = status;
                    console.log(status);
                    break;
                }
            }

            if (selectedStatus) {
                // 1. 新しい状態を画面にセット
                setWorldStatus(selectedStatus);

                // 2. ローカルストレージを更新
                const cacheValue = {
                    status: selectedStatus.id,
                    saveAt: Date.now()
                };
                localStorage.setItem(keyString, JSON.stringify(cacheValue));

                // 3. 砂嵐エフェクトを発動（コメントアウトを解除しました）
                setShowStatic(true);
                setTimeout(() => setShowStatic(false), 600);

                // 4. 次の更新を10分後にセットする（無限ループ）
                timeoutId = setTimeout(rollNewStatus, CACHE_TIME_MS);
            }
        };

        // ==========================================
        // 初回読み込み時のキャッシュ判定
        // ==========================================
        const cacheData = localStorage.getItem(keyString);

        if (cacheData) {
            const cacheValue = JSON.parse(cacheData);
            const elapsed = Date.now() - cacheValue.saveAt;

            if (elapsed < CACHE_TIME_MS) {
                // 10分以内ならキャッシュを復元
                const cachedStatus = selectedWorld.status.find((status) => status.id === cacheValue.status);

                if (cachedStatus) {
                    setWorldStatus(cachedStatus);

                    // 初回読み込み時にも一瞬砂嵐を走らせたい場合はここにも追加
                    setShowStatic(true);
                    setTimeout(() => setShowStatic(false), 600);

                    // 「10分 - 経過した時間」を計算し、残りの時間でタイマーをセット
                    const remainingTime = CACHE_TIME_MS - elapsed;
                    timeoutId = setTimeout(rollNewStatus, remainingTime);
                }
            } else {
                // 10分過ぎていたら古いデータを消して、すぐ新規抽選へ
                localStorage.removeItem(keyString);
                rollNewStatus();
            }
        } else {
            // キャッシュがない場合も、すぐ新規抽選へ
            rollNewStatus();
        }

        // ==========================================
        // クリーンアップ関数（コンポーネントが消える時の処理）
        // ==========================================
        return () => {
            clearTimeout(timeoutId);
        };

    }, [selectedWorld, worldId]);

    const toggleMenu = () => {
        if (selectedWorld) {
            setMenuOpen(!menuOpen);
        }
    }

    return (
        // 1. 外側は画面全体ではなく、コンテンツに合わせて伸びるようにする
        <div className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[#050505] text-white overflow-x-hidden font-sans">
            
            <div
                className={`
                    fixed inset-0 z-[100] pointer-events-none mix-blend-screen animate-tv-static
                    transition-opacity duration-100
                    ${showStatic ? "opacity-60" : "opacity-0"} 
                `}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {worldStatus.id === 0 ? (
                <p className="p-5">読み込み中...</p>
            ) : (
                <>

                    <div
                        className="relative w-full h-[45vh] min-h-[300px] lg:h-screen lg:fixed lg:top-0 lg:left-0 z-0"
                        style={{
                            backgroundImage: `url("/images/worlds/${worldId}/${worldStatus.image}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="absolute top-0 left-0">
                            <section className={`flex flex-col justify-center gap-2 bg-black/60 w-fit min-w-[250px] lg:min-w-[500px] p-4 lg:p-5 text-white ${yujiSyuku.className}`}>
                                <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold">{selectedWorld.name}</p>

                                <div className={`text-[#d10000] font-mono text-[1.5rem] lg:text-[1.8rem] font-bold tracking-[4px] [text-shadow:0_0_8px_rgba(209,0,0,0.8),0_0_20px_rgba(209,0,0,0.4)] animate-glitch`}>
                                    <span className="inline-block mr-[8px] animate-horror-blink">●</span>
                                    REC
                                </div>
                            </section>
                        </div>

                        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#050505] to-transparent lg:hidden" />
                    </div>
                    <div className="relative z-10 w-full flex flex-col  gap-4 lg:absolute lg:top-0 lg:left-0  lg:pt-[180px] lg:pointer-events-none">
                        <div className="flex flex-col gap-4 lg:pointer-events-auto w-full lg:w-fit">
                            
                            <section
                                className={`bg-black/60 text-sm lg:text-base p-4 lg:p-5 w-full lg:min-w-[350px] flex flex-col gap-2 ${worldStatus.is_anomaly && "text-red-500"}`}
                            >
                                <p className="text-gray-400">世界状況</p>
                                <p>状態: {worldStatus.status_name}</p>
                                <p>異常レベル: {worldStatus.anomaly_level}</p>
                            </section>

                            <section className={`bg-black/60 text-sm lg:text-base p-4 lg:p-5 w-full lg:min-w-[350px] lg:max-w-[500px] lg:max-h-[550px] overflow-y-auto horror-scroll  ${worldStatus.is_anomaly && "text-red-500"}`}>
                                <p className="break-words whitespace-pre-wrap">{worldStatus.description}</p>
                            </section>

                        </div>
                    </div>
                    <div
                        className={`
                            fixed top-0 right-0 h-full z-50 flex
                            transition-transform duration-500 ease-in-out
                            ${menuOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                    >
                        <button
                            onClick={toggleMenu}
                            className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-[40px] h-[100px] bg-black/90 lg:bg-black/80 border-y border-l border-gray-700 flex items-center justify-center hover:text-[#d10000] hover:bg-gray-900 transition-all cursor-pointer shadow-[-5px_0_10px_rgba(0,0,0,0.5)]"
                        >
                            <span className={`text-xl transform transition-transform duration-500 ${menuOpen ? "rotate-180" : ""}`}>
                                ◀
                            </span>
                        </button>

                        <div className="bg-black/95 lg:bg-black/90 h-full w-[280px] lg:w-[320px] overflow-y-auto horror-scroll p-4 lg:p-6 border-l border-[#d10000]/50 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]">
                            <p className="border-b border-[#d10000] mb-5 pb-2 font-bold tracking-widest sticky top-0 bg-black/95 lg:bg-black/90 z-10 [text-shadow:0_0_8px_rgba(209,0,0,0.8)] text-sm lg:text-base">
                                SYSTEM LOG / WORLD LIST
                            </p>

                            <section className="flex flex-col gap-3 lg:gap-4">
                                {WORLD_LIST.map((world, key) => (
                                    <Link href={`/world_list/world?world_id=${world.id}`} key={key} onClick={() => setMenuOpen(false)}>
                                        <div className="border border-gray-700 bg-black/40 p-3 lg:p-4 hover:bg-gray-800/50 hover:border-[#d10000] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d10000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <p className="text-gray-400 text-xs lg:text-sm font-mono mb-1">
                                                ID: {String(world.id).padStart(3, '0')}
                                            </p>
                                            <p className="font-bold text-sm lg:text-base group-hover:text-white transition-colors">
                                                {world.name}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </section>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
