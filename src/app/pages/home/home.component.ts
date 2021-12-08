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
  selectedProjectSlug: string | null = null;

  constructor(private projectService: ProjectService) {
    this.onPinSelected = this.onPinSelected.bind(this);
  }

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
        name: project.name + ((project.name_has_map) ? ' Map' : ''),
        id: project.slug,
        newReleaseTag: project.show_new_release_tag
      });
    });
  }

  onPinSelected(pin: Pin): void {
    console.info("Pin selected: " + pin.id);
    this.selectedProjectSlug = pin.id;
  }
}
