import { ContactForm } from "@/components/ContactForm";
import banner from "../assets/sections/typing.avif";
import { Title } from "@/components/typography/Title";
import Section from "@/components/Section";

const Contact = () => {
  return (
    <div>
      <Title title="let's get in touch" description="Say hello! Use the form or details below for any inquiries or collaborations." background={banner} />
      {/* content */}
      <div className="max-w-6xl mx-auto py-6">
      <Section>
        <ContactForm />
      </Section>
      </div>
    </div>
  );
};

export default Contact;
