/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'], // Premium, geometric sans
                serif: ['Playfair Display', 'serif'], // For editorial touches if needed
            },
            colors: {
                background: "#050505", // Almost black, deeper than slate-950
                surface: "#0A0A0A", // Slightly lighter for sections
                surfaceHighlight: "#121212",
                primary: "#3B82F6", // Keeping blue but maybe shifting to a more specific electric blue or keeping it standard
                secondary: "#8b5cf6",
                text: {
                    main: "#EDEDED",
                    muted: "#A1A1AA",
                    dim: "#52525B"
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'subtle-grid': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slow-pan': 'pan 20s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pan: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
}
