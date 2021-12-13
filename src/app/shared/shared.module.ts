import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobeComponent } from './globe/globe.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GlobeComponent,
    ProjectCardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule
  ],
  exports: [
    GlobeComponent,
    ProjectCardComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
