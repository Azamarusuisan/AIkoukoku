import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        料金プラン
                    </h2>
                    <p className="text-lg text-gray-600">
                        明朗会計。必要な機能に合わせて選べます。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg border ${plan.popular ? 'border-main ring-2 ring-main/20' : 'border-gray-100'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main text-white text-xs font-bold px-3 py-1 rounded-full">
                                    一番人気
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500 text-sm mb-1">{plan.unit}</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full ${plan.popular ? 'bg-main hover:bg-main/90' : 'bg-gray-900 hover:bg-gray-800'}`}>
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
