import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import {MatIconModule} from '@angular/material/icon';
import { DragAndDropDirective } from './drag-and-drop.directive';

@NgModule({
  declarations: [ManagementComponent, DragAndDropDirective],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatIconModule
  ]
})
export class ManagementModule { }
