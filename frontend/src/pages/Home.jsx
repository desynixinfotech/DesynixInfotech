import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Zap, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="bg-black text-white selection:bg-blue-500/30">

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-36 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9] text-white/90 mix-blend-overlay">
                            THINK
                        </h1>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            DIGITAL.
                        </h1>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9] text-white/90 mix-blend-overlay">
                            THINK DESYNIX.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8"
                    >
                        <p className="max-w-md text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                            We are a digital product studio. We build high-performance websites,
                            mobile apps, and software solutions for ambitious startups.
                        </p>
                        <Link
                            to="/contact"
                            className="group mt-8 md:mt-0 flex items-center space-x-4 text-white hover:text-blue-400 transition-colors"
                        >
                            <span className="text-lg font-medium tracking-wide">Start a Project</span>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse opacity-30"></div>
            </section>

            {/* SERVICES PREVIEW (Minimal List) */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-white/5 border-t border-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Our Expertise</h2>
                        <Link to="/services" className="hidden md:block text-slate-400 hover:text-white transition-colors mt-2">View all services</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { title: 'Web Development', icon: <Globe />, desc: 'React, Next.js, and high-performance frontends.' },
                            { title: 'Product Design', icon: <Layout />, desc: 'UI/UX that converts visitors into loyal users.' },
                            { title: 'Mobile Solutions', icon: <Zap />, desc: 'Native & Cross-platform apps for iOS and Android.' },
                            { title: 'Custom Software', icon: <Code />, desc: 'Scalable backend architectures and APIs.' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-default"
                            >
                                <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {s.icon}
                                </div>
                                <h3 className="text-2xl font-light mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SELECTED WORK (Horizontal Scroll or Big Cards) */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
                    <div>
                        <span className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-2 block">Selected Work</span>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Recent Projects</h2>
                    </div>
                    <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors flex items-center">
                        All Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="space-y-24">
                    {/* Project 1 */}
                    <div className="group relative grid md:grid-cols-2 gap-8 items-center cursor-pointer">
                        <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-900 border border-white/10 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Fintech Dashboard"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-light">Fintech Dashboard</h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                A complete overhaul of a financial analytics platform. We focused on data visualization clarity and real-time performance updates.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'D3.js', 'Node.js'].map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative grid md:grid-cols-2 gap-8 items-center cursor-pointer md:flex-row-reverse">
                        <div className="bg-slate-900 overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 relative md:order-2">
                            <div className="absolute inset-0 bg-gradient-to-bl from-green-900/40 to-blue-900/40 opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
                                alt="Health App"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="space-y-6 md:order-1">
                            <h3 className="text-3xl md:text-4xl font-light">Vitality Health</h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                A cross-platform mobile application for tracking daily wellness metrics. Integrated with wearable APIs for seamless data sync.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React Native', 'Firebase', 'Redux'].map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Big & Bold */}
            <section className="py-32 px-6 md:px-12 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto">
                        Ready to build the future?
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
                        Whether you're a startup looking for an MVP or an enterprise needing a digital transformation, we're here.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
                    >
                        Let's Talk Business
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
