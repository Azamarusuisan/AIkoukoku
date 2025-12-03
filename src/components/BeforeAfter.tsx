import { Check, X } from "lucide-react";

export default function BeforeAfter() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        なぜ、AI広告なのか？
                    </h2>
                    <p className="text-lg text-gray-600">
                        従来の広告制作の「常識」を覆す、圧倒的なパフォーマンス。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Traditional */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-80">
                        <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">従来</span>
                            一般的な広告制作
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-700">コストが高い</p>
                                    <p className="text-sm text-gray-500">バナー1枚 数万円〜、動画 数十万円〜</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-700">時間がかかる</p>
                                    <p className="text-sm text-gray-500">依頼から納品まで2週間〜1ヶ月</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-700">ノウハウがたまらない</p>
                                    <p className="text-sm text-gray-500">外注先に依存し、社内に知見が残らない</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* AI Ads */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-main/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <h3 className="text-xl font-bold text-main mb-6 flex items-center gap-2">
                            <span className="bg-main text-white text-xs px-2 py-1 rounded">New</span>
                            AI広告.com
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">コスト 1/10 以下</p>
                                    <p className="text-sm text-gray-600">月額定額で作り放題、または格安制作</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">スピード 10倍</p>
                                    <p className="text-sm text-gray-600">最短即日納品。テストを高速で回せる</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">資産になる</p>
                                    <p className="text-sm text-gray-600">自社で回すスキルが身につき、最強の武器に</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
