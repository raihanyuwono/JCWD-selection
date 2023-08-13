import { Grid } from "@chakra-ui/react";
import ManageUser from "./detail/ManageUser";
import AddEmployee from "./detail/AddEmployee";
import Report from "./detail/Report";

const container = {
    w: "full",
    minH: "full",
    templateColumns: "repeat(2, 1fr)",
    gap: "12px",
    p: "16px",
};

function DashboardAdmin() {
    return (
        <>
            <Grid {...container}>
                <ManageUser />
                <Report />
            </Grid>
            <AddEmployee />
        </>
    );
}

export default DashboardAdmin;
