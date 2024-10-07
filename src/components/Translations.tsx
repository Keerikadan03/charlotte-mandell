import { publications } from "@/lib/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { User, BookOpen, Calendar, FileText } from "lucide-react"; // Importing icons

const Translations = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <Carousel className="w-full">
        <CarouselContent>
          {publications.translations.map((translation, index: number) => (
            <CarouselItem
              className="md:basis-1/3 lg:basis-1/5"
              key={translation.title || index}
            >
              <div className="bg-white rounded-lg shadow my-5 w-64 p-5  mx-auto flex items-center justify-center">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium min-h-20" title={translation.title}>
                      {translation.title.length > 25
                        ? `${translation.title.substring(0, 35)}...`
                        : translation.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Author:</strong> {translation.author}
                      </p>
                    </div>  
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-gray-500" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Publisher:</strong> Acme Publishing
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Publication Date:</strong> May 2023
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Pages:</strong> 250
                      </p>
                    </div>
                  </div>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 w-full mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default Translations;
