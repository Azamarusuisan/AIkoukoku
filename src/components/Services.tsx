"use client";

import { MonitorPlay, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Services() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!e.currentTarget) return;
        const div = e.currentTarget;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        3つの<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">提供価値</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        あなたのフェーズに合わせて選べる、最適なソリューション。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: Production (Large) */}
                    <div
                        onMouseMove={handleMouseMove}
                        className="md:col-span-2 group p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                            }}
                        />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <MonitorPlay className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI広告制作代行</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                丸投げOK。最新AIを駆使して、高品質な広告クリエイティブを<br className="hidden md:block" />
                                従来の1/10のコスト、10倍のスピードで制作します。
                            </p>
                            <Button className="bg-gray-900 text-white hover:bg-blue-600 transition-colors px-8 py-6 text-lg rounded-xl">
                                制作を依頼する
                            </Button>
                        </div>
                    </div>

                    {/* Card 2: Support (Tall) */}
                    <div className="md:row-span-2 group p-10 rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white backdrop-blur-sm group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">AI広告伴走サポート</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                週1回のMTGとチャットサポートで、一緒に作りながらAI広告運用のノウハウを社内に定着させます。
                            </p>
                        </div>
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-gray-900 transition-colors py-6 text-lg rounded-xl bg-transparent">
                            伴走プランを見る
                        </Button>
                    </div>

                    {/* Card 3: School (Standard) */}
                    <div
                        onMouseMove={handleMouseMove}
                        className="md:col-span-2 group p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.1), transparent 40%)`,
                            }}
                        />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-50 rounded-tl-full -mr-10 -mb-10 transition-transform group-hover:scale-110" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI広告スクール</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    未経験から「AIクリエイター」へ。<br />
                                    ツール操作からプロンプトエンジニアリングまで、実践的なスキルを習得。
                                </p>
                                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors px-8 py-6 text-lg rounded-xl">
                                    カリキュラムを見る
                                </Button>
                            </div>
                            <div className="w-full md:w-1/3 aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
                                {/* Placeholder for school preview */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                                    PREVIEW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
