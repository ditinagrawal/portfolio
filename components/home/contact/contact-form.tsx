"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    try {
      startTransition(async () => {
        const response = await fetch("https://ping.ditin.in/api/events", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.PING_API_KEY}`,
          },
          body: JSON.stringify({
            category: "new-message",
            fields: {
              from: "PORTFOLIO",
              name: fullName,
              email: email,
              message: message,
            },
          }),
        });
        console.log(response);
        setIsSuccess(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/msg-sent.svg" alt="msg-sent" width={200} height={200} />
        <p className="text-lg font-semibold text-neutral-950">
          Message sent successfully
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          type="text"
          placeholder="Full Name"
          className="h-12 bg-neutral-50"
          autoComplete="off"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isPending}
        />
        <Input
          type="email"
          placeholder="Email"
          className="h-12 bg-neutral-50"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </div>
      <Textarea
        placeholder="Message"
        className="h-56 bg-neutral-50"
        autoComplete="off"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isPending}
      />
      <Button type="submit" className="w-full bg-[#333]" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
