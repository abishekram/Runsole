import * as React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const CodeEditor = (props) => {
    return (<AceEditor
        {...props}> </AceEditor>);
};


export default CodeEditor;
