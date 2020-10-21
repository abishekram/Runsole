import * as React from 'react';
import { Tabs, Tab, ORIENTATION } from 'baseui/tabs';
import { Block } from 'baseui/block';
import { useMethodSelector } from '../store/method/MethodContext';
import LazyAceEditor from './core/LazyCodeEditor';
import ResponseHeaders from './ResponseHeaders';

const Response = () => {

    const [activeKey, setActiveKey] = React.useState("0");

    const response = useMethodSelector(state => state.response);


    return (<React.Fragment>
        <Block width='100%'>
            <Tabs
                onChange={({ activeKey }) => {
                    setActiveKey(activeKey);
                }}
                orientation={ORIENTATION.horizontal}
                activeKey={activeKey}>

                <Tab title="JSON">

                    <LazyAceEditor
                        mode="json"
                        value={response?.data ? JSON.stringify(response.data, null, 2) : ''}
                        width='100%'
                        theme="github"
                        fontSize='16px'
                        readOnly={true}
                        name="request-body-editor"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2, useWorker: false
                        }}
                    />


                </Tab>
                <Tab title="Headers">
                    <ResponseHeaders headers={response.headers}></ResponseHeaders>
                </Tab>
            </Tabs>
        </Block>
    </React.Fragment>);
};

export default Response;