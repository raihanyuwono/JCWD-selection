import { Button, Flex, Spacer, Text, useToast } from "@chakra-ui/react";
import { FiCalendar, FiPhone, FiUnlock, FiUser } from "react-icons/fi";
import CustomInput from "../../Custom/CustomInput";
import { register } from "../../../api/auth";
import { useState } from "react";

function setAttributes(id, type, placeholder, icon) {
    return { id, type, placeholder, icon };
}

const mainContaier = {
    alignItems: "center",
    justifyContent: "center",
    bgColor: "primaryLight",
    direction: "column",
    w: "512px",
    h: "fit-content",
    minH: "256px",
    p: "16px",
    gap: "8px",
    borderRadius: "8px",
    color: "textPrimaryLight",
    fontFamily: "Fira Code",
};

const username = setAttributes("username", "text", "Username", <FiUser />);
const name = setAttributes("name", "text", "Name", <FiUser />);
const phone = setAttributes("phone", "tel", "Phone", <FiPhone />);
const birthday = setAttributes("birthday", "date", "Birthday", <FiCalendar />);
const password = setAttributes(
    "password",
    "password",
    "Password",
    <FiUnlock />
);
const confirmPassword = setAttributes(
    "confirm-password",
    "password",
    "Confirm Password",
    <FiUnlock />
);

const title = {
    fontSize: "20px",
    fontWeight: "semibold",
};

const button = {
    w: "full",
    borderRadius: "3rem",
    color: "textPrimaryDark",
    bgColor: "successPrimary",
    _hover: {
        bgColor: "successSecondary",
    },
};

function getToken() {
    const url = window.location.href.split("/");
    const token = url.pop();
    return token;
}

function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    async function handleSubmit() {
        const token = getToken();
        const attributes = {
            username: document.getElementById("username").value,
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            birthday: document.getElementById("birthday").value,
            password: document.getElementById("password").value,
        };
        try {
            setIsLoading(true);
            await register(toast, token, attributes);
            setIsLoading(false);
        } finally {
            setTimeout(() => {
                document.location.href = "/";
            }, 5000);
        }
    }

    return (
        <Flex {...mainContaier}>
            <Text {...title}>Register</Text>
            <Spacer />
            <CustomInput {...username} />
            <CustomInput {...name} />
            <CustomInput {...phone} />
            <CustomInput {...birthday} />
            <CustomInput {...password} />
            <CustomInput {...confirmPassword} />
            <Button
                {...button}
                isLoading={isLoading}
                onClick={() => handleSubmit()}
            >
                REGISTER
            </Button>
        </Flex>
    );
}

export default RegisterForm;
