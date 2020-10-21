import { Block } from 'baseui/block';
import { FILL, Tab, Tabs } from 'baseui/tabs-motion';
import * as React from 'react';
import Header from './Headers';
import Parameter from './Parameter';
import RequestEndPoint from './RequestEndPoint';


const Request = () => {

    const [activeTab, setActiveTab] = React.useState("0");

    const LazyRequestBody = React.lazy(() => import('./RequestBody'));

    return (

        <React.Fragment >
           
            <RequestEndPoint></RequestEndPoint>
            <Block marginTop={['1rem']} display='flex'>
                <Tabs
                    activeKey={activeTab}
                    onChange={({ activeKey }) => {
                        setActiveTab(activeKey);
                    }}
                    activateOnFocus
                    fill={FILL.fixed}
                    overrides={{
                        Root: {
                            style: ({ $theme, $orientation, $fill }) => {
                                return {
                                    width: "100%"
                                };
                            }
                        }
                    }}
                >

                    <Tab title="Parameters">
                        <Parameter></Parameter>
                    </Tab>
                    <Tab title="Headers">
                        <Header></Header>
                    </Tab>
                    <Tab title="Request body">Content 3
                    

                    <React.Suspense fallback={<div>Loading...</div>}>
                        <LazyRequestBody/>
                    </React.Suspense>
                    
                    </Tab>
                </Tabs>

            </Block>
        </React.Fragment>
    );
};

export default Request;