import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    まずは、その目で<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">確かめてください。</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    AI広告のクオリティとスピードを体験できるデモ動画をご用意しました。<br />
                    無理な勧誘は一切ありません。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Magnetic Button Effect */}
                    <MagneticButton>
                        <Button
                            size="lg"
                            className="relative group bg-white text-gray-900 hover:bg-gray-100 font-bold px-12 py-8 text-xl rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                無料相談・デモを見る
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </MagneticButton>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-10 py-8 text-lg rounded-full transition-all hover:border-gray-600"
                    >
                        事例集をダウンロード
                    </Button>
                </div>
            </div>
        </section>
    );
}
