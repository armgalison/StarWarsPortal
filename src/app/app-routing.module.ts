import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'starships', loadChildren: () => import('./modules/starships/starships.module').then(m => m.StarshipsModule) },
    { path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
