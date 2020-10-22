import * as React from 'react';
import ReactMarkdown from "react-markdown";
import {Block} from "baseui/block";
import MethodParameters from "./MethodParameter";
import {MethodRequestBody} from "./MethodRequestBody";
import {resolveAnyRef} from "../../helpers/Resolve";
import {HeadingLevel} from "baseui/heading";
import APIContext from "../APIContext";

const RequestView = ({method, resource, type, path}) => {

    const API = React.useContext(APIContext);

    return (<HeadingLevel>

        <ReactMarkdown className={'markdown-body'}>{method?.description}
        </ReactMarkdown>

        {/*<Block display={'flex'} marginTop={'1rem'} marginBottom={'1rem'}>*/}
        {/*    <Label1 paddingRight={'0.3rem'}>{type?.toUpperCase()}</Label1>*/}
        {/*    <Label1>{path}</Label1>*/}
        {/*</Block>*/}

        <Block display={'flex'}>
            <Block width={'40%'} paddingRight={'1rem'}>
                <MethodParameters parameters={method.parameters}/>
            </Block>

            <Block dispaly={'flex'} width={'60%'} justifyContent={'center'}>
                <MethodRequestBody requestBody={resolveAnyRef(method.requestBody, API)}/>
            </Block>
        </Block>
    </HeadingLevel>);
}

export default RequestView;
