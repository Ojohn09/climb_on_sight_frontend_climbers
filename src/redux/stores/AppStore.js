import { configureStore } from '@reduxjs/toolkit';

// Import Reducers.
import authsReducer from '../features/auths/Auths_Slice';
import eventsReducer from '../features/events/Events_Slice';
import guidesReducer from '../features/guides/Guides_Slice';

import AuthsAPI from '../services/api/Auths_API';

const appStore = configureStore({
    reducer: {
        authsState: authsReducer,
        eventsState: eventsReducer,
        guidesState: guidesReducer,

        
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