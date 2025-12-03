"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
    "/ads/nike.jpg",
    "/ads/oiocha.jpg",
    "/ads/lv.jpg",
    "/ads/nike.jpg", // Duplicate for grid
    "/ads/oiocha.jpg",
    "/ads/lv.jpg",
];

export default function Gallery() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} className="py-32 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    圧倒的な<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">クオリティ</span>
                </h2>
                <p className="text-xl text-zinc-400">
                    AIが生成したとは思えない、プロ品質のクリエイティブ。
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 max-w-7xl mx-auto h-[800px] overflow-hidden">
                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8">
                    {images.slice(0, 2).map((src, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                            <Image
                                src={src}
                                alt={`Gallery ${i}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>

                {/* Column 2 */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 pt-20">
                    {images.slice(2, 4).map((src, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                            <Image
                                src={src}
                                alt={`Gallery ${i + 2}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8">
                    {images.slice(4, 6).map((src, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                            <Image
                                src={src}
                                alt={`Gallery ${i + 4}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
