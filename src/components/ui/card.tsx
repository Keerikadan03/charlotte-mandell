import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Book {
  author: string;
  title: string;
  publisher: string | string[];
  status?: string;
  releaseDate?: string;
  cover: string;  // This is where the cover URL will be used
  link: string;
  coTranslator?: string | string[];
}

interface CardsProps {
  book: Book;
}

export function Cards({ book }: CardsProps) {
  return (
    <>
      <div className="w-64 py-5 mx-auto flex items-center justify-center">
        <div className="block" rel="noopener noreferrer">
          <img
            alt={`Book Cover of ${book.title}`}
            className="mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg object-cover shadow-lg"
            src={book.cover}  // Dynamically using the cover URL
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";  // Fallback to placeholder on error
            }}
          />
          <Drawer>
            <DrawerTrigger asChild>
              <div
                className="mt-4 text-center text-xl text-gray-500 hover:text-gray-800  transition-colors duration-1000 cursor-pointer min-h-16"
                title={book.title}
              >
                {book.title.length > 25
                  ? `${book.title.substring(0, 22)}...`
                  : book.title}
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-2xl py-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    alt={`Book Cover of ${book.title}`}
                    className="mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg object-cover shadow-lg"
                    src={book.cover}  // Use cover URL in drawer too
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";  // Fallback to placeholder on error
                    }}
                  />
                  <DrawerHeader>
                    <DrawerDescription>
                      <Badge variant="secondary">{book.status}</Badge>
                      <div>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                          {book?.title}
                        </h1>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          <strong>Written by: </strong>
                          {book?.author}
                        </p>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          <strong>Published by: </strong>
                          {book?.publisher}
                        </p>
                      </div>
                      <a
                        href={`${book?.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex my-6 items-center gap-2 text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50"
                      >
                        {/* <Button variant="outline">View on Amazon</Button> */}
                      </a>
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
}
