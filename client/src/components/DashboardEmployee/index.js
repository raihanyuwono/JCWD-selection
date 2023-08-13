import { Grid } from "@chakra-ui/react";
import AttendanceLive from "./detail/AttendanceLive";
import AttendanceHistory from "./detail/AttendanceHistory";

const container = {
    w: "full",
    minH: "full",
    templateColumns: "repeat(2, 1fr)",
    gap: "12px",
    p: "16px",
};

function DashboardEmployee() {
    return <Grid {...container}>
        <AttendanceLive />
        <AttendanceHistory />
    </Grid>;
}

export default DashboardEmployee;
