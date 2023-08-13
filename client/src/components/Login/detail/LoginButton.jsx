import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../../../api/auth";

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
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    async function handleLogin() {
        const identifier = document.getElementById("identifier").value;
        const password = document.getElementById("password").value;
        setIsLoading(true);
        try {
            const { data } = await login(toast, identifier, password);
            localStorage.setItem("token", data["token"]);
            setTimeout(() => {
                document.location.href = "/";
            }, 1500);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button {...loginButton} isLoading={isLoading} onClick={handleLogin}>
            LOGIN
        </Button>
    );
}

export default LoginButton;
