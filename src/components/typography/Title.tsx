interface TitleProps {
  title: string;
  description: string;
  background: string;
  tailwindClasses?: string; // Add this line to accept additional Tailwind CSS classes
}

export function Title({ title, description, background, tailwindClasses = '' }: TitleProps) {
  return (
    <div 
      className={`bg-cover bg-center py-32 grayscale text-white text-center ${tailwindClasses}`} // Add tailwindClasses here
      style={{ backgroundImage: `url(${background})`, backgroundBlendMode: "multiply" }}
    >
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <h3 className="md:text-2xl mt-4 max-w-2xl mx-auto opacity-75 px-4 md:px-0">{description}</h3>
    </div>
  );
}
