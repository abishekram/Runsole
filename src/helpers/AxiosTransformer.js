export const transformForAxios = (state) => {
    // ,
    //     

    const defaultHeaders = {
        "Accept": "application/json",
        "Content-type": "application/json"
    };
    return {
        method: state.method,
        headers: { ...defaultHeaders, ...inline(state.headers) },
        url: buildUrl(state),
        params: inline(state.params.filter(s => s.type === 'query')),
        data: state.data
    };
}

const inline = (headers) => {
    const object = {};
    for (const header of headers) {
        object[header.key] = header.value;
    }
    return object;
}

const buildUrl = (state) => {

    const pathParam = state.params.filter(s => s.type === 'path')

    let url = state.url;

    for (const param of pathParam) {

        url = url.replace('{' + param.key + '}', param.value)
    }

    return url;

}