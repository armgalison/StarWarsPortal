import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SpecieService } from 'src/app/core/services/specie.service';

import { CharacterDetailsComponent } from './character-details.component';
import * as Observable from 'rxjs';
import { Character } from 'src/app/core/models/character';
import { HttpClientModule } from '@angular/common/http';

class ActivatedRouteStub {
    snapshot = {
        paramMap: {
            get: (key) => 'mockId'
        }
    }
}

describe('CharacterDetailsComponent', () => {
    let component: CharacterDetailsComponent;
    let fixture: ComponentFixture<CharacterDetailsComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule ],
            declarations: [ CharacterDetailsComponent ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            providers: [ 
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
                LoaderService,
                SpecieService,
                CharacterService
            ]
        });

        fixture = TestBed.createComponent(CharacterDetailsComponent);
        component = fixture.componentInstance;
    });

    it('shuold create the compoent', () => {
        expect(component).toBeTruthy();
    });

    it('should get character populated with species', async () => {
        let characterService = TestBed.get(CharacterService);
        let specieService = TestBed.get(SpecieService);

        spyOn(characterService, 'getCharacterById')
            .and.returnValue(Observable.from([ { species: [ 'human' ] } as Character ]));
        spyOn(specieService, 'getSpecieById')
            .and.returnValue(Observable.from([ { name: 'human' } as Character ]));
        fixture.detectChanges();
            
        await component.getCharacterWithSpecies(component.id);
        expect(component.character).not.toBeNull();
        expect(component.character).not.toBeUndefined();
        expect(component.character.species.length).toBeGreaterThan(0);
    });


});