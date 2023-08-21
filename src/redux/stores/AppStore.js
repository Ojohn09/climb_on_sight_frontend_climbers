import { configureStore } from '@reduxjs/toolkit';
import authsReducer from '../features/auths/Auths_Slice';

import AuthsAPI from '../services/api/Auths_API';

const appStore = configureStore({
    reducer: {
        authsState: authsReducer,

        
        [AuthsAPI.reducerPath]: AuthsAPI.reducer,
    },
  
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
    }).concat([
        AuthsAPI.middleware,
        // DashboardAPI.middleware,
        // UserManagementAPI.middleware,
        // CaseManagementAPI.middleware,
        // AssetsManagementAPI.middleware,
    ]),
});

export default appStore;