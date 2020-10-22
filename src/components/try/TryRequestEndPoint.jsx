import { Block } from 'baseui/block';
import { Button, KIND, SHAPE } from 'baseui/button';
import { Input } from 'baseui/input';
import { Select, SIZE, TYPE } from 'baseui/select';
import * as React from 'react';
import { AxiosExecute } from '../../helpers/AxiosExecute';
import { transformForAxios } from '../../helpers/AxiosTransformer';
import { changeMethod, changeUrl, setResponse } from '../../store/method/methodActions';
import { useMethodDispatch, useMethodSelector } from '../../store/method/MethodContext';


const TryRequestEndPoint = () => {

    const url = useMethodSelector(state => state.url);

    const method = useMethodSelector(state => state.method);

    const state = useMethodSelector(state => state);

    const dispatch = useMethodDispatch();

    const executeReq = () => {
        AxiosExecute(transformForAxios(state)).then(res => dispatch(setResponse(res)));
    }

    return (<Block display='flex'>
        <Block width='calc((1/12)*100% )'>
            <Select
                size={SIZE.default}
                clearable={false}
                options={[
                    { label: "GET", id: "GET" },
                    { label: "POST", id: "POST" },
                    { label: "PUT", id: "PUT" },
                    { label: "PATCH", id: "PATCH" },
                    { label: "DELETE", id: "DELETE" },
                    { label: "LIST", id: "LIST" }
                ]}
                value={[{ 'label': method, 'id': method }]}
                type={TYPE.select}
                placeholder={'Select Method'}
                onChange={params => dispatch(changeMethod(params.value[0].id))}
            />
        </Block>

        <Block width='calc((8/12)*100% )' paddingRight='0.8rem'>
            <Input
                value={url}
                onChange={e => dispatch(changeUrl(e.target.value))}
                placeholder="URL"
                clearOnEscape
            />
        </Block>

        <Button
            onClick={() => executeReq()}
            kind={KIND.primary}
            size={SIZE.default}
            shape={SHAPE.default}
        >
            Send
        </Button>
    </Block>);
};

export default TryRequestEndPoint;
