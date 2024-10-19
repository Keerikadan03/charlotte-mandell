import { Title } from "@/components/typography/Title";
import banner from "../assets/sections/bird.avif";
import TitleSection from "@/components/typography/TitleSection";
import Collection from "@/components/Collection";
import Translations from "@/components/Translations";
import Section from "@/components/Section";
import AwardsAndHonors from "@/components/Awards";


const awardsAndHonors = {
  items: [
    {
      year: "2024",
      awardName: "Thornton Wilder Translation Prize",
      awardedBy: "American Academy of Arts and Letters",
      description:
        "Received this prestigious prize for outstanding achievements in translation.",
    },
    {
      year: "2021",
      awardName: "Chevalier dans l’Ordre des Arts et des Lettres",
      awardedBy: "French government",
      description:
        "Honored with this title for significant contributions to the arts and letters.",
    },
    {
      year: "2017-2019",
      awardName: "Various Awards for 'Compass'",
      awardedBy: "Multiple organizations",
      description:
        "Shortlisted for the Man Booker International Prize 2017, the 2019 International Dublin Literary Award; recipient of the 2018 ALTA National Translation Award in Prose.",
    },
    {
      year: "2017",
      awardName: "PEN/Jacqueline Bograd Weld Award for Biography",
      awardedBy: "PEN America",
      description:
        "Jean Cocteau was longlisted for this award and also received the French-American Foundation Translation Prize.",
    },
    {
      year: "2015",
      awardName: "English PEN Translation Grant",
      awardedBy: "English PEN",
      description:
        "Syrian Notebooks was awarded this grant to support its translation and publication.",
      extra:
        "Also received the Charles Flint Kellogg Award in Arts and Letters from Bard College in May 2015.",
    },
    {
      year: "2013",
      awardName:
        "French Voices Award for Excellence in Translation and Publication",
      awardedBy: "Cultural Services of the French Embassy",
      description:
        "The Fata Morgana Books received this award for excellence in translation and publication.",
      extra:
        "Served as a panelist for the 2013 NEA Literature Fellowships for Translation Projects, May 2012.",
    },
    {
      year: "2010",
      awardName: "National Endowment for the Arts Literature Fellowship",
      awardedBy: "National Endowment for the Arts",
      description:
        "Zone was recognized with this fellowship for literary merit and promise.",
      extra:
        "Served as a panelist for the 2011 NEA Literature Fellowships for Translation Projects, May 2010.",
    },
    {
      year: "2001-2002",
      awardName:
        "Aldo and Jeanne Scaglione Prize for a Translation of a Scholarly Study of Literature",
      awardedBy: "Modern Language Association",
      description:
        "Faux Pas was honored with this prize, recognizing its contribution to literary translation.",
    },
    {
      year: "2004",
      awardName: "PEN Book-of-the-Month Club Translation Prize",
      awardedBy: "PEN America",
      description:
        "Served as a judge for this prize, evaluating works of translation alongside Burton Pike and Peter Theroux.",
    },
  ],
};

const Work = () => {
  return (
    <div>
      <Title
        title="Bibliography"
        description="Catalogs of my published works—books, articles, translations and..."
        background={banner}
      />

      {/* content */}
      <div className="max-w-6xl mx-auto px-4 md:px-0  py-8">

        {/* published books */}
        <Section>
          <TitleSection title="Published Books" />
          <Collection />
        </Section>

        {/* published books */}
        <Section>
          <TitleSection title="Translations appearing in periodicals and collections" />
          <Translations />
        </Section>

        {/* awards & honors */}
        <Section>
        <TitleSection title="Awards & Honors" />
        <AwardsAndHonors awards={awardsAndHonors.items}/>
        </Section>
      </div>
    </div>
  );
};

export default Work;
