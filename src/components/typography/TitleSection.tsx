import pb from "/pb.png";

interface TitleSectionProps {
  title: string;
  tailwindClasses?: string; // Accept additional Tailwind CSS classes
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, tailwindClasses = '' }) => {
  return (
    <div className={`relative flex flex-col items-center mb-8 ${tailwindClasses}`}>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center">
        {title}
      </h2>
        {/* <div className="absolute top-0 left-0 h-full bg-gray-800 rounded-md transition-all duration-500 transform scale-x-0 hover:scale-x-100" /> */}
        <img src={pb} alt="pb" className="mt-4 w-40 mx-auto" />

    </div>
  );
};

export default TitleSection;
