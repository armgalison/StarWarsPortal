import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './modules/home/home.module#HomeModule' },
    { path: 'starships', loadChildren: './modules/starships/starships.module#StarshipsModule' },
    { path: 'characters', loadChildren: './modules/characters/characters.module#CharactersModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
