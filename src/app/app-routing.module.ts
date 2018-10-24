import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { StarshipsModule } from './starships/starships.module';
import { CharactersModule } from './characters/characters.module';

const routes: Routes = [
    { path: 'starships', loadChildren: () => StarshipsModule },
    { path: 'characters', loadChildren: () => CharactersModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
