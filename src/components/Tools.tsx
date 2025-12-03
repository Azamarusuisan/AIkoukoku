export default function Tools() {
    const tools = [
        { name: "Nano Banana Pro", desc: "画像生成・編集" },
        { name: "Kling AI", desc: "動画生成" },
        { name: "WAN", desc: "映像表現" },
        { name: "Runway", desc: "動画編集" },
        { name: "Gemini / Antigravity", desc: "コード・構築" },
        { name: "Midjourney", desc: "画像生成" },
        { name: "ChatGPT", desc: "シナリオ作成" },
        { name: "Claude", desc: "分析・設計" },
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950" />

            <div className="container mx-auto px-4 text-center relative z-10 mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                    世界最先端の<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AIツール</span>を、<br />
                    あなたのビジネスに実装する。
                </h2>
            </div>

            {/* Infinite Marquee */}
            <div className="relative w-full overflow-hidden py-10">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

                <div className="flex gap-8 animate-scroll w-max hover:[animation-play-state:paused]">
                    {[...tools, ...tools, ...tools].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group min-w-[160px]">
                            <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                                <span className="text-xs font-bold text-zinc-400 group-hover:text-white text-center px-2">{tool.name}</span>
                            </div>
                            <p className="text-xs text-zinc-500 group-hover:text-blue-400 transition-colors font-medium">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
