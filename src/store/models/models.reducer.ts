import { Action } from '@ngrx/store';

import { ModelsActions } from './models.actions';
import { Models } from '../../models/models';

const initialState = {
  results: {},
  filtered: [],
  showAddNew: false,
  showLoadingSpinner: false
};

export function modelsReducer(models: Models = initialState, action: Action): Models {
  switch (action.type) {
    case ModelsActions.FETCH:
      return { ...models, showLoadingSpinner: true };
    case ModelsActions.FETCH_SUCCESS:
      return {
        ...models,
        results: Object.assign({},
          action.payload.results.reduce((obj, model) => {
            obj[model.modelID] = model;
            return obj;
          }, {})
        ),
        filtered: action.payload.results,
        showAddNew: false,
        showLoadingSpinner: false
      };
    case ModelsActions.CREATE_SUCCESS:
    case ModelsActions.UPDATE_SUCCESS:
      return {
        ...models,
        results: {
          ...models.results,
          [action.payload.modelID]: action.payload
        }
      };
    case ModelsActions.DELETE_SUCCESS:
      const results = Object.assign({}, models.results);
      delete results[action.payload.id];
      return {
        ...models,
        results
      };
    case ModelsActions.FILTER:
      return Object.assign({}, models, {
        filtered: Object.keys(models.results)
          .map((key) => models.results[key])
          .filter(model => model.name.toLowerCase().indexOf(action.payload.text.toLowerCase()) > -1 &&
            model.brandID === action.payload.brandID)
      });
    default:
      return models;
  }
}
