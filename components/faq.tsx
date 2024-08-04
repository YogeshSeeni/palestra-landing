// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "How do I track my workouts?",
    answer:
      "To track your workouts, simply log into the Palestra app, navigate to the 'Track' section, and input the details of your session. You can add exercises, sets, reps, and weights.",
    link: "https://palestrafitness.com/track-workouts",
  },
  {
    question: "How does the AI personal trainer work?",
    answer:
      "Our AI personal trainer analyzes your workout logs and provides customized feedback and recommendations to help you improve your fitness routine. Just head to the 'Trainer' section and start chatting!",
  },
  {
    question: "Can I view my progress over time?",
    answer:
      "Yes, you can view detailed charts and graphs of your workout progress over time in the 'Analyze' section of the app. This helps you see trends and improvements in your fitness journey.",
    link: "https://palestrafitness.com/analyze-progress",
  },
  {
    question: "Is my data secure with Palestra?",
    answer:
      "Absolutely! We prioritize your privacy and data security. All your workout logs and personal information are securely stored and protected with advanced encryption technologies.",
    link: "https://palestrafitness.com/data-security",
  },
];

const FAQ = () => {
  return (
    <Section className="bottom-b"> 
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to us at <a href="mailto:support@trainpalestra.com">support@trainpalestra.com</a>
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
