

export default function BeforeAfter() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        なぜ、<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI広告</span>なのか？
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        従来の広告制作の「常識」を覆す、圧倒的なパフォーマンス。
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl p-2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-2xl">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl rounded-3xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/50 shadow-inner">
                            <img
                                src="/before-after.png"
                                alt="Before and After Comparison"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/50 animate-bounce">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-black text-lg">
                                    COST DOWN 90%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
