import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromReadingList } from "../utils/ReadingList";

type Book = {
  title: string;
  readingLevel: string;
  coverPhotoURL: string;
  author: string;
};

interface ListItemProps {
  item: Book;
  onRemove: (title: string) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ item, onRemove }) => {
  const theme = useTheme();
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    removeFromReadingList(item.title);
    onRemove(item.title);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.coverPhotoURL}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: theme.palette.primary.steelBlue }}
          >
            Author: {item.author}
          </Typography>
          <IconButton
            onClick={handleRemoveClick}
            style={{ color: theme.palette.secondary.orangeRed }}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
