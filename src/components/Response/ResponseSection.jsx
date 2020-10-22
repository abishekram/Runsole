import * as React from 'react';
import ResponseView from "./ResponseView";
import {Accordion, Panel} from "baseui/accordion";
import TryResponse from "../try/TryResponse";

const ResponseSection = ({method, resource, type, path}) => {
    return (<React.Fragment>

        <Accordion
            onChange={({expanded}) => console.log(expanded)}
        >
            <Panel title="Response">
                <ResponseView resource={resource} method={method} type={type}
                              path={path}/>
                <TryResponse/>
            </Panel>
        </Accordion>


    </React.Fragment>);
}

export default ResponseSection;
