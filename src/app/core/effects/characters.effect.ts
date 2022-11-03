import { loadCharacter, loadCharacterError, loadCharacters, loadCharactersError, loadCharactersSuccess, loadCharacterSuccess } from '@actions/characters.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
import { ToastService } from '@services/toast.service';
import { of } from 'rxjs';
import { catchError, distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class CharactersEffects {
  public loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType<{ type: string, payload: any }>(loadCharacters.type),
    distinctUntilChanged((x, y) => x.payload.page === y.payload.page),
    tap(() => this.loaderService.show()),
    mergeMap((params) => this.charactersService.getCharacters(params.payload).pipe(
      map(characters => ({ type: loadCharactersSuccess.type, payload: characters })),
      catchError(error => {
        console.error(error);
        this.toastService.danger(`Unable to load characters, please try again!`);
        return of({ type: loadCharactersError.type });
      })
    )),
    tap(() => this.loaderService.hide()),
  ));

  public loanCharacter$ = createEffect(() => this.actions$.pipe(
    ofType<{ type: string, payload: any }>(loadCharacter.type),
    distinctUntilChanged((x, y) => x.payload === y.payload),
    tap(() => this.loaderService.show()),
    mergeMap((params) => this.charactersService.getCharacterById(params.payload).pipe(
      map(character => ({ type: loadCharacterSuccess.type, payload: character })),
      catchError(error => {
        console.error(error);
        this.toastService.danger(`Unable to load character details, please try again!`);
        return of({ type: loadCharacterError.type });
      })
    )),
    tap(() => this.loaderService.hide()),
  ));

  constructor(
    private actions$: Actions,
    private charactersService: CharacterService,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}
}