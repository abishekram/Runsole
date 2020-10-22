import {Block} from 'baseui/block';
import {FILL, Tab, Tabs} from 'baseui/tabs-motion';
import * as React from 'react';
import Header from './TryHeaders';
import TryParameter from './TryParameter';
import TryRequestEndPoint from './TryRequestEndPoint';


const TryRequest = () => {

    const [activeTab, setActiveTab] = React.useState("0");

    const LazyRequestBody = React.lazy(() => import('./TryRequestBody'));

    return (

        <React.Fragment>

            <TryRequestEndPoint/>
            <Block marginTop={['1rem']} display='flex'>
                <Tabs
                    activeKey={activeTab}
                    onChange={({activeKey}) => {
                        setActiveTab(activeKey);
                    }}
                    activateOnFocus
                    fill={FILL.fixed}
                    overrides={{
                        Root: {
                            style: ({$theme, $orientation, $fill}) => {
                                return {
                                    width: "100%"
                                };
                            }
                        }
                    }}
                >

                    <Tab title="Parameters">
                        <TryParameter></TryParameter>
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

export default TryRequest;
