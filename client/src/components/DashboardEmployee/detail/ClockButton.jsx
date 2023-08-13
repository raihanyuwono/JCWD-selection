import { Button } from "@chakra-ui/react";

const clock = {
    w: "full",
    color: "textPrimaryDark",
    bgColor: "successPrimary",
    _hover: {
        bgColor: "successSecondary",
    },
};

function ClockButton() {
    return <Button {...clock}>CLOCK IN</Button>;
}

export default ClockButton;
