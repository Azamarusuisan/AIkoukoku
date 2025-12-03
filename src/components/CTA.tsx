import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-main to-accent text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    まずは、その目で確かめてください。
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    AI広告のクオリティとスピードを体験できるデモ動画をご用意しました。<br />
                    無理な勧誘は一切ありません。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-white text-main hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl">
                        無料相談・デモを見る
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                        事例集をダウンロード
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
