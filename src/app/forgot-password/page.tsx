"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
            <div className="w-full max-w-md animate-fade-in-up">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 mb-12">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-black font-heading">AI広告</span>
                </Link>

                {!isSubmitted ? (
                    <>
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-black mb-3 font-heading">
                                パスワードをリセット
                            </h1>
                            <p className="text-muted-foreground font-medium">
                                登録済みのメールアドレスを入力してください。パスワードリセット用のリンクをお送りします。
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">メールアドレス</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary/50 focus:outline-none transition-colors font-medium"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-black text-lg py-6 shadow-xl hover:scale-105 transition-all"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    "リセットリンクを送信"
                                )}
                            </Button>
                        </form>
                    </>
                ) : (
                    /* Success State */
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-black mb-3 font-heading">メールを送信しました</h2>
                        <p className="text-muted-foreground font-medium mb-8">
                            パスワードリセット用のリンクをメールで送信しました。メールをご確認ください。
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="border-gray-200 hover:bg-gray-50 font-bold"
                        >
                            別のメールアドレスで試す
                        </Button>
                    </div>
                )}

                {/* Back to login */}
                <div className="mt-8 text-center">
                    <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        ログインに戻る
                    </Link>
                </div>
            </div>
        </main>
    );
}
