"use client"

import { useState } from "react";
import Link from "next/link";
import { WORLD_LIST } from "@/app/constants/WorldList";  // ※エラーが出る場合は ../ の数を調整してください

export default function WorldLayout({ children }: { children: React.ReactNode }) {
    // メニューの開閉状態
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* ここに個別の監視画面（page.tsx）の中身がすっぽり入ります */}
            {children}

            {/* 共通のサイドメニュー */}
            <div
                className={`
                    fixed top-0 right-0 h-full z-50 flex
                    transition-transform duration-500 ease-in-out
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-[40px] h-[100px] bg-black/90 lg:bg-black/80 border-y border-l border-gray-700 flex items-center justify-center hover:text-[#d10000] hover:bg-gray-900 transition-all cursor-pointer shadow-[-5px_0_10px_rgba(0,0,0,0.5)] text-white"
                >
                    <span className={`text-xl transform transition-transform duration-500 ${menuOpen ? "rotate-180" : ""}`}>
                        ◀
                    </span>
                </button>

                <div className="bg-black/95 lg:bg-black/90 h-full w-[280px] lg:w-[320px] overflow-y-auto horror-scroll p-4 lg:p-6 border-l border-[#d10000]/50 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]">
                    <p className="border-b border-[#d10000] mb-5 pb-2 font-bold tracking-widest sticky top-0 bg-black/95 lg:bg-black/90 z-10 [text-shadow:0_0_8px_rgba(209,0,0,0.8)] text-sm lg:text-base text-white">
                        SYSTEM LOG / WORLD LIST
                    </p>

                    <section className="flex flex-col gap-3 lg:gap-4">
                        {/* ▼ 追加：一覧画面に戻るリンク ▼ */}
                        <Link href="/world_list" onClick={() => setMenuOpen(false)}>
                            <div className="border border-gray-500 bg-gray-900/40 p-3 lg:p-4 hover:bg-[#d10000]/20 hover:border-[#d10000] transition-all duration-300 group cursor-pointer text-center mb-2">
                                <p className="font-bold text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors">
                                    ◀ 観測対象ワールド一覧に戻る
                                </p>
                            </div>
                        </Link>

                        {/* 各ワールドへのリンク */}
                        {WORLD_LIST.map((world, key) => (
                            <Link href={`/world_list/world/${world.id}`} key={key} onClick={() => setMenuOpen(false)}>
                                <div className="border border-gray-700 bg-black/40 p-3 lg:p-4 hover:bg-gray-800/50 hover:border-[#d10000] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d10000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-gray-400 text-xs lg:text-sm font-mono mb-1">
                                        ID: {String(world.id).padStart(3, '0')}
                                    </p>
                                    <p className="font-bold text-sm lg:text-base group-hover:text-white transition-colors text-gray-200">
                                        {world.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}