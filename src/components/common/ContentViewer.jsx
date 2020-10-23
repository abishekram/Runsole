import * as React from 'react';
import {Block} from "baseui/block";
import {Button} from "baseui/button";
import CodeHighlighter from "../core/CodeHighlighter";


const ContentViewer = ({contents}) => {

    const contentTypes = Object.keys(contents);
    const [content, setContent] = React.useState(contentTypes[0]);

    return (
        <React.Fragment>
            {contentTypes?.length > 0 ?
                <Block>
                    <Block display={'flex'} flexWrap={true}>
                        {contentTypes.map(s =>
                            <Block paddingRight={'0.6rem'}>
                                <Button onClick={() => setContent(s)}
                                        isSelected={content === s}>{s}</Button>
                            </Block>)}
                    </Block>
                    <Block className={'schema'}>
                        <CodeHighlighter
                            code={JSON.stringify(contents[content].schema, null, 2)}
                            language={'json'}/>
                    </Block>
                </Block> : null}
        </React.Fragment>)
}

export default ContentViewer;
