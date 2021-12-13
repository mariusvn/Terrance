import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project?: Project;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) { }

  async ngOnInit(): Promise<void> {
    const param = this.route.snapshot.queryParamMap.get('game');
    if (!param) {
      this.navigateToHome();
      return;
    }
    const project = await this.projectService.getProject(param);
    if (!project) {
      this.navigateToHome();
      return;
    }
    this.project = project;
  }

  navigateToHome() {
    console.log('redirect');
    this.router.navigate(['/']).then();
  }

}
