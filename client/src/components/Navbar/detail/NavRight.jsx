import { Flex } from "@chakra-ui/react";
import UserDropdown from "./UserDropdown";

function NavRight({user}) {
    return <Flex>
        <UserDropdown user={user}/>
    </Flex>
}

export default NavRight;
