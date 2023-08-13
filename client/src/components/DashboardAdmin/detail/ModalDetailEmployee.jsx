import {
    Modal,
    ModalOverlay,
    ModalContent,
    Flex,
    Text,
    Grid,
} from "@chakra-ui/react";
import CustomEditData from "../../Custom/CustomEditData";
import { FiCalendar, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { dateFormater, priceFormater } from "../../../helpers/Formater";

const overlay = {
    backdropFilter: "blur(2px)",
};

const content = {
    p: "16px",
    m: "auto",
};

const container = {
    direction: "column",
    alignItems: "center",
    fontFamily: "Fira Code",
    gap: "16px",
};

const infoContainer = {
    templateColumns: "1fr 4fr 1fr",
    templateRows: "repeat(3, 1fr)",
    rowGap: "16px",
    columnGap: "8px",
    w: "full",
};

const title = {
    fontSize: "24px",
    fontWeight: "semibold",
};

const sumbitButton = {
    w: "full",
    bgColor: "successPrimary",
    color: "textPrimaryDark",
    borderRadius: "3rem",
    _hover: {
        bgColor: "successSecondary",
    },
};

function setData(id, value, logo) {
    return { id, value, logo };
}

function ModalDetailEmployee({ user, isOpen, onClose }) {
    const { username, name, email, phone, birthday, salary, created_at } = user;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay {...overlay} />
            <ModalContent {...content}>
                <Flex {...container}>
                    <Text {...title}>Info</Text>
                    <Grid {...infoContainer}>
                        <CustomEditData
                            {...setData("name", name, <FiUser />)}
                        />
                        <CustomEditData
                            {...setData("username", username, <FiUser />)}
                        />
                        <CustomEditData
                            {...setData("email", email, <FiMail />)}
                        />
                        <CustomEditData
                            {...setData("phone", phone, <FiPhone />)}
                        />
                        <CustomEditData
                            {...setData(
                                "birthday",
                                dateFormater(birthday),
                                <FiCalendar />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                "salary",
                                priceFormater(salary["amount"]),
                                <LiaMoneyBillWaveSolid />
                            )}
                        />
                    </Grid>
                </Flex>
            </ModalContent>
        </Modal>
    );
}

export default ModalDetailEmployee;
