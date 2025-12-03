import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <section className="pt-32 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-8 font-heading animate-fade-in-up">
                        プライバシーポリシー
                    </h1>
                    <div className="prose prose-lg max-w-none text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <p className="text-sm text-muted-foreground mb-8">最終更新日: 2024年1月1日</p>

                        <div className="space-y-8">
                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">1. はじめに</h2>
                                <p className="leading-relaxed">
                                    AI広告（以下「当社」）は、ユーザーの個人情報の保護を重要な責務と考え、個人情報保護法その他の関連法令を遵守し、以下のプライバシーポリシーに従って個人情報を取り扱います。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">2. 収集する情報</h2>
                                <p className="leading-relaxed mb-4">当社は、以下の情報を収集することがあります。</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>氏名、メールアドレス、会社名等の登録情報</li>
                                    <li>サービス利用履歴、アクセスログ</li>
                                    <li>お問い合わせ内容</li>
                                    <li>Cookieによる情報</li>
                                </ul>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">3. 情報の利用目的</h2>
                                <p className="leading-relaxed mb-4">収集した情報は、以下の目的で利用します。</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>サービスの提供・運営</li>
                                    <li>ユーザーサポート</li>
                                    <li>サービスの改善・新機能開発</li>
                                    <li>利用規約違反への対応</li>
                                    <li>マーケティング活動（同意がある場合）</li>
                                </ul>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">4. 情報の共有</h2>
                                <p className="leading-relaxed">
                                    当社は、法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。ただし、サービス提供に必要な範囲で業務委託先と共有する場合があります。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">5. セキュリティ</h2>
                                <p className="leading-relaxed">
                                    当社は、個人情報の漏洩、滅失、毀損の防止のため、適切なセキュリティ対策を講じています。SSL暗号化通信、アクセス制限、定期的なセキュリティ監査等を実施しています。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">6. Cookieの使用</h2>
                                <p className="leading-relaxed">
                                    当社のサービスでは、ユーザー体験向上のためCookieを使用しています。ブラウザの設定によりCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">7. ユーザーの権利</h2>
                                <p className="leading-relaxed mb-4">ユーザーは以下の権利を有します。</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>個人情報の開示請求</li>
                                    <li>個人情報の訂正・削除請求</li>
                                    <li>個人情報の利用停止請求</li>
                                    <li>マーケティング通知のオプトアウト</li>
                                </ul>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">8. お問い合わせ</h2>
                                <p className="leading-relaxed">
                                    本ポリシーに関するお問い合わせは、お問い合わせフォームまたは以下のメールアドレスまでご連絡ください。
                                    <br /><br />
                                    メール: privacy@aikoukoku.jp
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-black mb-4 text-foreground font-heading">9. ポリシーの変更</h2>
                                <p className="leading-relaxed">
                                    当社は、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、サービス内での通知またはメールにてお知らせします。
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
