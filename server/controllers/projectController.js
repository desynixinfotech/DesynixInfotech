const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "A full-featured online store with payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        id: 2,
        title: "Health Tracker App",
        category: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Cross-platform mobile application for tracking fitness goals.",
        technologies: ["React Native", "Firebase", "Redux"]
    },
    {
        id: 3,
        title: "Financial Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Modern dashboard interface redesign for fintech client.",
        technologies: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 4,
        title: "Corporate Website",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Professional corporate identity website with CMS.",
        technologies: ["Next.js", "Tailwind CSS", "Sanity"]
    },
    {
        id: 5,
        title: "Social Media Analytics",
        category: "Software Development",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Analytics tool for tracking social media performance.",
        technologies: ["Python", "Django", "PostgreSQL", "React"]
    },
    {
        id: 6,
        title: "Cloud Migration Strategy",
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive cloud migration plan for enterprise client.",
        technologies: ["AWS", "Docker", "Kubernetes"]
    }
];

exports.getAllProjects = (req, res) => {
    res.json(projects);
};

exports.getProjectById = (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
};
