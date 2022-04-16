import { TemplateEntity } from '@eabald/pdf-me-shared'
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import type { RootState } from '../store';

export interface TemplatesState {
  templates: TemplateEntity[];
  templatesError: TemplatesError | null;
}

export interface TemplatesError {
  status: number;
  message: string;
}

const initialState: TemplatesState = {
  templates: [],
  templatesError: null
}

export const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    getTemplatesSuccess: (state, action: PayloadAction<TemplateEntity[]>) => {
      state.templates = action.payload;
      state.templatesError = null;
    },
    getTemplatesError: (state, action: PayloadAction<TemplatesError>) => {
      state.templatesError = action.payload;
    }
  }
})

export const GET_TEMPLATES_START = 'GET_TEMPLATES_START';

export interface GetTemplatesStartAction extends Action {
  type: typeof GET_TEMPLATES_START;
}

export const getTemplatesStart = createAction(GET_TEMPLATES_START);

export const { getTemplatesSuccess, getTemplatesError } = templatesSlice.actions;

export const selectTemplates = (state: RootState) => state.templates.templates;

export default templatesSlice.reducer;
