import {
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

const menuButton = {
    fontSize: "16px",
};

const menuList = {
    p: 0,
    mr: "-8px",
    border: "none",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "xl",
    fontSize: "16px",
};

const menuItem = {
    bgColor: "secondaryDark",
};

function handleLogout() {
    localStorage.removeItem("token");
    document.location.href = "/";
}

function UserDropdown({ user }) {
    return (
        <Menu>
            <MenuButton {...menuButton}>
                <Text>{"USERNAME"}</Text>
            </MenuButton>
            <MenuList {...menuList}>
                <MenuItem {...menuItem} onClick={handleLogout}>
                    <HStack>
                        <MdLogout />
                        <Spacer />
                        <Text>Logout</Text>
                    </HStack>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default UserDropdown;
