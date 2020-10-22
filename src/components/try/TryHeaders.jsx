import {Block} from 'baseui/block';
import {Button, KIND} from 'baseui/button';
import {SHAPE, SIZE} from 'baseui/button-group';
import Delete from 'baseui/icon/delete';
import Plus from 'baseui/icon/plus';
import {Input} from 'baseui/input';
import * as React from 'react';
import {addHeaders, changeHeader, deleteHeaders} from '../../store/method/methodActions';
import {useMethodDispatch, useMethodSelector} from '../../store/method/MethodContext';

const Header = () => {

    const headers = useMethodSelector(state => state.headers);
    const dispatch = useMethodDispatch();


    return (
        <React.Fragment>
            <Block display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                {JSON.stringify(headers)}

                {headers.map((e, i) => {
                    return (<React.Fragment key={i}>
                        {i}
                        <Block display='flex' marginTop='0.8rem'>
                            <Block display='flex' paddingLeft='0.5rem'>
                                <Input placeholder='Key' value={e.key}
                                       onChange={(e) => dispatch(changeHeader(i, 'key', e.target.value))}></Input>
                            </Block>

                            <Block display='flex' paddingLeft='0.5rem'>
                                <Input placeholder='Value' value={e.value}
                                       onChange={(e) => dispatch(changeHeader(i, 'value', e.target.value))}></Input>
                            </Block>

                            <Block display='flex' paddingLeft='0.5rem' paddingRight='0.5rem'>
                                <Button
                                    onClick={() => dispatch(deleteHeaders(i))}
                                    kind={KIND.tertiary}
                                    size={SIZE.mini}
                                    shape={SHAPE.pill}
                                >
                                    <Delete size={20}/>
                                </Button>
                            </Block>
                        </Block>

                    </React.Fragment>)
                })}


                <Block marginTop='0.8rem'>
                    <Button
                        onClick={() => dispatch(addHeaders)}
                        kind={KIND.primary}
                        size={SIZE.default}
                        shape={SHAPE.default}
                        startEnhancer={() => <Plus size={24}/>}
                    >
                        Add New</Button>
                </Block>
            </Block>
        </React.Fragment>
    );
};

export default Header;
