import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { SettingsComponent } from "./settings/settings.component";
import { InterLayoutComponent } from "./inter-layout/inter-layout.component";
import { ArticleComponent} from './article/article.component';
import { ArticleCreateComponent } from "./article-create/article-create.component";
const routes: Routes = [
  {
    path: "",
    component: InterLayoutComponent,
    children: [
      { path: "about", component: AboutComponent },
      {path:"event", component: ArticleComponent},
      {path:"event/create", component:ArticleCreateComponent},
      {path:"event/:id", component:ArticleCreateComponent,data:{action:'open'}},
      {path:"event/edit/:id", component:ArticleCreateComponent,data:{action:'edit'}},
      { path: "settings", component: SettingsComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
