import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from './about/about.component';
import { InterLayoutComponent } from './inter-layout/inter-layout.component';
import { SettingsComponent } from './settings/settings.component';
import {MaterialModule} from '../material/material.module';
import { ArticleComponent,YesNoDialog } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component'
import {NewTabButtonComponent} from '../new-tab-button/new-tab-button.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [AboutComponent, InterLayoutComponent, SettingsComponent, ArticleComponent, ArticleCreateComponent,YesNoDialog,NewTabButtonComponent],
  entryComponents:[YesNoDialog]
})
export class HomeModule { 

}
