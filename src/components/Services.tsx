import { MonitorPlay, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "AI広告制作代行",
        description: "丸投げOK。最新AIを駆使して、高品質な広告クリエイティブを安価・高速に制作します。",
        icon: MonitorPlay,
        link: "/service",
        cta: "制作を依頼する",
    },
    {
        title: "AI広告伴走サポート",
        description: "週1回のMTGとチャットサポートで、一緒に作りながらAI広告運用のノウハウを定着させます。",
        icon: Users,
        link: "/service#support",
        cta: "伴走プランを見る",
    },
    {
        title: "AI広告スクール",
        description: "未経験から「AIクリエイター」へ。ツール操作からプロンプトまで、実践的なスキルを習得。",
        icon: GraduationCap,
        link: "/academy",
        cta: "カリキュラムを見る",
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        3つの提供価値
                    </h2>
                    <p className="text-lg text-gray-600">
                        あなたのフェーズに合わせて選べる、最適なソリューション。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-main group-hover:text-white transition-colors text-main">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <Button variant="outline" className="w-full group-hover:bg-main group-hover:text-white group-hover:border-main transition-colors">
                                {service.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
