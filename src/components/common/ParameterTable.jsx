import * as React from "react";
import {TableBuilder, TableBuilderColumn} from "baseui/table-semantic";
import {Label4} from "baseui/typography";
import {Block} from "baseui/block";

const ParameterTable = ({parameters}) => {

    return (<Block>
        <TableBuilder
            data={parameters}
        >
            <TableBuilderColumn id="name" header="Name">
                {row => {
                    return row.name
                }}
            </TableBuilderColumn>
            <TableBuilderColumn
                header="Details"
                id="desc">
                {
                    row => {
                        return (
                            <Block>
                                <Label4 color={'mono500'}>{row.schema.type}</Label4>
                                <Label4>{row.description}</Label4>
                            </Block>)
                    }
                }

            </TableBuilderColumn>
        </TableBuilder>
    </Block>);
}

export default ParameterTable;
