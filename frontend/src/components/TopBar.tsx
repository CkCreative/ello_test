import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { BookSearch } from "./BookSearch";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        color="transparent"
        position="fixed"
        style={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Link to={"/"}>
            <img
              src="https://books.ello.com/static/media/logoEllo.2b20bb072a0c339867f3cb02fe3515b6.svg"
              alt=""
            />
          </Link>
          <BookSearch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
