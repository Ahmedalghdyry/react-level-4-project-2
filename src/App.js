import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";

import MyList from "components/List";
import Posts from "components/Posts";
import RightBar from "components/RightBar";
import AppBarr from "components/appBar";
import Addpost from "components/Addpost";

function App() {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setshowList={setshowList} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyList {...{ setmyMode, theme, showList, setshowList }} />

          <Posts />
          <RightBar theme={theme} />
        </Stack>

        <Addpost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
