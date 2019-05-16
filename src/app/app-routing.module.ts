import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ExtrLayoutComponent } from "./extr-layout/extr-layout.component";
import {AuthGuardService} from "./auth-guard.service";

let routes: Routes = [
  {
    path: "",
    component: ExtrLayoutComponent,
    children: [
      { path: "", redirectTo: "/login", pathMatch: "full" },
      { path: "login", component: LoginComponent }
    ]
  },
  { path: "", loadChildren: "./home/home.module#HomeModule",canActivateChild:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}

