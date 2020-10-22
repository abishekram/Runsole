import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import {useStyletron} from "styletron-react";


const CodeHighlighter = ({code, language}) => {
    const [css] = useStyletron();
    return (
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className + ' ' + css({
                    padding: '1rem', fontSize: '16px',
                    lineHeight: 1.5
                })} style={style}>
        {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                ))}
            </div>
        ))}
              </pre>
            )}
        </Highlight>
    );
}

export default CodeHighlighter;
