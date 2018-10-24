import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { StarshipsModule } from './starships/starships.module';
import { CharactersModule } from './characters/characters.module';

const routes: Routes = [
    { path: 'starships', loadChildren: './starships/starships.module#StarshipsModule' },
    { path: 'characters', loadChildren: './characters/characters.module#CharactersModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
