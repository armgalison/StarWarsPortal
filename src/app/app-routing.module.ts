import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'starships', loadChildren: () => import('./modules/starships/starships.module').then(m => m.StarshipsModule) },
    { path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
