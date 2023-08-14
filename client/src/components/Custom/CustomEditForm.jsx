import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Input,
    useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser } from "../../api/user";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInfoTrigger } from "../../storage/InfoReducer";

function setSchema(id, type) {
    const schema = {};
    switch (type) {
        case "email":
            schema[id] = Yup.string()
                .email("Invalid Format")
                .required("required");
            break;
        case "tel":
            schema[id] = Yup.string()
                .matches(/^08(\d{8,11})$/, "Invalid format")
                .required("required");
            break;
        case "password":
            schema[id] = Yup.string()
                .min(8, "must be at least 8 characters")
                .matches(/[A-Z]+/, "at least 1 uppercase")
                .matches(/\d+/, "at least 1 number")
                .matches(/\W+/, "at least 1 special character")
                .required("required");
            break;
        default:
            if (id === "username")
                schema[id] = Yup.string()
                    .min(6, "must be at least 6 characters")
                    .required("required");
            else schema[id] = Yup.string().required("required");
    }
    return schema;
}

function handleOnChange(event, formik) {
    const { target } = event;
    formik.setFieldValue(target["id"], target["value"]);
}

const buttonStyle = {
    type: "submit",
    w: "auto",
    h: "auto",
    py: "4px",
    px: "8px",
    color: "textPrimaryDark",
    bgColor: "successPrimary",
    _hover: {
        bgColor: "successSecondary",
    },
};

const errorStyle = {
    pos: "absolute",
    zIndex: 1,
    top: 1,
    right: "48px",
};

const container = {
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
};

function CustomEditForm({ id_user, id, type, placeholder }) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    async function handleSubmit(values) {
        setIsLoading(true);
        values["id_user"] = id_user;
        await editUser(toast, values);
        setIsLoading(false);
        dispatch(setInfoTrigger());
    }

    const inputStyle = {
        id,
        type,
        placeholder,
        variant: "flushed",
        color: "textPrimaryLight",
    };

    if (type === "date") {
        inputStyle["type"] = "text";
        inputStyle["onFocus"] = () =>
            (document.getElementById(id).type = "date");
        inputStyle["onBlur"] = () =>
            (document.getElementById(id).type = "text");
    }

    const initialValues = {};
    initialValues[id] = "";

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape(setSchema(id, type)),
        onSubmit: (values, action) => handleSubmit(values),
    });

    return (
        <FormControl isInvalid={formik.errors[id]}>
            <form onSubmit={formik.handleSubmit}>
                <Flex {...container}>
                    <Input
                        {...inputStyle}
                        onChange={(e) => handleOnChange(e, formik)}
                    />
                    <Button {...buttonStyle} isLoading={isLoading}>
                        OK
                    </Button>
                </Flex>
                <FormErrorMessage {...errorStyle}>
                    {formik.errors[id]}
                </FormErrorMessage>
            </form>
        </FormControl>
    );
}

export default CustomEditForm;
