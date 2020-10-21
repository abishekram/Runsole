import * as React from 'react';

import {
    createDispatchHook,
    createSelectorHook, createStoreHook
} from 'react-redux';

export const MethodContext = React.createContext(null)

export const useMethodStore = createStoreHook(MethodContext)
export const useMethodDispatch = createDispatchHook(MethodContext)
export const useMethodSelector = createSelectorHook(MethodContext)