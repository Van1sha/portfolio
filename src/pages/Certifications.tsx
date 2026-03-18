import { ArrowLeft, Award, GraduationCap, Trophy, ExternalLink, Calendar, Building2, BookOpen, Code2, Cloud, Bot, Cpu, Globe, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import { useEffect, useRef, useState } from 'react';

const certifications = [
    {
        title: 'React (Basic)',
        issuer: 'HackerRank',
        date: 'Sep 2025',
        icon: Code2,
        color: 'from-cyan-500 to-blue-600',
        iconColor: 'text-cyan-400',
    },
    {
        title: 'Cloud Infrastructure 2025 Certified AI Foundation Associate',
        issuer: 'Oracle',
        date: 'Sep 2025',
        icon: Cloud,
        color: 'from-red-500 to-orange-600',
        iconColor: 'text-red-400',
    },
    {
        title: 'Build Generative AI Apps & Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        icon: Bot,
        color: 'from-violet-500 to-purple-600',
        iconColor: 'text-violet-400',
    },
    {
        title: 'ChatGPT-4 Prompt Engineering: Generative AI & LLM',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        icon: Bot,
        color: 'from-emerald-500 to-teal-600',
        iconColor: 'text-emerald-400',
    },
    {
        title: 'Computational Theory: Language Principle & Finite Automata',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        icon: Cpu,
        color: 'from-amber-500 to-yellow-600',
        iconColor: 'text-amber-400',
    },
    {
        title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        icon: Bot,
        color: 'from-pink-500 to-rose-600',
        iconColor: 'text-pink-400',
    },
    {
        title: 'Java Programming',
        issuer: 'NeoColab',
        date: 'May 2025',
        icon: Coffee,
        color: 'from-orange-500 to-amber-600',
        iconColor: 'text-orange-400',
    },
    {
        title: 'Cloud Computing',
        issuer: 'Swayam (NPTEL)',
        date: 'Apr 2025',
        icon: Cloud,
        color: 'from-sky-500 to-blue-600',
        iconColor: 'text-sky-400',
    },
    {
        title: 'C++ Programming: OOPS & DSA',
        issuer: 'NeoColab',
        date: 'Jan 2024',
        icon: Code2,
        color: 'from-indigo-500 to-violet-600',
        iconColor: 'text-indigo-400',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: 'Jan 2024',
        icon: Globe,
        color: 'from-green-500 to-emerald-600',
        iconColor: 'text-green-400',
    },
];

const achievements = [
    {
        title: 'Hackathon at Infotsav\'25',
        description: 'Organized by ABV-IIITM (Atal Bihari Vajpayee – Indian Institute of Information Technology and Management)',
        date: 'Oct 2025',
        icon: Trophy,
    },
    {
        title: 'Smart India Hackathon (SIH)',
        description: 'Selected and participated in the Prototype Round of the national-level Smart India Hackathon',
        date: 'Sep 2025',
        icon: Trophy,
    },
    {
        title: 'Active Codeforces Participant',
        description: 'Learning algorithms and data structures through Codeforces contests — Rating: 950',
        date: 'Jul 2025',
        icon: Code2,
    },
];

const Certifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={pageRef} className="min-h-screen bg-background">
            <CustomCursor />

            {/* Background mesh gradient */}
            <div
                className="fixed inset-0 pointer-events-none opacity-40"
                style={{ background: 'var(--gradient-mesh)' }}
            />

            <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
                {/* Back to portfolio link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-12"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm font-medium">Back to Portfolio</span>
                </Link>

                {/* ===== PAGE HEADING ===== */}
                <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card mb-6">
                        <Award size={18} className="text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Verified Credentials</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Certificates &{' '}
                        <span className="gradient-text">Training</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my professional certificates, training programs, and achievements that validate my skills and continuous learning journey.
                    </p>
                </div>

                {/* ===== CERTIFICATIONS SECTION ===== */}
                <section className={`mb-24 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 rounded-xl bg-primary/10">
                            <Award size={24} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">
                            <span className="gradient-text">Certificates</span>
                        </h2>
                        <span className="ml-auto text-sm text-muted-foreground font-medium px-3 py-1 rounded-full glass-card">
                            {certifications.length} Earned
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {certifications.map((cert, index) => (
                            <Card
                                key={cert.title}
                                className="group premium-card border-0 overflow-hidden cursor-pointer"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <CardContent className="p-0 relative z-10">
                                    <div className="flex gap-5 p-6">
                                        {/* Icon with gradient background */}
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                            <cert.icon size={26} className="text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-base leading-snug mb-1.5 text-foreground group-hover:text-white transition-colors duration-300 line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Building2 size={13} className="text-gray-400 group-hover:text-gray-300 flex-shrink-0 transition-colors duration-300" />
                                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                                                    {cert.issuer}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={13} className="text-gray-400 group-hover:text-gray-300 flex-shrink-0 transition-colors duration-300" />
                                                <span className="text-xs text-gray-400 group-hover:text-white/90 transition-colors duration-300 drop-shadow-sm">
                                                    {cert.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* ===== TRAINING SECTION ===== */}
                <section className={`mb-24 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 rounded-xl bg-secondary/10">
                            <GraduationCap size={24} className="text-secondary" />
                        </div>
                        <h2 className="text-3xl font-bold">
                            <span className="gradient-text">Training</span>
                        </h2>
                    </div>

                    <Card className="glass-card border-0 overflow-hidden group hover:shadow-elevated transition-all duration-500">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                                {/* Left accent bar */}
                                <div className="w-full md:w-2 h-2 md:h-auto bg-gradient-to-b from-primary via-secondary to-accent" />

                                <div className="flex-1 p-8 md:p-10">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                                                <BookOpen size={14} />
                                                Intensive Program
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground mb-1">DSA Trainee</h3>
                                            <p className="text-muted-foreground">
                                                Lovely Professional University <span className="text-muted-foreground/60">×</span> Programming Pathshala
                                            </p>
                                        </div>
                                        <span className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                                            <Calendar size={14} />
                                            Jun – Aug 2025
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            'Enhanced logical thinking, problem-solving, and code optimization skills through multiple contests on vJudge.',
                                            'Collaboratively developed PathFinding Visualizer — a web-based tool demonstrating BFS, DFS, Dijkstra\'s, and A* algorithms.',
                                            'Individually built N-Queen Problem Analyzer with Logs, visualizing the backtracking process and solution paths.',
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* ===== ACHIEVEMENTS SECTION ===== */}
                <section className={`mb-16 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 rounded-xl bg-accent/10">
                            <Trophy size={24} className="text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold">
                            <span className="gradient-text">Achievements</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={achievement.title}
                                className="premium-card border-0 group cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-8 text-center relative z-10">
                                    {/* Icon */}
                                    <div className="mb-5 relative inline-block">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-300" />
                                        <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                                            <achievement.icon size={32} className="text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                    </div>

                                    {/* Date badge */}
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-3 px-3 py-1 rounded-full bg-muted/30">
                                        <Calendar size={12} />
                                        {achievement.date}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-white transition-colors duration-300">
                                        {achievement.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                                        {achievement.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Certifications;
