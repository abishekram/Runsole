import * as React from "react";
import ReactMarkdown from 'react-markdown'
import APIContext from "./APIContext";


const Introduction = () => {
    const api = React.useContext(APIContext);
    console.log(api.info.description);
    return (
        <ReactMarkdown className={'markdown-body'}>{api?.info?.description}</ReactMarkdown>
    );
}

export default Introduction;
