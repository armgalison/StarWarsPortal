import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { StarshipsModule } from './starships/starships.module';
import { CharactersModule } from './characters/characters.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'starships', loadChildren: './starships/starships.module#StarshipsModule' },
    { path: 'characters', loadChildren: './characters/characters.module#CharactersModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
