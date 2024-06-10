import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../context/BooksContext";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const BookDetailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  paddingTop: "5rem",
});

const BookImage = styled("img")({
  width: "200px",
  height: "300px",
  objectFit: "cover",
  marginBottom: "20px",
});

const BookDetailText = styled("div")({
  textAlign: "center",
});

export const BookDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { books } = useBooks();
  const book = books.find((book) => book.title === title);

  const theme = useTheme();

  if (!book) return <p>Book not found.</p>;

  return (
    <BookDetailContainer
      style={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <BookImage src={"/" + book.coverPhotoURL} alt={book.title} />
      <BookDetailText>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Reading Level: {book.readingLevel}</p>
      </BookDetailText>
    </BookDetailContainer>
  );
};
