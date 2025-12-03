import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <section className="pt-32 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-8 font-heading animate-fade-in-up">
                        利用規約
                    </h1>
                    <div className="prose prose-lg max-w-none text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <p className="text-sm text-muted-foreground mb-8">最終更新日: 2024年1月1日</p>

                        <div className="space-y-8">
                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第1条（適用）</h2>
                                <p className="leading-relaxed">
                                    本規約は、当社が提供するAI広告生成サービス（以下「本サービス」）の利用に関する条件を定めるものです。
                                    ユーザーは、本規約に同意の上、本サービスを利用するものとします。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第2条（利用登録）</h2>
                                <p className="leading-relaxed">
                                    登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第3条（禁止事項）</h2>
                                <p className="leading-relaxed mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>法令または公序良俗に違反する行為</li>
                                    <li>犯罪行為に関連する行為</li>
                                    <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                                    <li>当社のサービスの運営を妨害するおそれのある行為</li>
                                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                                    <li>他のユーザーに成りすます行為</li>
                                </ul>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第4条（本サービスの提供の停止等）</h2>
                                <p className="leading-relaxed">
                                    当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第5条（著作権）</h2>
                                <p className="leading-relaxed">
                                    本サービスを通じて生成されたコンテンツの著作権は、ユーザーに帰属します。ただし、当社は本サービスの改善および宣伝目的で、生成されたコンテンツを匿名化した上で利用する権利を有します。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第6条（免責事項）</h2>
                                <p className="leading-relaxed">
                                    当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">第7条（規約の変更）</h2>
                                <p className="leading-relaxed">
                                    当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
