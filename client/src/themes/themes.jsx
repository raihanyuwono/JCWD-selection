import { extendTheme } from "@chakra-ui/react";

const themes = extendTheme({
    font: {
        body: "Fira Sans, monospace",
    },
    colors: {
        primaryDark: "#313131",
        primaryLight: "#CECECE",
        secondaryDark: "#4B4B4B",
        secondaryLight: "#B4B4B4",
        secondary: "#942624",
        textPrimaryDark: "#FFFFFF",
        textSecondaryDark: "#DADDE2",
        textPrimaryLight: "#000000",
        textSecondaryLight: "#25221D",
        warning: "#B80707",
        successPrimary: "#13840B",
        successSecondary: "#239618",
    },
});

export default themes;
