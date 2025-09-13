import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Quote } from "lucide-react";
import { Icons } from "../icons";
import testimonials from "./testimonials.json";

export const Testimonials = () => {
  return (
    <section
      className="border-b border-dashed border-neutral-400 px-4 py-20 sm:px-10 md:px-20"
      id="testimonials"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex items-center justify-center">
          <Icons.testimonials />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-neutral-950">Wall of love</h2>
          <p className="text-neutral-500">
            Hear what my clients have to say about working together. From
            startups to established businesses, their feedback highlights my
            commitment to quality, collaboration, and delivering results that
            exceed expectations.
          </p>
        </div>
      </div>
      <Slider speedOnHover={20} gap={24} className="pt-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Slider>
    </section>
  );
};

interface Props {
  testimonial: {
    feedback: string;
    name: string;
    position: string;
  };
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <Card className="max-w-xl border-neutral-300 bg-[#fafafa] shadow-none">
      <Quote className="mx-auto size-8 stroke-neutral-900 drop-shadow-sm" />
      <blockquote className="mt-4 px-6">
        <p className="text-center text-lg text-neutral-800">
          {testimonial.feedback}
        </p>
        <footer className="mt-4 flex flex-col items-center justify-center">
          <cite className="mt-2 text-lg font-medium text-neutral-950">
            {testimonial.name}
          </cite>
          <span className="text-neutral-500">{testimonial.position}</span>
        </footer>
      </blockquote>
    </Card>
  );
};
