import { Character } from '@models/character';
import { Pagination } from '@models/pagination';
import { createAction, props } from '@ngrx/store';

export const loadCharacters = createAction('[Characters] Load Characters');
export const loadCharactersSuccess = createAction('[Characters] Load Characters Success', props<{ payload: Pagination<Character[]>}>());
export const loadCharactersError = createAction('[Characters] Load Characters Error');

export const loadCharacter = createAction('[Character] Load Character');
export const loadCharacterSuccess = createAction('[Character] Load Character Success', props<{ payload: Pagination<Character>}>());
export const loadCharacterError = createAction('[Character] Load Character Error');
