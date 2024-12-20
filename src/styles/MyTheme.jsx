const { teal } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === `light`
      ? {
          // palette values for Light mode
          ahmed: {
            main: `#647488`,
          },
          favColor: {
            main: "rgb(250, 250, 250)",
          },
        }
      : {
          // palette values for dark mode
          ahmed: {
            main: teal,
          },
          favColor: {
            main: null,
          },
        }),
  },
});

export default getDesignTokens;

function rgb(arg0, arg1, arg2) {
  throw new Error("Function not implemented.");
}
