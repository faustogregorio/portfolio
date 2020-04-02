import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './management.component';
import { MatIconModule } from '@angular/material/icon';
import { DragAndDropDirective } from './drag-and-drop.directive';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ToolComponent } from './project-form/tool/tool.component';
import { ProjectsModule } from '../projects/projects.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ManagementComponent,
    DragAndDropDirective,
    ProjectFormComponent,
    ToolComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ProjectsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class ManagementModule { }
