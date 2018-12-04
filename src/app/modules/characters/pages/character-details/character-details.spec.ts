import { CharacterDetailsComponent } from "./character-details.component";
import { ActivatedRoute } from "@angular/router";
import { CharacterService } from "src/app/core/services/character.service";
import { SpecieService } from "src/app/core/services/specie.service";
import { LoaderService } from "src/app/core/services/loader.service";
import * as Observable from 'rxjs';
import { Character } from 'src/app/core/models/character';
import { Specie } from 'src/app/core/models/specie';

describe('CharacterDetailsComponent', () => {
    let activatedRoute = new ActivatedRoute();
    let characterService = new CharacterService(null);
    let specieService = new SpecieService(null);
    let loaderService = new LoaderService();
    let characterDetailsComponent: CharacterDetailsComponent;

    beforeAll(() => {
        characterDetailsComponent =
            new CharacterDetailsComponent(
                activatedRoute,
                characterService,
                specieService,
                loaderService
            );
    });

    it('should get character populated with species', () => {
        spyOn(characterService, 'getCharacterById').and.callFake(() => {
            let character = {} as Character;
            character.species = [ 'human' ];
            return Observable.from([ character ]);
        });

        spyOn(specieService, 'getSpecieById').and.callFake(() => {
            let specie = {} as Specie;
            specie.name = 'human';
            specie.hair_colors = 'blue';
            return Observable.from([ specie ]);
        });

        characterDetailsComponent.ngOnInit();

        expect(characterDetailsComponent.character).not.toBeNull();
        expect(characterDetailsComponent.character).not.toBeUndefined();
    });


});