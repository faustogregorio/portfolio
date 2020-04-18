import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './management.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ToolComponent } from './project-form/tool/tool.component';
import { ProjectsModule } from '../projects/projects.module';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ExtractColorComponent } from './project-form/extract-color/extract-color.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ManagementComponent,
    ProjectFormComponent,
    ToolComponent,
    ExtractColorComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    FlexLayoutModule,
    ProjectsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class ManagementModule { }
