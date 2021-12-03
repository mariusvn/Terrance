import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {
    path: 'view',
    component: ProjectComponent,
  },
  {
    path: 'view.php',
    redirectTo: 'view',
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
