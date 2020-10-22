import * as React from 'react';
import RequestView from "./RequestView";
import {Panel, StatelessAccordion} from "baseui/accordion";
import TryRequest from "../try/TryRequest";


const RequestSection = ({method, resource, type, path}) => {

    const [expanded, setExpanded] = React.useState(['L1']);

    return (
        <div>
            <StatelessAccordion
                expanded={expanded}
                onChange={({key, expanded}) => {
                    setExpanded(expanded);
                }}
            >
                <Panel title="Request" key="L1">
                    <RequestView resource={resource} method={method} type={type}
                                 path={path}/>
                    <TryRequest/>
                </Panel>
            </StatelessAccordion>

        </div>
    );
}

export default RequestSection;
