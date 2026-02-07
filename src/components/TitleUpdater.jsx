import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
    '/': 'Home',
    '/about': 'About Us',
    '/services': 'Services',
    '/technologies': 'Technologies',
    '/portfolio': 'Portfolio',
    '/testimonials': 'Testimonials',
    '/contact': 'Contact Us',
};

const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const title = titles[location.pathname] || 'Think Digital';
        document.title = `${title} | Desynix Infotech`;
    }, [location]);

    return null;
};

export default TitleUpdater;
