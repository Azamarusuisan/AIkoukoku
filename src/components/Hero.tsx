"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Staggered Text Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } as any },
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden perspective-1000">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-main/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-main text-sm font-bold mb-8 border border-blue-100 shadow-lg shadow-blue-100/50"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    AI広告制作の新しいスタンダード
                </motion.div>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-tight"
                >
                    <motion.span variants={item} className="block">広告制作は、もう</motion.span>
                    <motion.span variants={item} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-shimmer bg-[length:200%_auto]">
                        「発注」しなくていい。
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    画像・動画生成AIとコーディングAIを駆使し、
                    <br className="hidden md:block" />
                    コスト1/10、スピード10倍でクリエイティブを内製化。
                    <br />
                    あなたのビジネス専属のAIクリエイティブチームを構築します。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <MagneticButton>
                        <Button size="lg" className="w-full sm:w-auto bg-cta hover:bg-cta/90 text-white font-bold text-xl px-10 py-8 shadow-xl shadow-cta/30 hover:scale-105 transition-all group rounded-full">
                            無料相談・デモを見る
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </MagneticButton>
                    <MagneticButton>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-gray-700 border-gray-200 hover:bg-gray-50 text-xl px-10 py-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                            <PlayCircle className="mr-2 w-6 h-6 text-main" />
                            サービス詳細
                        </Button>
                    </MagneticButton>
                </motion.div>

                {/* 3D Tilt Mockup */}
                <motion.div
                    ref={ref}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 1, duration: 0.8, type: "spring" }}
                    className="mt-20 relative mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

                    {/* Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

                    <video
                        src="/hero-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
}
