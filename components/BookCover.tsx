import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = 'extraSmall' | 'Small' | 'medium' | 'regular' | 'wide';

const variantStyles : Record<BookCoverVariant, string> = {
  extraSmall: 'book-cover_extra_small',
  Small: 'book-cover_small',
  medium: 'book-cover_medium',
  regular: 'book-cover_regular',
  wide: 'book-cover_wide',
}


interface Props {
  classname?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverUrl?: string;
  coverImage?: string;
}


const BookCover = ({
  classname, 
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/600x400.png"
}: Props) => {
  return (
    <div className={cn(
      'relative transition-all duration-300',
      variantStyles[variant],
      classname
    )}
    >
      <BookCoverSvg coverColor={coverColor} />

      <div className="absolute z-10" style={{ left: '12%', width: '87.5%', height: '88%', }}
      >
        <Image src={coverImage} layout="fill" objectFit="cover" alt="bookCover" className="" />
      </div>
    </div>
  )
}

export default BookCover