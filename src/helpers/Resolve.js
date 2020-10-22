export const resolveRef = (refData, api) => {
    const refArray = refData.split('/');
    let selectedObject = api
    for (let i = 1; i < refArray.length; i++) {
        selectedObject = selectedObject[refArray[i]];
    }
    return selectedObject;
}

export const resolveAnyRef = (ref, api) => {
    if (ref?.$ref) {
        return resolveRef(ref.$ref, api);
    }
    return ref;
}
