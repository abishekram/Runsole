import {BaseProvider, LightTheme} from 'baseui';
import {Block} from 'baseui/block';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {MethodContext} from '../store/method/MethodContext';
import MethodReducer from '../store/method/methodReducer';
import SideNavigation from "./SideNavigation";
import APIContext from "./APIContext";

import zuara from '../data/petstore.json';
import Introduction from "./Introduction";
import Methods from "./Method";

const engine = new Styletron();

export default function Page() {


    const store = createStore(MethodReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <APIContext.Provider value={zuara}>
                    <Block display={'flex'} width={'100%'}>
                        <SideNavigation/>
                        <Block paddingLeft={'1rem'} paddingRight={'1rem'}>
                            <Introduction/>
                            <Provider context={MethodContext} store={store}>
                                <Methods/>
                            </Provider>
                        </Block>
                    </Block>
                </APIContext.Provider>
            </BaseProvider>
        </StyletronProvider>
    );
}
