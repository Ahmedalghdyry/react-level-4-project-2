import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Addpost = () => {
  const theme = useTheme();
  const [IconOpen, setIconOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: "22px", left: "22px" }}
        title="Addpost"
      >
        <Fab
          onClick={() => {
            setIconOpen(true);
          }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{}}
        open={IconOpen}
        onClose={() => {
          setIconOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: {xs: "97%", sm: 399},
            bgcolor: theme.palette.background.default,
            position: "fixed",
            
            top: "50%",
            left: "50%",
            transform: " translate(-50%, -50%)",
            padding: "22px",
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 1 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Creat a post
          </Typography>

          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://images.pexels.com/photos/4513217/pexels-photo-4513217.jpeg"
            />

            <Typography variant="body1">Layla Ahmed</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            variant="standard"
            placeholder="What is in your mind..."
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotions color="primary" />
            <Image  color="secondary"  />
            <VideoCameraBack  color="success"  />
            <PersonAdd  color="error"  />
          </Stack>


          <ButtonGroup sx={{width: "100%"}} variant="contained" aria-label="Basic button group">
      <Button sx={{flexGrow:"1"}}>post</Button>
      <Button>
        <DateRange />
      </Button>
    </ButtonGroup>




        </Box>
      </Modal>
    </>
  );
};

export default Addpost;
