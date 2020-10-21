import * as React from 'react';
import Spinner from 'baseui/icon/spinner'

const AceEditor = React.lazy(() => import('./CodeEditor'));


const LazyAceEditor = (props) => {
    return (<React.Suspense fallback={<Spinner />}>
        <AceEditor {...props}></AceEditor>
    </React.Suspense>)
}
export default LazyAceEditor;