import { Action } from '@ngrx/store';
import { Character } from 'src/app/core/models/character';

export enum CharActionTypes {
  GetCharactersAction = '[GetCharacters] Action',
  GetCharacterDetailAction = '[GetCharacterDetail] Action'
}

export class GetCharacters implements Action {
  public readonly type = CharActionTypes.GetCharactersAction;
  constructor(public payload: { characters: Character[],  page: number }) {}
}

export class GetCharacterDetailAction implements Action {
  public readonly type = CharActionTypes.GetCharacterDetailAction;
  constructor(public payload: { character: Character }) { }
}

export type CharActions = GetCharacters | GetCharacterDetailAction;
