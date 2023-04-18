import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewingUserData: {},
  currentModuleSchema: {},
  currentModuleSchemaLoading: false,
  fieldPluginTable: null,
  fieldPluginTableLoading: true,
  editFormSaved: true,
  lookupFieldAdditionalOptions: {} // { fieldKey: [{Option1}, {Option2},...], ...}
};

/* Store overall app current(In view) data */
const currentDataSlice = createSlice({
  name: 'currentData',
  initialState,
  reducers: {
    setCurrentData(currentData, { payload }) {
      return { ...currentData, ...payload };
    }
  }
});

export const { setCurrentData } = currentDataSlice.actions;

export default currentDataSlice.reducer;
