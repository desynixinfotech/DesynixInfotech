import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-[5vw] font-bold tracking-tighter leading-none mb-8">
                            LET'S WORK<br />
                            TOGETHER.
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-flex items-center text-xl hover:text-blue-500 transition-colors border-b border-white/20 hover:border-blue-500 pb-1"
                        >
                            Start a project <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-12 md:pl-24">
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Sitemap</h4>
                            <ul className="space-y-3 font-light text-slate-400">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">Agency</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link to="/technologies" className="hover:text-white transition-colors">Technologies</Link></li>
                                <li><Link to="/portfolio" className="hover:text-white transition-colors">Work</Link></li>
                                <li><Link to="/testimonials" className="hover:text-white transition-colors">Stories</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Socials</h4>
                            <ul className="space-y-3 font-light text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center text-sm text-slate-600 font-mono">
                    <div className="mb-4 md:mb-0">
                        <span className="block text-white mb-2 text-lg font-bold tracking-tight">Desynix Infotech.</span>
                        <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
