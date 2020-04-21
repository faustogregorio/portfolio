import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Tool } from 'src/app/projects/project.model';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  animations: [
    trigger('insertRemoveTrigger', [
      transition(':enter', [
        style({ marginTop: '-77.13px', opacity: 0 }),
        animate('500ms', style({ marginTop: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ marginTop: '-77.13px', opacity: 0 }))
      ])
    ]),
  ]
})
export class ProjectFormComponent implements OnInit {
  @Input() projectForm: FormGroup;
  // projectForm: FormGroup;
  toolsData: Tool[] = [
    {
      _id: '1',
      name: 'Mysql',
    },
    {
      _id: '1',
      name: 'php',
    },
    {
      _id: '1',
      name: 'Github Pages',
    }
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {}

  get tools() {
    return this.projectForm.get('tools') as FormArray;
  }

  addTool() {
    this.tools.insert(0, this.initTool());
  }

  initTool() {
    return this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      logoUrl: ['', [Validators.required]]
    });
  }

  handleRemoveTool(index: number) {
    console.log(index);
    this.tools.removeAt(index);
  }

  ngOnInit(): void {
    console.log(this.projectForm);
  }

}
