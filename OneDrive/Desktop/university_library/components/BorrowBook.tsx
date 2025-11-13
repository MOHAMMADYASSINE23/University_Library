import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  isLoanedBook?: boolean;
}

const BorrowBook = ({ isLoanedBook = false }: Props) => {
  return (
    <Button className="book-overview_btn flex-row h-8 py-1 px-8 items-center gap-3">
      <div className="flex items-center justify-center gap-3">
        <Image src="/icons/book.svg" alt="book" width={20} height={20} />
        <p className="book-overview_btn-text">
          {isLoanedBook ? "Download receipt" : "Borrow Book"}
        </p>
      </div>
    </Button>
  );
};

export default BorrowBook;