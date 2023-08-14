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


function setData(id_user, id, type, value, placeholder, logo) {
    return {id_user, id, type, value, placeholder, logo };
}

function ModalDetailEmployee({ user, isOpen, onClose }) {
    const { id, username, name, email, phone, birthday, salary } = user;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay {...overlay} />
            <ModalContent {...content}>
                <Flex {...container}>
                    <Text {...title}>Info</Text>
                    <Grid {...infoContainer}>
                        <CustomEditData
                            {...setData(
                                id,
                                "name",
                                "text",
                                name,
                                "Name",
                                <FiUser />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                id,
                                "username",
                                "text",
                                username,
                                "Username",
                                <FiUser />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                id,
                                "email",
                                "email",
                                email,
                                "Email",
                                <FiMail />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                id,
                                "phone",
                                "tel",
                                phone,
                                "Phone",
                                <FiPhone />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                id,
                                "birthday",
                                "date",
                                dateFormater(birthday),
                                "Birthday",
                                <FiCalendar />
                            )}
                        />
                        <CustomEditData
                            {...setData(
                                id,
                                "amount",
                                "number",
                                priceFormater(salary["amount"]),
                                "Salary",
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
