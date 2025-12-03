import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-white to-white opacity-70" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-main/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-main text-sm font-medium mb-8 border border-blue-100 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    AI広告制作の新しいスタンダード
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                    広告制作は、もう<br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-accent">
                        「発注」しなくていい。
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    画像・動画生成AIとコーディングAIを駆使し、
                    <br className="hidden md:block" />
                    コスト1/10、スピード10倍でクリエイティブを内製化。
                    <br />
                    あなたのビジネス専属のAIクリエイティブチームを構築します。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto bg-cta hover:bg-cta/90 text-white font-bold text-lg px-8 py-6 shadow-xl shadow-cta/20 hover:scale-105 transition-all group">
                        無料相談・デモを見る
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-gray-700 border-gray-300 hover:bg-gray-50 text-lg px-8 py-6">
                        <PlayCircle className="mr-2 w-5 h-5" />
                        サービス詳細
                    </Button>
                </div>

                {/* Mockup / Visual */}
                <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 -z-10" />
                    <p className="text-gray-400 font-medium">ここにデモ動画やツールのUIイメージを配置</p>
                    {/* Placeholder for AI generated video loop */}
                </div>
            </div>
        </section>
    );
}
