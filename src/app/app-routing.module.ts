import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthLayoutComponent } from "./shared/layouts/auth-layout/auth-layout.component";
import { SiteLayoutComponent } from "./shared/layouts/site-layout/site-layout.component";

const routes: Routes = [
    {
        path: '', component: SiteLayoutComponent, children: [
            {path: '', redirectTo: '/home', pathMatch: "full"},
            {path: 'home', component: HomeComponent},
            {path: 'blog', component: BlogComponent},
            {path: 'about', component: AboutComponent},
        ]
    },
    {
        path: '', component: AuthLayoutComponent, children: [
            {path: 'auth', component: LoginComponent},
            {path: 'reg', component: RegisterComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}