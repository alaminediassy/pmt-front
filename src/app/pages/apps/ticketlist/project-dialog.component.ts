import { Component, Inject } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from './ticket';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-project-dialog',
  templateUrl: './ticket-dialog.component.html',
})
export class ProjectDialogComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  // Méthode appelée lors de la création du projet
  createProject(form: NgForm): void {
    const project: Project = {
      name: form.value.name,
      description: form.value.subtext,
      startDate: form.value.date
    };

    this.projectService.createProject(project, this.local_data.userId).subscribe({
      next: (result) => {
        this.dialogRef.close({ event: 'Add', data: result });
      },
      error: (err) => {
        console.error('Erreur lors de la création du projet:', err);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
