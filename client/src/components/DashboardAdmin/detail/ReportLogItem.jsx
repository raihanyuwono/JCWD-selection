import { Td, Tr } from "@chakra-ui/react";
import { priceFormater } from "../../../helpers/Formater";

const td = {
    color: "textPrimaryDark",
    textAlign: "center",
};

function ReportLogItem({ log }) {
    return (
        <Tr>
            <Td {...td}>{log["user"]["username"]}</Td>
            <Td {...td}>{log["date"]}</Td>
            <Td {...td}>{priceFormater(log["total_salary"])}</Td>
        </Tr>
    );
}

export default ReportLogItem;
