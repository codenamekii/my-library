import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BookCover from "./BookCover";
import { Button } from "./ui/button";

interface Book {

  id: string;

  title: string;

  genre: string;

  color: string;

  cover: string;

  isLoanedBook?: boolean;

}// Pastikan ini sesuai dengan proyekmu

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: Book) => (
  <li className={cn(isLoanedBook ? 'xs:w-52 w-full' : 'w-52')}>
    <Link href={`/books/${id}`} className={ cn('block', isLoanedBook ? 'w-full flex flex-col items-center' : 'w-52') }>
      <BookCover coverColor={color} coverImage={cover} />
      <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image src="/icons/calendar.svg" alt="Loaned" width={18} height={18} className="object-contain"/>
            <p className="text-light-100">11 days left to return</p>
          </div>
          <Button className="book-btn">
            Download Receipt
          </Button>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
