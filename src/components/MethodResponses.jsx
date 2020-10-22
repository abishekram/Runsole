import * as React from "react";
import {Tab, Tabs, ORIENTATION} from "baseui/tabs-motion";
import {Label4} from "baseui/typography";
import ContentViewer from "./common/ContentViewer";
import {Block} from "baseui/block";

const MethodResponses = ({responses}) => {

    const [activeKey, setActiveKey] = React.useState(0);

    const responseCodes = Object.keys(responses);
    return (
        <React.Fragment>
            {
                responseCodes?.length > 0 ?
                    <Tabs
                        activeKey={activeKey}
                        onChange={({activeKey}) => setActiveKey(activeKey)}
                        orientation={ORIENTATION.vertical}
                    >
                        {responseCodes.map(s =>
                            <Tab title={s}>
                                <Block>
                                    <Label4>{responses[s].description}</Label4>

                                    {responses[s]?.content ?
                                        <ContentViewer contents={responses[s]?.content}/> : null}

                                </Block>


                            </Tab>)}
                    </Tabs> : null
            }
        </React.Fragment>
    );
}

export default MethodResponses;
