import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Copy } from 'lucide-react';
import { submitContactForm } from '../services/api';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await submitContactForm(form);
            // Save to local storage as per requirements
            const saved = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
            saved.push({ ...form, date: new Date().toISOString() });
            localStorage.setItem('contact_submissions', JSON.stringify(saved));

            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-rose-500/30">
            <header className="max-w-7xl mx-auto mb-24 border-b border-white/10 pb-12">
                <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-8">
                    LET'S<br />
                    <span className="text-zinc-600">COLLABORATE.</span>
                </h1>
                <p className="max-w-xl text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                    Have a vision? We can build it. Fill out the form or email us directly at <span className="text-white border-b border-white hover:text-blue-500 hover:border-blue-500 transition-colors cursor-pointer">hello@desynix.com</span>
                </p>
            </header>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-24">

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="relative group">
                        <input
                            type="text"
                            required
                            id="name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="block w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer"
                            placeholder="Your Name"
                        />
                        <label htmlFor="name" className="absolute left-0 -top-6 text-sm text-slate-500 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-blue-500 peer-focus:text-sm transition-all cursor-text">
                            Your Name
                        </label>
                    </div>

                    <div className="relative group">
                        <input
                            type="email"
                            required
                            id="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="block w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer"
                            placeholder="Email Address"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-6 text-sm text-slate-500 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-blue-500 peer-focus:text-sm transition-all cursor-text">
                            Email Address
                        </label>
                    </div>

                    <div className="relative group">
                        <textarea
                            required
                            id="message"
                            rows="1"
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            className="block w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer resize-none"
                            placeholder="Tell us about your project"
                        />
                        <label htmlFor="message" className="absolute left-0 -top-6 text-sm text-slate-500 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-blue-500 peer-focus:text-sm transition-all cursor-text">
                            Tell us about your project
                        </label>
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="group flex items-center gap-4 text-xl md:text-2xl font-medium tracking-tight hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Request'}
                            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                {status === 'success' ? <Check className="w-5 h-5 text-green-500" /> : <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />}
                            </span>
                        </button>
                    </div>
                </form>

                {/* Info */}
                <div className="mt-8 md:mt-24 space-y-12 text-lg text-slate-400 font-light">
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Email</h3>
                        <p className="hover:text-white transition-colors cursor-pointer">hello@desynix.com</p>
                        <p className="hover:text-white transition-colors cursor-pointer">careers@desynix.com</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Location</h3>
                        <p>123 Startup Hub,</p>
                        <p>Innovation Park,</p>
                        <p>India</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Follow Us</h3>
                        <div className="flex flex-col gap-2">
                            <span className="hover:text-blue-500 cursor-pointer w-fit">LinkedIn ↗</span>
                            <span className="hover:text-blue-500 cursor-pointer w-fit">Twitter ↗</span>
                            <span className="hover:text-blue-500 cursor-pointer w-fit">Instagram ↗</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
