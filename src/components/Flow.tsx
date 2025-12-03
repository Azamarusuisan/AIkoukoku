import { MessageSquare, FileText, Image as ImageIcon, Layout, BarChart } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "ヒアリング",
        desc: "課題とゴールを明確化",
    },
    {
        icon: FileText,
        title: "シナリオ作成",
        desc: "AIが構成案を生成",
    },
    {
        icon: ImageIcon,
        title: "素材生成",
        desc: "画像・動画をAI生成",
    },
    {
        icon: Layout,
        title: "実装・制作",
        desc: "LPや広告バナー完成",
    },
    {
        icon: BarChart,
        title: "配信・分析",
        desc: "効果測定と改善",
    },
];

export default function Flow() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        爆速の<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">制作フロー</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        AI活用により、圧倒的なスピードで進行します。
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer bg-[length:200%_auto]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex flex-col items-center">
                                <div className="w-20 h-20 rounded-2xl bg-white border-4 border-white shadow-xl flex items-center justify-center text-blue-600 mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl -z-10" />
                                    <step.icon className="w-8 h-8" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{step.desc}</p>
                                </div>

                                {/* Mobile Connector */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden w-1 h-12 bg-gray-200 my-2 rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 animate-scroll-vertical" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
