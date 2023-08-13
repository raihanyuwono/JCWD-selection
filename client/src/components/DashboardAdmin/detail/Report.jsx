import { Divider, Flex, GridItem, Text } from "@chakra-ui/react";
import ReportChart from "./ReportChart";
import ReportFilter from "./ReportFilter";
import ReportLogs from "./ReportLogs";

const mainContainer = {
    border: "1px solid",
    borderRadius: "8px",
    fontFamily: "Fira Code",
    minH: "calc(100vh - 56px)",
    p: "12px",
};

const container = {
    alignItems: "center",
    direction: "column",
    gap: "8px",
};

const title = {
    fontSize: "20px",
    fontWeight: "semibold",
};

function Report() {
    return (
        <GridItem {...mainContainer}>
            <Flex {...container}>
                <Text {...title}>Report</Text>
                <Divider />
                <ReportChart />
                <ReportFilter />
                <ReportLogs />
            </Flex>
        </GridItem>
    );
}

export default Report;
