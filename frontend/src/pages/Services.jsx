import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            category: "01 / Engineering",
            items: [
                { title: "Web Application Development", desc: "Complex, scalable web apps built with React, Next.js, and Node.js. Single Page Applications (SPAs) and Progressive Web Apps (PWAs)." },
                { title: "Mobile App Development", desc: "Cross-platform solutions using React Native. iOS and Android apps that feel native and perform flawlessly." },
                { title: "API Development & Integration", desc: "Robust RESTful and GraphQL APIs. Microservices architecture and third-party integrations (Stripe, Twilio, etc.)." },
                { title: "Cloud Infrastructure", desc: "AWS, Google Cloud, and Azure setup. DevOps, CI/CD pipelines, and serverless architecture." }
            ]
        },
        {
            category: "02 / Design",
            items: [
                { title: "UI/UX Design", desc: "User research, wireframing, and high-fidelity prototyping. Design systems that ensure consistency." },
                { title: "Product Strategy", desc: "Market analysis, feature prioritization, and MVP definition. We help validiate your ideas." },
                { title: "Brand Identity", desc: "Digital-first branding. Logos, typography, and color palettes that resonate with modern audiences." }
            ]
        },
        {
            category: "03 / Growth",
            items: [
                { title: "SEO Optimization", desc: "Technical SEO, performance optimization, and content strategy to rank higher on Google." },
                { title: "Performance Audits", desc: "Deep dive into your codebase to identify bottlenecks and improve load times." }
            ]
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-purple-500/30">

            <header className="max-w-7xl mx-auto mb-24 border-b border-white/10 pb-12">
                <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-8">
                    OUR<br />
                    <span className="text-zinc-500">SERVICES.</span>
                </h1>
                <p className="max-w-2xl text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                    We don't just offer services; we offer solutions. Every line of code and every pixel is crafted with intent.
                </p>
            </header>

            <div className="max-w-7xl mx-auto space-y-32">
                {services.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-blue-500 mb-12 border-l-2 border-blue-500 pl-4">
                            {section.category}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {section.items.map((item, i) => (
                                <div key={i} className="group cursor-default">
                                    <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="mt-32 max-w-7xl mx-auto border-t border-white/10 pt-16 text-center">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Have a specific request?</h3>
                <Link to="/contact" className="inline-flex items-center text-xl md:text-2xl text-white hover:text-blue-500 transition-colors border-b border-white hover:border-blue-500 py-1">
                    Contact us for a custom quote <ArrowUpRight className="ml-2 w-6 h-6" />
                </Link>
            </section>

        </div>
    );
};

export default Services;
