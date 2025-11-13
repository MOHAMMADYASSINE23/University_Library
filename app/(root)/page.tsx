import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = async () => {
  const book = sampleBooks[0]; // Use first book for overview
  return (
    <>
      <BookOverview {...book} userId="user123" />

      <BookList title="Popular Books" books={sampleBooks} />
    </>
  );
}

export default Home;