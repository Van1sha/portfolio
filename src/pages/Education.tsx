import { ArrowLeft, GraduationCap, Building2, Calendar, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import { useEffect, useRef, useState } from 'react';

const education = [
    {
        degree: 'Bachelor of Technology - Computer Science and Engineering',
        institution: 'Lovely Professional University, Punjab, India',
        duration: 'Jul 2023 - Present',
        score: 'CGPA: 8.11',
        icon: GraduationCap,
    },
    {
        degree: 'Intermediate (12th Grade)',
        institution: 'Gurukul International Academy, Najibabad, UP (ICSE Board)',
        duration: 'Apr 2022 – Mar 2023',
        score: 'Percentage: 82%',
        icon: BookOpen,
    },
    {
        degree: 'Matriculation (10th Grade)',
        institution: 'Gurukul International Academy, Najibabad, UP (ICSE Board)',
        duration: 'Apr 2020 – Mar 2021',
        score: 'Percentage: 85%',
        icon: BookOpen,
    }
];

const Education = () => {
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
                        <GraduationCap size={18} className="text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Academic Background</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Education</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A timeline of my academic journey, degrees, and the foundations of my computer science knowledge.
                    </p>
                </div>

                {/* ===== EDUCATION SECTION ===== */}
                <section className={`mb-24 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-6">
                        {education.map((item, index) => (
                            <Card
                                key={index}
                                className="glass-card border-0 overflow-hidden group hover:shadow-elevated transition-all duration-500"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Left accent bar */}
                                        <div className="w-full md:w-2 h-2 md:h-auto bg-gradient-to-b from-primary via-secondary to-accent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                        <item.icon size={20} />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {item.degree}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground ml-11">
                                                    <Building2 size={16} />
                                                    <span>{item.institution}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-start md:items-end gap-2 ml-11 md:ml-0">
                                                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-1.5 rounded-full whitespace-nowrap">
                                                    <Calendar size={14} />
                                                    {item.duration}
                                                </span>
                                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap">
                                                    <Award size={14} />
                                                    {item.score}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Education;
