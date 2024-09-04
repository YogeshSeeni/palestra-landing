// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "./ui/button";

// Icon imports
import { Github, Twitter, Facebook } from "lucide-react";

// Local component imports
import { Section, Container } from "./craft";

// Asset imports
import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Palestra Fitness is your ultimate companion for seamless workout tracking, insightful analysis, and personalized AI coaching.
              </Balancer>
            </p>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="text-muted-foreground text-sm">
            <h4>Privacy Policy</h4>
            <p>
              At Palestra Fitness, we are committed to protecting your privacy. We collect personal information such as your name, email address, and workout data to enhance your experience with our app. Your data is stored securely and is used to provide personalized services, improve app performance, and communicate with you.
            </p>
            <p>
              We do not sell or share your personal information with third parties.
            </p>
            <p>
              We may retain your data as long as your account is active or as necessary to comply with legal obligations. You have the right to access, update, or delete your information at any time. We implement industry-standard security measures to protect your data from unauthorized access.
            </p>
            <p>
              By using our app, you agree to this Privacy Policy. We may update this policy from time to time, and we will notify you of any significant changes.
            </p>
            <p>
              If you have any questions or concerns, please contact us at support@trainpalestra.com.
            </p>
            <p>
              © Palestra Fitness. All rights reserved. 2024-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}