import { Button, useToast } from "@chakra-ui/react";
import { clockIn, checkClock, clockOut } from "../../../api/attendance";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsClockStart } from "../../../storage/ClockReducer";

const clock = {
    w: "full",
    color: "textPrimaryDark",
};

const clockInStyle = {
    bgColor: "successPrimary",
    _hover: {
        bgColor: "successSecondary",
    },
};

const clockOutStyle = {
    bgColor: "warningPrimary",
    _hover: {
        bgColor: "warningSecondary",
    },
};

function ClockButton() {
    const isClockStart = useSelector((state) => state.clock.isClockStart);
    const dispatch = useDispatch();
    const toast = useToast();

    async function clockCheck() {
        try {
            const { data } = await checkClock(toast);
            dispatch(setIsClockStart({ shift: data["shift"], isStart: true }));
            return localStorage.setItem("timer", data["token"]);
        } catch (error) {
            dispatch(setIsClockStart({ shift: "", isStart: false }));
            return localStorage.removeItem("timer");
        }
    }

    async function handleClockIn() {
        const { data } = await clockIn(toast);
        dispatch(setIsClockStart({ shift: data["shift"], isStart: true }));
        localStorage.setItem("timer", data["token"]);
    }

    async function handleClockOut() {
        await clockOut(toast);
        dispatch(setIsClockStart({ shift: "", isStart: false }));
        localStorage.removeItem("timer");
    }

    useEffect(() => {
        clockCheck();
    }, []);

    if (!isClockStart)
        return (
            <Button {...clock} {...clockInStyle} onClick={handleClockIn}>
                CLOCK IN
            </Button>
        );
    return (
        <Button {...clock} {...clockOutStyle} onClick={handleClockOut}>
            CLOCK OUT
        </Button>
    );
}

export default ClockButton;
