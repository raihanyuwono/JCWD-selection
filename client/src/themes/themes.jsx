import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    font: {
        body: "Fira Sans, monospace",
    },
    colors: {
        primary: "#313131",
        secondary: "#942624",
        textPrimary: "#FFFFFF",
        textSecondary: "#DADDE2",
        warning: "#B80707",
        success: "#13840B",
    },
});

export default theme;
