import { Title } from "@/components/typography/Title";
import banner from "../assets/sections/reading.avif";
import { essays } from "../lib/essays";
import EssayPreview from "@/components/EssayPreview";
import CriticalWritings from "@/components/CriticalWriting";

const criticalWritings = {
  writings: [
    {
      title: "A Language of Absence",
      details: "Reflections on the death of Maurice Blanchot",
      publication: "Nowhere Without No: In Memory of Maurice Blanchot",
      editors: "Kevin Hart",
      publisher: "Vagabond Press",
      location: "Sydney",
      year: "2003",
      pages: "pp. 23-24",
    },
    {
      title: "Blanchot in America",
      details: "On translating Blanchot",
      translatedBy: "Christophe Bident",
      publication: "Maurice Blanchot: Récits Critiques",
      editors: "Christophe Bident and Pierre Vilar",
      publisher: "Farrago",
      location: "Paris",
      year: "2003",
      pages: "pp. 215-217",
    },
  ],
};

const Essays = () => {
  return (
    <div>
      <Title title="Essays" description="Dive into a collection of my thoughtful essays, where I explore various topics with depth and insight." background={banner} />
      <div className="max-w-6xl mx-auto py-6">
        <CriticalWritings  writings={criticalWritings.writings}/>
      </div>
    </div>
  );
};

export default Essays;
