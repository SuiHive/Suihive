import { extendTheme } from "@chakra-ui/react";
import "@fontsource/zen-dots";
import "@fontsource/cantarell";

const theme = extendTheme({
  fonts: {
    // heading: `'Zen Dots','Cantarell'`,
    // body: `'Zen Dots','Cantarell'`,
  },
  colors: {
    "Prussian-Blue": "",
    "Rich-Black": "",
    "Dark-Jungle-Green": "#181E25",
    "Brilliant-Azure": "#3D8DFF",
    blue: {
      100: "#0A94F1",
      900: "#0A94F1",
    },
  },
});

export default theme;
