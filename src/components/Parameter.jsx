import { Block } from 'baseui/block';
import { Button, KIND } from 'baseui/button';
import { ButtonGroup, MODE, SHAPE, SIZE } from 'baseui/button-group';
import Delete from 'baseui/icon/delete';
import Plus from 'baseui/icon/plus';
import { Input } from 'baseui/input';
import * as React from 'react';
import { addParams, changeParam, deleteParams } from '../store/method/methodActions';
import { useMethodDispatch, useMethodSelector } from '../store/method/MethodContext';

const Parameter = () => {

    const params = useMethodSelector(state => state.params);
    const dispatch = useMethodDispatch();


    return (
        <React.Fragment>
            <Block display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                {params?.map((e, i) => {
                    return (<React.Fragment key={i}>
                        <Block display='flex' marginTop='0.8rem'>
                            <Block display='flex' paddingLeft='0.5rem'>
                                <Input placeholder='Key' value={e.key}
                                    onChange={(e) => dispatch(changeParam(i, 'key', e.target.value))}></Input>
                            </Block>

                            <Block display='flex' paddingLeft='0.5rem'>
                                <Input placeholder='Value' value={e.value}
                                    onChange={(e) => dispatch(changeParam(i, 'value', e.target.value))}  ></Input>
                            </Block>

                            <Block display='flex' paddingLeft='0.5rem' paddingRight='0.5rem'>
                                <ButtonGroup
                                    size={SIZE.default}
                                    mode={MODE.radio}
                                    shape={SHAPE.default}
                                    selected={e.type === 'query' ? 0 : 1}
                                    onClick={(event, buttonIndex) => {
                                        dispatch(changeParam(i, 'type', buttonIndex == 0 ? 'query' : 'path'));
                                    }}
                                >
                                    <Button>Query</Button>
                                    <Button>Path</Button>
                                </ButtonGroup>
                            </Block>

                            <Button
                                onClick={() => dispatch(deleteParams(i))}
                                kind={KIND.tertiary}
                                size={SIZE.mini}
                                shape={SHAPE.pill}
                            >
                                <Delete size={20} />
                            </Button>
                        </Block>

                    </React.Fragment>)
                })}


                <Block marginTop='0.8rem'>
                    <Button
                        onClick={() => dispatch(addParams)}
                        kind={KIND.primary}
                        size={SIZE.default}
                        shape={SHAPE.default}
                        startEnhancer={() => <Plus size={24} />}>
                        Add New</Button>
                </Block>
            </Block>
        </React.Fragment>
    );
};

export default Parameter;