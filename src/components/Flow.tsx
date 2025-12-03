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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        制作フロー
                    </h2>
                    <p className="text-lg text-gray-600">
                        AI活用により、圧倒的なスピードで進行します。
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8 md:gap-4">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-4 relative">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-main mb-4 border-4 border-white shadow-sm z-10">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <span className="block text-sm font-bold text-accent mb-1">STEP {index + 1}</span>
                                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
