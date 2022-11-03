import { createReducer, on } from '@ngrx/store';
import { loadCharactersSuccess, loadCharacterSuccess } from '@actions/characters.action';

const characterInitialState = {};
const charactersInitialState = {
  characters: [],
  charactersCount: 0,
  charactersCurrentPage: 1
};

export const charactersReducer = createReducer(
  charactersInitialState,
  on(loadCharactersSuccess, (state, data) => ({
    ...state,
    characters: data.payload.results,
    charactersCount: data.payload.count,
    charactersCurrentPage: data.payload.page
  }))
);

export const characterReducer = createReducer(
  characterInitialState,
  on(loadCharacterSuccess, (state, data) => ({ ...state, ...data.payload }))
);

