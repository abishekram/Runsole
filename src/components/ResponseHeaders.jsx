import * as React from 'react';
import { Table } from 'baseui/table';
import { Block } from 'baseui/block';

const ResponseHeaders = ({ headers }) => {

    const data = Object.keys(headers)?.map((key, i) => [key, headers[key]])
    return (

        <Block width='60%'>
            <Table
                columns={["Name", "Value"]}
                data={
                    data
                }
            />
        </Block>);
};

export default ResponseHeaders;