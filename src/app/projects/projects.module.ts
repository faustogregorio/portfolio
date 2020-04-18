import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [ProjectsComponent, ProjectItemComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule
  ],
  exports: [ProjectItemComponent]
})
export class ProjectsModule { }

