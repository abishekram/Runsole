import { Block } from 'baseui/block';
import * as React from 'react';
import { changeBody } from '../../store/method/methodActions';
import { useMethodDispatch, useMethodSelector } from '../../store/method/MethodContext';
import LazyAceEditor from '../core/LazyCodeEditor';


const TryRequestBody = () => {

    const body = useMethodSelector(state => state.body);

    const dispatch = useMethodDispatch();

    return (
        <React.Fragment>


            <Block display='flex' width='75%' alignItems='center' justifyContent='center'>

                <LazyAceEditor
                    mode="json"
                    value={body}
                    width='100%'
                    theme="github"
                    fontSize='16px'
                    focus={true}
                    onChange={(value) => dispatch(changeBody(value))}
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
            </Block>
        </React.Fragment>);
};

export default TryRequestBody;
