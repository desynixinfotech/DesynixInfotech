import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, name: "John Doe", company: "TechStart Inc.", role: "CEO", text: "Desynix Infotech transformed our vision into reality. Their team is incredibly talented and professional. They don't just build; they understand business." },
        { id: 2, name: "Sarah Smith", company: "Creative Studio", role: "Product Lead", text: "The attention to detail is unmatched. Every pixel was considered, and the performance is blazing fast. Highly recommended." },
        { id: 3, name: "Michael Brown", company: "E-Shop Solutions", role: "Founder", text: "We were looking for a partner who could move fast without breaking things. Desynix delivered beyond our expectations." }
    ]);
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-amber-500/30 flex flex-col justify-between">

            <header className="max-w-7xl mx-auto w-full mb-12 border-b border-white/10 pb-8">
                <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-4">
                    CLIENT<br />
                    <span className="text-zinc-600">STORIES.</span>
                </h1>
            </header>

            <div className="max-w-5xl mx-auto flex-grow flex items-center justify-center relative w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-center"
                    >
                        <Quote className="w-16 h-16 text-blue-500/20 mx-auto mb-12" />
                        <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-slate-200 mb-12">
                            "{testimonials[current].text}"
                        </p>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                                {testimonials[current].name}
                            </h3>
                            <p className="text-slate-500 font-light text-lg">
                                {testimonials[current].role}, {testimonials[current].company}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="max-w-7xl mx-auto w-full flex justify-between items-end border-t border-white/10 pt-8 mt-12">
                <span className="text-slate-500 font-mono text-sm">
                    0{current + 1} / 0{testimonials.length}
                </span>
                <div className="flex space-x-4">
                    <button onClick={prev} className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
