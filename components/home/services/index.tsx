import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icons } from "../icons";
import services from "./services.json";

export const Services = () => {
  return (
    <section
      className="border-b border-dashed border-neutral-400 px-4 py-20 sm:px-10 md:px-20"
      id="services"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex items-center justify-center">
          <Icons.services />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-neutral-950">
            How can i help?
          </h2>
          <p className="text-neutral-500">
            We offer tailored web solutions to meet your unique needs. Whether
            it&apos;s Web Development, AI Integration, or SEO Optimization,
            we&apos;re here to bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Props {
  service: {
    name: string;
    description: string;
    image: string;
  };
}

const ServiceCard = ({ service }: Props) => {
  return (
    <Card className="border-neutral-300 bg-neutral-50 shadow-none">
      <CardHeader className="flex justify-center">
        <Image src={service.image} alt="service-1" width={180} height={180} />
      </CardHeader>
      <CardContent className="space-y-2">
        <h3 className="text-xl font-bold text-neutral-950">{service.name}</h3>
        <p className="text-sm text-neutral-500">{service.description}</p>
      </CardContent>
    </Card>
  );
};
