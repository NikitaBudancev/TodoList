import { SELECT_FILTER } from '../actions/filterAction';

type FiltersType = {
  id: number;
  name: string;
  isActive: boolean;
};

type InitialStateType = {
  filters: Array<FiltersType>;
  active: number;
};

const initialState: InitialStateType = {
  filters: [
    { id: 0, name: 'Показать все', isActive: true },
    { id: 1, name: 'Приоритет 1', isActive: false },
    { id: 2, name: 'Приоритет 2', isActive: false },
    { id: 3, name: 'Приоритет 3', isActive: false },
    { id: 4, name: 'Приоритет 4', isActive: false },
  ],
  active: 0,
};

const filterReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SELECT_FILTER:
      return { ...state };

    default:
      return state;
  }
};

export default filterReducer;
