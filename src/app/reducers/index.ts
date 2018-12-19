import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Character } from '../core/models/character';
import { CharActionTypes } from '../modules/characters/char.actions';

type CharactersState = { page: number, characters: Character[] };
const initialCharactersState = { page: 0, characters: [] }

export interface AppState {
  characters: CharactersState
}

function charactersReducer(state: CharactersState = initialCharactersState, action: any): CharactersState {
  switch (action.type) {

    case CharActionTypes.GetCharactersAction:
      return {
        page: action.payload.page,
        characters: action.payload.characters
      }

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  characters: charactersReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
