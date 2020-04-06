import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tool } from 'src/app/projects/project.model';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  @Input() toolsData: Tool[];
  @Input() toolForm: FormGroup;
  @Input() index: number;
  @Output() onRemoveTool = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.toolsData);
  }

  emitToolIndex() {
    this.onRemoveTool.emit(this.index);
  }
  onChange() {
    this.toolForm.patchValue({
      _id: this.toolForm.value.name._id,
      name: this.toolForm.value.name,
      logoUrl: this.toolForm.value.name.logoUrl
    });
    console.log(this.toolForm);
  }

}
