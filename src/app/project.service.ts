import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {}

  async getProject(projectSlug: string): Promise<Project | null> {
    try {
      const res = await axios.get(`${environment.apiUrl}/projects/${projectSlug}`);
      if (res.data.success) {
        return res.data.project;
      } else {
        return null;
      }
    } catch (error) {
      console.info(error);
      return null;
    }
  }

  async getProjectProperty(projectSlug: string, propertyPath: string) {
    try {
      const res = await axios.get(`${environment.apiUrl}/projects/${projectSlug}/${propertyPath}`);
      if (res.data.success) {
        return res.data[res.data.property];
      } else {
        return null;
      }
    } catch (error) {
      console.info(error);
      return null;
    }
  }

  async getAllProjects(): Promise<Project[] | null> {
    try {
      const res = await axios.get(`${environment.apiUrl}/projects`);
      if (res.data.success) {
        return res.data.projects;
      } else {
        return null;
      }
    } catch (error) {
      console.info(error);
      return null;
    }
  }

}
