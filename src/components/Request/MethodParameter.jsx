import * as React from "react";
import {Block} from "baseui/block";
import ParameterTable from "../common/ParameterTable";
import {Label4} from "baseui/typography";

const MethodParameters = ({parameters}) => {

    const queryParam = parameters?.filter(s => s.in === 'query');
    const pathParam = parameters?.filter(s => s.in === 'path');
    const headers = parameters?.filter(s => s.in === 'header');

    return (
        <Block display={'flex'} marginTop={'1rem'} flexWrap={true}>

            {queryParam?.length > 0 ? <Block width={'100%'}>
                <Label4 paddingBottom={'0.5rem'}> Query parameters</Label4>
                <ParameterTable parameters={queryParam}/>
            </Block> : null}


            {pathParam?.length > 0 ? <Block width={'100%'}>
                <Label4 paddingBottom={'0.5rem'}> Path parameters</Label4>
                <ParameterTable parameters={pathParam}/>
            </Block> : null}


            {headers?.length > 0 ? <Block width={'100%'}>
                <Label4 paddingBottom={'0.5rem'}> Headers</Label4>
                <ParameterTable parameters={headers}/>
            </Block> : null}


        </Block>
    );
};

export default MethodParameters;
