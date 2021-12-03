import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    SharedModule,
    MatButtonModule
  ]
})
export class PagesModule { }
