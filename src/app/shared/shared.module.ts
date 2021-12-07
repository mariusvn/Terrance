import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobeComponent } from './globe/globe.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    GlobeComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    GlobeComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }
