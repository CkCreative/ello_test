import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useBooks } from "../context/BooksContext";
import { useRefresh } from "../context/RefreshContext";
import Box from "@mui/material/Box";
import { addToReadingList } from "../utils/ReadingList";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const BookContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const BookImage = styled("img")({
  width: "40px",
  height: "60px",
  objectFit: "cover",
});

export const BookSearch: React.FC = () => {
  const { books, loading, error } = useBooks();
  const [searchInput, setSearchInput] = useState<string>("");

  const refresh = useRefresh();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books.</p>;

  const handleInputChange = (e: React.SyntheticEvent, value: string) => {
    setSearchInput(value);
  };

  const handleOptionSelect = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value) {
      const book = books.find((book) => book.title === value);
      if (book) {
        addToReadingList(book);
        navigate("/");
        refresh();
      }
    }
  };

  return (
    <Box sx={{ width: 300, margin: "0 auto" }}>
      <Autocomplete
        freeSolo
        options={books.map((book) => book.title)}
        inputValue={searchInput}
        onInputChange={handleInputChange}
        onChange={handleOptionSelect}
        renderOption={(props, option) => {
          const book = books.find((book) => book.title === option);
          return book ? (
            <li {...props}>
              <BookContainer>
                <BookImage src={"/" + book.coverPhotoURL} alt={book.title} />
                <span>
                  {book.title}
                  {" by "} {book.author}
                  <IconButton aria-label="delete" size="small">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </span>
              </BookContainer>
            </li>
          ) : null;
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search Books" variant="outlined" />
        )}
      />
    </Box>
  );
};
