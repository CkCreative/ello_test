import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../components/ListItem";
import { getReadingList } from "../utils/ReadingList";
import { useRefresh } from "../context/RefreshContext";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

type Book = {
  title: string;
  readingLevel: string;
  coverPhotoURL: string;
  author: string;
};

export const HomePage: React.FC = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  const theme = useTheme();

  const refresh = useRefresh();

  useEffect(() => {
    setReadingList(getReadingList());
  }, [refresh]);

  const handleRemove = (title: string) => {
    const updatedList = readingList.filter((book) => book.title !== title);
    localStorage.setItem("readingList", JSON.stringify(updatedList));
    setReadingList(updatedList);
  };

  return (
    <>
      <h2
        style={{
          paddingTop: "5rem",
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Reading List ({readingList.length})
      </h2>
      <Grid container spacing={2}>
        {readingList.map((book) => (
          <Fade in={true} key={book.title}>
            <Grid item xs={12} md={6} lg={4}>
              <Link
                to={`/book/${book.title}`}
                style={{ textDecoration: "none", width: "31%" }}
              >
                <ListItem item={book} onRemove={handleRemove} />
              </Link>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </>
  );
};
