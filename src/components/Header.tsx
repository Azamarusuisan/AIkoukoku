import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-main flex items-center gap-2">
                    <span className="bg-gradient-to-r from-main to-accent bg-clip-text text-transparent">
                        AI広告.com
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/service" className="text-sm font-medium text-gray-600 hover:text-main transition-colors">
                        サービス
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-main transition-colors">
                        料金プラン
                    </Link>
                    <Link href="/cases" className="text-sm font-medium text-gray-600 hover:text-main transition-colors">
                        制作事例
                    </Link>
                    <Link href="/academy" className="text-sm font-medium text-gray-600 hover:text-main transition-colors">
                        リスキリング講座
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:inline-flex">
                        ログイン
                    </Button>
                    <Button className="bg-cta hover:bg-cta/90 text-white font-bold shadow-lg shadow-cta/20 transition-all hover:scale-105">
                        無料相談する
                    </Button>
                    <button className="md:hidden p-2 text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
