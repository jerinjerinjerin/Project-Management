import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initialStateTypes  {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,  // Assuming dark mode is initially off
};

const globelStage = createSlice({
    name: 'globel',
    initialState,
    reducers: {
        setIsSidebarCollapsed:(state, action: PayloadAction<boolean>) =>{
           state.isSidebarCollapsed = action.payload;
           
        },

        setIsDarkMode: (state, action:PayloadAction<boolean>) => {
           state.isDarkMode = action.payload;  // Update dark mode state
        }
    }
})

export const {setIsSidebarCollapsed, setIsDarkMode} = globelStage.actions;
export default globelStage.reducer;