import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader/CustomPreloader';
import { AuthGuard } from 'src/app/login/auth.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    loadChildren: () => import('src/app/login/login.module').then(m=>m.LoginModule),
    data: { preload: true }
  },
  {
    path : 'dashboard',
    loadChildren: () => import('src/app/dashboard/dashboard.module').then(m=>m.DashboardModule),
    data: { preload: true },
    canLoad: [ AuthGuard ],
  },
  {
    path : 'precautions',
    loadChildren: () => import('src/app/precautions/precaution.module').then(m=>m.PrecautionModule),
    canLoad: [ AuthGuard ],
  },
  {
    path : 'news',
    loadChildren: () => import('src/app/news/news.module').then(m=>m.NewsModule),
    canLoad: [ AuthGuard ],
  },
  {
    path : '**',
    loadChildren: () => import('src/app/core/shared/pagenotfound/pagenotfound.module').then(m=>m.PagenotfoundModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : AppCustomPreloader})],
  providers: [AppCustomPreloader,AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
