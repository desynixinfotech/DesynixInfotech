import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-purple-500/30">

            {/* Header */}
            <header className="max-w-7xl mx-auto mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-12"
                >
                    AGENCY<br />
                    OF THE<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        FUTURE.
                    </span>
                </motion.h1>
                <div className="flex flex-col md:flex-row justify-end items-end w-full border-t border-white/10 pt-8">
                    <p className="max-w-xl text-xl md:text-2xl text-slate-400 font-light leading-relaxed text-right">
                        Desynix Infotech is a new-age digital product studio.
                        We don't just write code; we architect solutions that scale.
                        Born in the cloud, built for the world.
                    </p>
                </div>
            </header>

            {/* Narrative Section */}
            <section className="max-w-5xl mx-auto space-y-32">

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                            The Virtual Advantage.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                            <p>
                                Traditional agencies are slow. They have overheads, offices, and layers of management.
                                We stripped all that away.
                            </p>
                            <p>
                                Desynix operates on a <strong>100% remote, hyper-agile model</strong>.
                                This means you pay for top-tier talent and code, not for our office rent.
                                We assemble the best minds from across the region to work on your product.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 h-[500px] bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                            alt="Collaboration"
                            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="h-[500px] bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                            alt="Digital Craft"
                            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                            Craft & Code.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                            <p>
                                We believe that great software is an art form. It requires the precision of engineering
                                and the intuition of design.
                            </p>
                            <p>
                                Our team consists of full-stack engineers, UI/UX designers, and product strategists
                                who have built products for startups and enterprises alike. We don't just "deliver projects";
                                we partner with you to build businesses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values - Simple List */}
                <div className="border-t border-white/10 pt-24">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-12">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Transparency', desc: 'No hidden costs. No jargon. Just honest work.' },
                            { title: 'Quality', desc: 'We refuse to ship bad code. Period.' },
                            { title: 'Speed', desc: 'We move fast, but we never break things.' },
                            { title: 'Empathy', desc: 'We build for humans, not for robots.' }
                        ].map((val, i) => (
                            <div key={i} className="group">
                                <h4 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-500 transition-colors">{val.title}</h4>
                                <p className="text-slate-400 font-light leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default About;
