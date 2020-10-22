import * as React from 'react';
import MethodResponses from "../MethodResponses";


const ResponseView = ({method, resource, type, path}) => {
    return (<React.Fragment>
        {method?.responses ?
            <MethodResponses responses={method.responses}/> : null}
    </React.Fragment>);
}

export default ResponseView;
