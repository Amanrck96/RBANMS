import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Briefcase, GraduationCap, Heart, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career Opportunities | RBANM's First Grade College",
    description: "Join RBANM's First Grade College and be part of our mission to transform lives through education.",
};

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-primary/5 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="secondary" className="mb-4 text-primary font-bold bg-white shadow-sm">Join Our Team</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">Career Opportunities</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
                        Be part of a legacy that values compassion, idealism, and the transformative power of education.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-foreground">Why Work With Us?</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            RBANMs FGC welcomes people who are compassionate, idealistic, and who resonate with our vision.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            If you are interested in joining our efforts to offer education as a tool to transform lives, we would love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <div className="flex items-center gap-3 text-primary bg-primary/5 p-4 rounded-lg border border-primary/10 w-full sm:w-auto">
                                <Heart className="h-6 w-6" />
                                <span className="font-semibold">Compassion</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary bg-primary/5 p-4 rounded-lg border border-primary/10 w-full sm:w-auto">
                                <Lightbulb className="h-6 w-6" />
                                <span className="font-semibold">Idealism</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary bg-primary/5 p-4 rounded-lg border border-primary/10 w-full sm:w-auto">
                                <GraduationCap className="h-6 w-6" />
                                <span className="font-semibold">Education</span>
                            </div>
                        </div>
                    </div>

                    <Card className="border-2 border-primary/10 shadow-lg bg-white overflow-hidden">
                        <div className="h-2 bg-primary w-full"></div>
                        <CardContent className="p-8 text-center space-y-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <Mail className="h-8 w-8" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                                <p className="text-muted-foreground">
                                    Send us your resume and cover letter to apply for current or future openings.
                                </p>
                            </div>

                            <div className="py-4">
                                <Button asChild size="lg" className="w-full text-lg">
                                    <a href="mailto:info@rbanmsfgc.edu.in">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Write to Us
                                    </a>
                                </Button>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Email: <span className="font-medium text-foreground select-all">info@rbanmsfgc.edu.in</span>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
