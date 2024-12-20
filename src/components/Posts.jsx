import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const Posts = () => {
  const myCards = [
    {
      latter: "A",
      color: "#800080",
      userName: "Ahmed lbrahim",
      imgLink:
        "https://images.pexels.com/photos/28759041/pexels-photo-28759041/free-photo-of-dramatic-seascape-with-moody-clouds-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      latter: "N",
      color: "#008080",
      userName: "Alaa lbrahim",
      imgLink:
        "https://images.pexels.com/photos/29008234/pexels-photo-29008234/free-photo-of-tranquil-sailboat-on-misty-lake-constance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      latter: "M",
      color: "#053ea8",
      userName: "Walaa lbrahim",
      imgLink:
        "https://images.pexels.com/photos/29717061/pexels-photo-29717061/free-photo-of-four-ducks-swimming-in-clear-istanbul-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      latter: "R",
      color: "#FF0000",
      userName: "Amr lbrahim",
      imgLink:
        "https://images.pexels.com/photos/4673849/pexels-photo-4673849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  const theme = useTheme()

  return (
    <Box 
    component="main"
     sx={{ flexGrow: "3" }} className="border myColor">
      {myCards.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ maxWidth: {xs: "97%", xm: 444}, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ color: theme.palette.getContrastText(item.color)  ,bgcolor: item.color }} aria-label="recipe">
                  {item.latter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="December 18, 2024"
            />

            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />

            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box flexGrow={1} />
              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}

      {renderMenu}
    </Box>
  );
};

export default Posts;
