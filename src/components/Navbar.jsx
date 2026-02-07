import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Work', path: '/portfolio' },
        { name: 'Services', path: '/services' },
        { name: 'Tech', path: '/technologies' },
        { name: 'Agency', path: '/about' },
        { name: 'Stories', path: '/testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}
        >
            <div className={`mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? 'max-w-6xl bg-black/80 backdrop-blur-md rounded-full border border-white/10 py-3 shadow-2xl' : 'max-w-7xl'}`}>

                {/* Brand */}
                <NavLink to="/" className="relative z-50 group">
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                        Desynix<span className="font-light text-slate-500 group-hover:text-blue-500/70">.</span>
                    </span>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium tracking-wide transition-all relative group ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        className={`text-sm font-medium bg-white text-black px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 duration-300 ml-4`}
                    >
                        Let's Talk
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-50 text-white focus:outline-none p-2"
                >
                    <span className="sr-only">Menu</span>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center h-screen w-screen"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-light tracking-tighter text-slate-300 hover:text-white hover:italic transition-all"
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl md:text-6xl font-bold tracking-tighter text-blue-500 hover:text-white transition-all"
                                >
                                    Contact
                                </NavLink>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
