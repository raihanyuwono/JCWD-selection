import { Button } from "@chakra-ui/react";

const loginButton = {
    type: "submit",
    w: "full",
    h: "48px",
    borderRadius: "3rem",
    bgColor: "successPrimary",
    color: "textPrimaryDark",
    _hover: {
        bgColor: "successSecondary",
    },
};

function LoginButton() {
    return <Button {...loginButton}>LOGIN</Button>;
}

export default LoginButton;
