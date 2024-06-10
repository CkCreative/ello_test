import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";

type Book = {
  title: string;
  readingLevel: string;
  coverPhotoURL: string;
  author: string;
};

interface BooksContextProps {
  books: Book[];
  loading: boolean;
  error: boolean;
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  return (
    <BooksContext.Provider value={{ books, loading, error }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextProps => {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
