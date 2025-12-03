import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-gray-400 py-20 border-t border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-black text-white mb-6 block tracking-tighter">
                            AI広告<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.com</span>
                        </Link>
                        <p className="text-base leading-relaxed max-w-md text-zinc-500">
                            画像・動画生成AIとコーディングAIを組み合わせ、<br />
                            広告制作の「安く・早く・大量に」を実現する<br />
                            次世代のクリエイティブパートナー。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Service</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/service" className="hover:text-white transition-colors hover:translate-x-1 inline-block">制作代行</Link></li>
                            <li><Link href="/service#support" className="hover:text-white transition-colors hover:translate-x-1 inline-block">伴走サポート</Link></li>
                            <li><Link href="/academy" className="hover:text-white transition-colors hover:translate-x-1 inline-block">リスキリング講座</Link></li>
                            <li><Link href="/cases" className="hover:text-white transition-colors hover:translate-x-1 inline-block">制作事例</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">運営者情報</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">お問い合わせ</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors hover:translate-x-1 inline-block">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors hover:translate-x-1 inline-block">利用規約</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
                    <p>© {new Date().getFullYear()} AI広告.com All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-colors">Note</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
