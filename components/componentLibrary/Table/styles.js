import styled from 'styled-components'
import {borderGrey, paddingMedium, paddingSmall} from "../../constants/styles";

const TableHeaderRow = styled.tr`
border-bottom: 1px solid ${borderGrey}
text-align: center
font-weight: bold
padding-bottom: ${paddingSmall}
`;

const TableHeaderRowContent = styled.td`
padding: ${paddingMedium};
word-wrap: break-word;
`;

const TableRow = styled.tr`
text-align: center

> td:last-child {
border-right: none
}
`;

const TableRowContent = styled.td`
border-right: 1px solid ${borderGrey}
padding: ${paddingMedium};
word-wrap: break-word;
`;

export {
    TableHeaderRow,
    TableHeaderRowContent,
    TableRow,
    TableRowContent
}