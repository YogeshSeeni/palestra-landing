"use client"

import { useState } from "react";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Custom Components
import { Section, Container } from "@/components/craft";
import Logo from "@/public/logo.svg";

// Assets
import Placeholder from "@/public/placeholder.jpg";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/firebase";

interface EmailData {
  email: string;
  timestamp: Date;
}

const addEmailToCollection = async (email: string): Promise<void> => {
  try {
    const emailData: EmailData = {
      email,
      timestamp: new Date(),
    };

    const docRef = await addDoc(collection(db, 'emails'), emailData);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Hero() {
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await addEmailToCollection(values.email);
    setSuccessMessage("Email successfully submitted!");
    form.reset();
    setTimeout(() => setSuccessMessage(""), 5000); // Hide message after 5 seconds
  };

  return (
    <Section className="border-b">
      <Container>
        <div className="flex flex-col items-center text-center">
        <Image
                src={Logo}
                alt="Logo"
                width={200}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
          <h1 className="!mb-0">
            <Balancer>
              Your Personal Fitness Assistant
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Sign Up Below for Updates
            </Balancer>
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 text-left"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-96"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
              {successMessage && (
                <div className="mt-2 text-green-600">
                  {successMessage}
                </div>
              )}
            </form>
          </Form>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
