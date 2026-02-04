
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from 'lucide-react';
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { DynamicSection } from "@/components/dynamic-section";


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Failed to send message");
      }
      toast({
        title: "Message Sent!",
        description: "We've received your message and emailed you a confirmation.",
      });
      form.reset();
    } catch (e: any) {
      toast({
        title: "Something went wrong",
        description: e?.message || "Unable to send your message right now.",
        variant: "destructive",
        // variant can be added if your toast supports it
      });
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline">Contact Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <DynamicSection
                    pageId="contact-info"
                    onlyContent
                    defaultContent={
                      <>
                        <div className="flex items-start gap-4">
                          <MapPin className="h-6 w-6 text-primary mt-1" />
                          <p className="text-muted-foreground">
                            Opposite Ulsoor Lake<br />
                            12 Annasawmy Mudaliar Road<br />
                            Bangalore 560042
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Mail className="h-6 w-6 text-primary" />
                          <a href="mailto:info@rbanmsfgc.edu.in" className="text-muted-foreground hover:text-primary">
                            Via e-mail: info@rbanmsfgc.edu.in
                          </a>
                        </div>
                        <div className="flex items-center gap-4">
                          <Mail className="h-6 w-6 text-primary" />
                          <a href="mailto:priyamahesh09@gmail.com" className="text-muted-foreground hover:text-primary">
                            priyamahesh09@gmail.com (Placement)
                          </a>
                        </div>
                        <div className="flex items-start gap-4">
                          <Phone className="h-6 w-6 text-primary mt-1" />
                          <div className="flex flex-col text-muted-foreground">
                            <span>Landline: <a href="tel:08025512976" className="hover:text-primary">080-25512976</a> / <a href="tel:08048533572" className="hover:text-primary">080-48533572</a></span>
                            <span>Mobile: <a href="tel:7349251497" className="hover:text-primary">7349251497</a></span>
                          </div>
                        </div>
                      </>
                    }
                  />
                </CardContent>
              </Card>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9045763953507!2d77.61623867601057!3d12.97792248733737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168536b85675%3A0xbef91957c5a0833a!2sRBANM&#39;s%20First%20Grade%20College!5e0!3m2!1sen!2sin!4v1763784013444!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Subject of your message" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Type your message here." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Send Message</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
