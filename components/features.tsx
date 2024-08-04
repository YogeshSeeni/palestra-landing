// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Track Your Progress",
    description:
      "Keep an accurate log of all your workouts. Record each session with ease and detail, and watch your improvement over time.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Analyze Your Workouts",
    description:
      "Get detailed insights and statistics on your workout performance. Use our advanced charts and graphs to see where you're excelling and where you can improve.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Palestra AI",
    description:
      "Chat with our AI-powered personal trainer, which provides customized feedback and guidance based on your workout logs to help you reach your fitness goals faster.",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
            Transform Your Fitness Journey with Palestra
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
            Track, Analyze, and Succeed with Personalized AI Coaching
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
