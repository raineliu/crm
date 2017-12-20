import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(routes);

// @NgModule({
//     imports:[
//         RouterModule.forRoot(routes,{useHash:true})
//     ],
//     exports:[
//         RouterModule
//     ]
// })
// export class AppRoutingModule{}

