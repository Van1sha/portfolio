import { FileText, Download, Eye, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const Resume = () => {
    return (
        <div className="min-h-screen bg-background">
            <CustomCursor />

            {/* Background mesh gradient */}
            <div
                className="fixed inset-0 pointer-events-none opacity-40"
                style={{ background: 'var(--gradient-mesh)' }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
                {/* Back to portfolio link */}
                <Link
                    to="/"
                    className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm font-medium">Back to Portfolio</span>
                </Link>

                {/* Heading */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Get a detailed look at my skills, experience, and education
                    </p>
                </div>

                {/* Resume Card */}
                <Card className="glass-card border-0 w-full max-w-lg animate-slide-up">
                    <CardContent className="p-10">
                        <div className="flex flex-col items-center text-center space-y-8">
                            {/* Icon */}
                            <div className="p-6 rounded-full bg-primary/10 animate-float">
                                <FileText size={48} className="text-primary" />
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold">Vanisha's Resume</h2>
                                <p className="text-muted-foreground text-sm">
                                    PDF • Updated 2026
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <Button
                                    asChild
                                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 h-12 text-base"
                                >
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        <Eye size={18} className="mr-2" />
                                        View Resume
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 h-12 text-base"
                                >
                                    <a href="/resume.pdf" download>
                                        <Download size={18} className="mr-2" />
                                        Download Resume
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Resume;
