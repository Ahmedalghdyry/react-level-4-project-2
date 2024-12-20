import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
];

const showLg = { xs: "none", lg: "block" };

const RightBar = ({ theme }) => {
  return (
    <Box
      sx={{
         minWidth:"512px",
        display: showLg,
        flexGrow: "auto",
        backgroundColor: theme.palette.favColor.main,
        pl: 2,
      }}
      component="section"
    >
    <Box sx={{position: "fixed"}}>
        <Typography sx={{ fontWeight: 100 }} mt={2} variant="h6">
          Online Frinds
          {/* textAlign={"center"} */}
          <AvatarGroup sx={{ justifyContent: "center", my: 1 }} total={24}>
            <Avatar
              sx={{ width: 49, height: 45 }}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg"
            />
            <Avatar
              sx={{ width: 49, height: 45 }}
              alt="Travis Howard"
              src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg"
            />
            <Avatar
              sx={{ width: 49, height: 45 }}
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg"
            />
            <Avatar
              sx={{ width: 49, height: 45 }}
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1006363/pexels-photo-1006363.jpeg"
            />
          </AvatarGroup>
        </Typography>
      
        <Typography sx={{ fontWeight: 100 }} mt={2} variant="h6">
          Latest Photo
        </Typography>
      
        <ImageList
          gap={10}
          sx={{ width: 500, height: 160, overflowY: "hidden" }}
          cols={3}
          rowHeight={99}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ borderRadius: "5px" }}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      
        <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6">
          Latest Conversation
        </Typography>
      
        <List sx={{ width: "100%", maxWidth: 488, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/595747/pexels-photo-595747.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/573298/pexels-photo-573298.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
    </Box>
      
    </Box>
  );
};

export default RightBar;
