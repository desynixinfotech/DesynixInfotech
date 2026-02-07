import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Nexo Finance",
        context: "When milliseconds cost millions.",
        tagline: "Speed isn't a feature here; it's survival. 40ms faster meant the difference between profit and loss.",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop",
        client: "Fintech Startup",
        services: "Architecture, Real-time Data",
        outcome: "We stripped away 40% of the drag. Now, they trade at the speed of thought."
    },
    {
        id: 2,
        title: "Vitality",
        context: "Data is useless if it feels like homework.",
        tagline: "Healthcare apps usually feel like clinical forms. We built one that feels like a companion.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1967&auto=format&fit=crop",
        client: "HealthTech Series A",
        services: "Mobile Experience",
        outcome: "We turned 'tracking' into 'living'. 100k users agreed in week one."
    },
    {
        id: 3,
        title: "Luxe Interiors",
        context: "Luxury isn't a price point. It's a feeling.",
        tagline: "Selling a $10,000 sofa online requires more than a photo. It requires belief.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        client: "Retail Enterprise",
        services: "Immersive WebGL",
        outcome: "A digital showroom that feels as expensive as the furniture. Conversions jumped 25%."
    }
];

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center mb-56`}>

            {/* Image Section - Framed & Controlled */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
            >
                <div className="relative overflow-hidden aspect-[4/3] max-h-[60vh] bg-slate-900/50">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 ease-out"
                    />
                </div>
            </motion.div>

            {/* Narrative Section - The Story */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-10"
            >
                <div className="space-y-4">
                    <p className="text-blue-500 font-mono text-xs uppercase tracking-widest">
                        0{index + 1} — {project.client}
                    </p>
                    <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight">
                        {project.title}
                    </h2>
                    <p className="text-xl text-slate-500 font-serif italic">
                        "{project.context}"
                    </p>
                </div>

                <div className="text-lg text-slate-300 font-light leading-relaxed max-w-md">
                    <p className="mb-8">{project.tagline}</p>

                    <div className="pl-6 border-l border-blue-500/30">
                        <p className="text-slate-400 text-sm uppercase tracking-wide mb-2">The Impact</p>
                        <p className="text-white font-medium">{project.outcome}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-500 font-mono">
                    <span>{project.services}</span>
                </div>

            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-40 pb-32 px-6 md:px-12 selection:bg-blue-500/30">

            {/* Minimal Header */}
            <header className="max-w-7xl mx-auto mb-40">
                <h1 className="text-[12vw] font-bold tracking-tighter leading-none text-white/10 select-none">
                    WORK.
                </h1>
            </header>

            {/* SIGNATURE STATEMENT - High Drama, High Contrast */}
            <section className="max-w-4xl mx-auto mb-56 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
                        We build the <span className="text-blue-500 italic font-serif">quiet machinery</span> <br />
                        that powers loud ambitions.
                    </p>
                    <p className="mt-8 text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Complexity should be our problem, not your user's.
                    </p>
                </motion.div>
            </section>

            {/* Projects List */}
            <div className="max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Final Thought */}
            <section className="max-w-2xl mx-auto text-center py-32 mt-20">
                <p className="text-2xl font-light text-slate-400 mb-8">
                    We don't just hand over code. <br />
                    We build the foundation your company stands on.
                </p>
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent mx-auto opacity-50"></div>
            </section>

        </div>
    );
};

export default Portfolio;
