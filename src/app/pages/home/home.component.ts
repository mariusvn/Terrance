import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  pins: Array<Pin> = [];

  constructor(private projectService: ProjectService) { }

  async ngOnInit(): Promise<void> {
    const proj = await this.projectService.getAllProjects();
    if (!proj) {
      console.info("No projects found");
      return;
    } else {
      this.projects = proj;
      this.initPins();
    }
  }

  initPins(): void {
    this.pins = [];
    this.projects.forEach((project: Project, index: number) => {
      this.pins.push({
        coords: {
          lat: project.coords.lat,
          long: project.coords.lng
        },
        name: project.name,
        id: index,
        newReleaseTag: project.show_new_release_tag
      });
    });
  }
}
