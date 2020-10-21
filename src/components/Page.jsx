import { BaseProvider, LightTheme, styled } from 'baseui';
import { Accordion, Panel, StatefulPanel, StatelessAccordion } from 'baseui/accordion';
import { Block } from 'baseui/block';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { MethodContext } from '../store/method/MethodContext';
import MethodReducer from '../store/method/methodReducer';
import Request from './Request';
import Response from './Response';


const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});


export default function Page() {


  const store = createStore(MethodReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const [expanded, setExpanded] = React.useState(['L1']);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Block width='100%'>
            <Provider context={MethodContext} store={store}>
              <StatelessAccordion
                expanded={expanded}
                onChange={({ key, expanded }) => {
                  setExpanded(expanded);
                }}
              >
                <Panel title="Request" key="L1" >
                  {/* <StatefulPanel expanded={true} title="Request"> */}
                  <Request></Request>
                  {/* </StatefulPanel> */}
                </Panel>
              </StatelessAccordion>

              <Accordion
                onChange={({ expanded }) => console.log(expanded)}
              >
                <Panel title="Response"> Response section
              <Response></Response>
                </Panel>
              </Accordion>
            </Provider>
          </Block>


        </Centered>
      </BaseProvider>
    </StyletronProvider >
  );
}