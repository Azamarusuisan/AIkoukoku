"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
    {
        name: "スターター",
        price: "3",
        unit: "万円/月",
        desc: "まずはAI広告を試してみたい方へ",
        features: ["AI画像生成 100枚/月", "バナー制作 5本/月", "チャットサポート"],
        cta: "申し込む",
        popular: false,
    },
    {
        name: "スモールビジネス",
        price: "10",
        unit: "万円/月",
        desc: "本格的に運用を回したい方へ",
        features: ["AI動画生成 10本/月", "LP制作/修正 月1回", "週1回 定例MTG", "広告運用代行"],
        cta: "申し込む",
        popular: true,
    },
    {
        name: "内製化ブートキャンプ",
        price: "30",
        unit: "万円 (3ヶ月)",
        desc: "社内にノウハウを蓄積したい方へ",
        features: ["全AIツール導入支援", "プロンプト研修", "実案件OJT", "社内マニュアル作成"],
        cta: "相談する",
        popular: false,
    },
];

export default function Pricing() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!e.currentTarget) return;
        const div = e.currentTarget;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-zinc-950" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        料金<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">プラン</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-medium">
                        明朗会計。必要な機能に合わせて選べます。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            onMouseMove={handleMouseMove}
                            className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 group overflow-hidden ${plan.popular
                                    ? 'bg-zinc-900/80 border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105 z-10'
                                    : 'bg-zinc-900/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
                                }`}
                        >
                            {/* Spotlight Effect */}
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                                style={{
                                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
                                }}
                            />

                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                                    RECOMMENDED
                                </div>
                            )}

                            <div className="mb-8 relative z-10">
                                <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-zinc-300'}`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-zinc-500 text-sm font-medium">{plan.unit}</span>
                                </div>
                                <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 relative z-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-zinc-800 text-zinc-500'}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-6 text-lg font-bold rounded-xl transition-all duration-300 relative z-10 ${plan.popular
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
