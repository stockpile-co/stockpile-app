import { Action } from '@ngrx/store';

import { CategoriesActions } from './categories.actions';
import { Categories } from '../../models/categories';

const initialState = {
  results: {},
  filtered: [],
  showAddNew: false,
  showLoadingSpinner: false
};

export function categoriesReducer(categories: Categories = initialState, action: Action): Categories {
  switch (action.type) {
    case CategoriesActions.FETCH:
      return { ...categories, showLoadingSpinner: true };
    case CategoriesActions.FETCH_SUCCESS:
      return {
        ...categories,
        results: Object.assign({},
          action.payload.results.reduce((obj, category) => {
            obj[category.categoryID] = category;
            return obj;
          }, {})
        ),
        filtered: action.payload.results,
        showAddNew: false,
        showLoadingSpinner: false
      };
    case CategoriesActions.FETCH_FAIL:
      return { ...categories, showLoadingSpinner: false };
    case CategoriesActions.FILTER:
      return Object.assign({}, categories, {
        filtered: Object.keys(categories.results)
          .map((key) => categories.results[key])
          .filter(category => category.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)
      });
    default:
      return categories;
  }
}
