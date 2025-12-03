export default function Tools() {
    const tools = [
        { name: "Nano Banana Pro", desc: "画像生成・編集" },
        { name: "Kling AI", desc: "動画生成" },
        { name: "WAN", desc: "映像表現" },
        { name: "Runway", desc: "動画編集" },
        { name: "Gemini / Antigravity", desc: "コード・構築" },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    世界最先端のAIツールを、<br />
                    あなたのビジネスに実装する。
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                                {/* Placeholder for Logo */}
                                <span className="text-xs font-bold text-gray-400 group-hover:text-white">{tool.name}</span>
                            </div>
                            <p className="text-sm text-gray-400 group-hover:text-accent transition-colors">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
