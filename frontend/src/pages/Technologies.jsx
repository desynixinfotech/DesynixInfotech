import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Database, Globe, Cpu, Smartphone, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technologies = () => {

    const techGroups = [
        {
            title: "Frontend Experience",
            description: "We build interfaces that feel fluid, responsive, and alive. Every interaction is calculated for maximum engagement.",
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            tools: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"]
        },
        {
            title: "Backend Systems",
            description: "Robust, scalable architectures that handle complex logic without breaking a sweat. Security and speed are built-in.",
            icon: <Database className="w-6 h-6 text-purple-400" />,
            tools: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
        },
        {
            title: "Mobile Solutions",
            description: "Native-grade performance for iOS and Android. One codebase, two platforms, zero compromise on quality.",
            icon: <Smartphone className="w-6 h-6 text-pink-400" />,
            tools: ["React Native", "Expo", "Swift", "Kotlin"]
        },
        {
            title: "DevOps & Cloud",
            description: "Automated pipelines and serverless infrastructure. We ensure global availability and instant deployments.",
            icon: <Cpu className="w-6 h-6 text-green-400" />,
            tools: ["AWS", "Vercel", "Docker", "CI/CD", "Google Cloud"]
        },
        {
            title: "CMS & E-Commerce",
            description: "Empowering your team to manage content effortlessly. Headless solutions for modern retail experiences.",
            icon: <Layers className="w-6 h-6 text-amber-400" />,
            tools: ["Shopify", "Sanity", "Strapi", "Contentful"]
        },
        {
            title: "Code Quality",
            description: "We write clean, maintainable code that other developers love. Strict linting, testing, and documentation.",
            icon: <Code2 className="w-6 h-6 text-slate-400" />,
            tools: ["ESLint", "Jest", "Cypress", "Prettier", "Storybook"]
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-purple-500/30">

            {/* Header - Consistent with Portfolio/Contact */}
            <header className="max-w-7xl mx-auto mb-24 border-b border-white/10 pb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-8"
                >
                    OUR<br />
                    <span className="text-zinc-600">TOOLKIT.</span>
                </motion.h1>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <p className="max-w-2xl text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                        We don't chase trends. We choose technology that guarantees longevity, performance, and scalability for your business.
                    </p>
                    <div className="hidden md:block text-right">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Philosophy</p>
                        <p className="text-white font-medium">Stability First</p>
                    </div>
                </div>
            </header>

            {/* Tech Groups - Grid Layout matching Home/Services logic */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                {techGroups.map((group, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                    >
                        <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            {group.icon}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white group-hover:text-blue-400 transition-colors">
                            {group.title}
                        </h3>

                        <p className="text-slate-400 font-light leading-relaxed mb-8 min-h-[5rem]">
                            {group.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {group.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs md:text-sm text-slate-300 group-hover:border-white/30 group-hover:text-white transition-colors"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section - Consistent with Footer flow */}
            <section className="max-w-7xl mx-auto border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Build with the best.</h3>
                    <p className="text-slate-400 font-light">Your product deserves a stack that scales.</p>
                </div>
                <Link
                    to="/contact"
                    className="group inline-flex items-center text-xl text-white hover:text-blue-500 transition-colors"
                >
                    Start Project <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </section>

        </div>
    );
};

export default Technologies;
