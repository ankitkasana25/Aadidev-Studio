"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Send } from "lucide-react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  description: z
    .string()
    .min(10, "Please describe your project (at least 10 characters)")
    .max(2000),
  timeline: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      description: "",
      timeline: "",
      agree: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    console.log("[v0] Form submitted with data:", data);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("[v0] Form submission successful");
      setSubmitSuccess(true);

      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.log("[v0] Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <Card className="p-12 border-amber-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 dark:border-green-700 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold mb-2 text-green-900 dark:text-green-100">
          Thank You!
        </h3>
        <p className="text-green-800 dark:text-green-200 mb-4">
          Your message has been sent successfully. Our team will contact you
          within 24 hours.
        </p>
        <p className="text-sm text-green-700 dark:text-green-300">
          Check your email for confirmation and project details.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 md:p-12 border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: Name and Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Phone and Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 79767 32828" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company / Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Project Type and Budget */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type *</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 border border-input rounded-md bg-transparent text-foreground focus:border-ring focus:ring-ring/50 focus:ring-[3px] outline-none transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="temple">Temple & Spiritual</option>
                      <option value="home">Home Decor & Interior</option>
                      <option value="outdoor">Outdoor & Garden</option>
                      <option value="architectural">Architectural</option>
                      <option value="kitchen">Kitchen & Utility</option>
                      <option value="corporate">Corporate & Gifting</option>
                      <option value="furniture">Luxury Furniture</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 border border-input rounded-md bg-transparent text-foreground focus:border-ring focus:ring-ring/50 focus:ring-[3px] outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹100,000</option>
                      <option value="100k-500k">₹100,000 - ₹500,000</option>
                      <option value="500k-1m">₹500,000 - ₹10,00,000</option>
                      <option value="above-1m">Above ₹10,00,000</option>
                    </select>
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                </FormItem>
              )}
            />
          </div>

          {/* Row 4: Timeline */}
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Timeline</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-input rounded-md bg-transparent text-foreground focus:border-ring focus:ring-ring/50 focus:ring-[3px] outline-none transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (within 2 weeks)</option>
                    <option value="soon">Soon (1-2 months)</option>
                    <option value="flexible">Flexible (2-4 months)</option>
                    <option value="planning">Planning stage</option>
                  </select>
                </FormControl>
                <FormDescription>Optional</FormDescription>
              </FormItem>
            )}
          />

          {/* Row 5: Project Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project... What are you envisioning? Any specific requirements, materials, or inspirations?"
                    className="min-h-32 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {field.value.length}/2000 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agreement Checkbox */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={field.value}
                  onChange={field.onChange}
                  className="mt-1 rounded border-input w-4 h-4 cursor-pointer accent-amber-600"
                />
                <label
                  htmlFor="agree"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  I agree to be contacted by AADIDEV Studio regarding my
                  project. I understand my information will be used for project
                  consultation purposes only. *
                </label>
                {form.formState.errors.agree && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.agree.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-6 text-base font-semibold gap-2 transition-all duration-300 hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Project Inquiry
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              We'll respond within 24 business hours with a personalized quote.
            </p>
          </div>
        </form>
      </Form>
    </Card>
  );
}
