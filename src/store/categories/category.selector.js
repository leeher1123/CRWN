import { createSelector } from 'reselect';
import { selectCartReducer } from '../cart/cart.selector';

const selectCategoryReducer = (state) => state.categories;
// categories 의 state 가 다른 경우에만 useSelector 를 재실행

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
// state 가 변하지 않으면 reduce 실행하지 않음 -> 이전 state 값을 그대로 돌려줌

export const selectCategoriesIsLoading = createSelector(
  [selectCartReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
