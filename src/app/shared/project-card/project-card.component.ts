import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from "../../project.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit, OnChanges {

  @Input() projectSlug?: string | null;

  project: Project | undefined;
  urlOrigin: string = environment.apiUrl;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    if (this.projectSlug)
      this.loadProject(this.projectSlug).then();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectSlug'].previousValue !== changes['projectSlug'].currentValue) {
      this.loadProject(changes['projectSlug'].currentValue).then();
    }
  }

  async loadProject(projectSlug: string) {
    if (!projectSlug)
      return;
    if (this.project && projectSlug === this.project.slug)
      return;
    const projectOrNull = await this.projectService.getProject(projectSlug);
    if (!projectOrNull)
      return;
    this.project = projectOrNull;
  }

}
