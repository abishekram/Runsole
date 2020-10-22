import * as React from "react";
import {Block} from "baseui/block";
import APIContext from "./APIContext";
import {HeadingLevel} from "baseui/heading";
import RequestSection from "./Request/RequestSection";
import {HeadingXLarge} from "baseui/typography";
import ResponseSection from "./Response/ResponseSection";

const ApiMethod = ({method, resource, type, path}) => {

    return (
        <Block>
            <HeadingLevel>
                <HeadingXLarge>{method.summary}</HeadingXLarge>
                <RequestSection resource={resource} method={method}
                                type={type} path={path}/>

                <ResponseSection resource={resource} method={method} type={type}
                                 path={path}/>
            </HeadingLevel>
        </Block>
    )
        ;
}

const Methods = () => {
    const api = React.useContext(APIContext);
    const paths = Object.keys(api.paths);

    return (
        <React.Fragment>
            {
                paths?.map(s => {
                        return (Object.keys(api.paths[s])?.map(method => {
                            return (<ApiMethod method={api.paths[s][method]}
                                               type={method} path={s}
                                               resource={api.paths[s]}/>)

                        }));

                    }
                )
            }
        </React.Fragment>);
}

export default Methods;
