import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';

const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: './home/home.module#HomeModule' },
//   { path: 'user', loadChildren: './user/user.module#UserModule' },
//   { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
//   { path: 'app-dashboard', loadChildren: './app-dashboard/app-dashboard.module#AppDashboardModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
