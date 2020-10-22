import * as React from "react";
import ContentViewer from "../common/ContentViewer";

export const MethodRequestBody = ({requestBody}) => {


    return (
        <React.Fragment>
            {requestBody?.content ? <ContentViewer contents={requestBody?.content}
            /> : null}

        </React.Fragment>)
};
