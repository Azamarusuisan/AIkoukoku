import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            AI広告.com
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            画像・動画生成AIとコーディングAIを組み合わせ、
                            広告制作の「安く・早く・大量に」を実現する
                            次世代のクリエイティブパートナー。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/service" className="hover:text-white transition-colors">制作代行</Link></li>
                            <li><Link href="/service#support" className="hover:text-white transition-colors">伴走サポート</Link></li>
                            <li><Link href="/academy" className="hover:text-white transition-colors">リスキリング講座</Link></li>
                            <li><Link href="/cases" className="hover:text-white transition-colors">制作事例</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">運営者情報</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs">
                    © {new Date().getFullYear()} AI広告.com All rights reserved.
                </div>
            </div>
        </footer>
    );
}
