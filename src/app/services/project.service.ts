import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../pages/apps/ticketlist/ticket";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiURL = 'http://localhost:8091/projects';

  constructor(private http: HttpClient) {}

  createProject(project: Project, userId: number): Observable<Project> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Project>(`${this.apiURL}/create/${userId}`, project, { headers });
  }
}
