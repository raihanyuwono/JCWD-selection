import { Flex } from "@chakra-ui/react";
import UserDropdown from "./UserDropdown";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getUser } from "../../../api/user";

function NavRight() {
    const [user, setUser] = useState("");

    async function fetchUser() {
        const token = localStorage.getItem("token");
        const { id } = jwt_decode(token);
        const { data } = await getUser(id);
        setUser(data);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <Flex>
            <UserDropdown user={user} />
        </Flex>
    );
}

export default NavRight;
