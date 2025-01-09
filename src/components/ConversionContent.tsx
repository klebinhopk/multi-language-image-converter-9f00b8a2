import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { conversionContents } from "@/content/conversion-content";

interface ConversionContentProps {
  input: string;
  output: string;
  lang: string;
}

export function ConversionContent({ input, output, lang }: ConversionContentProps) {
  const contentKey = `${input}_${output}`;
  const content = conversionContents[contentKey]?.[lang];

  if (!content) {
    return null;
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fade-up">
      <Card>
        <CardHeader>
          <CardTitle>{content.title}</CardTitle>
          <CardDescription>{content.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-4">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            {content.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>Frequently asked questions about {content.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {content.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}