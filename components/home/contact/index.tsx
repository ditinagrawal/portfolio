import { Footer } from "../footer";
import { Icons } from "../icons";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <section className="px-4 pt-20 sm:px-10 md:px-20" id="contact">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex items-center justify-center">
          <Icons.contact />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-neutral-950">Contact me</h2>
          <p className="text-neutral-500">
            Have a project in mind or just want to say hello? Fill out the form
            below and I&apos;ll get back to you as soon as possible. Let&apos;s
            build something great together!
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
};
