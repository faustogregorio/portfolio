import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Project, Tool } from 'src/app/projects/project.model';
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
  @Output() project = new EventEmitter<Project>();
  projectForm: FormGroup;

  test: Project =
  {
    _id: 'qw',
    name: 'TruThables',
    description: 'desc',
    tools: [
      {
        _id: '1',
        name: 'php',
        logoUrl: 'assets/img/php.png'
      }
    ],
    backgroundColor: '000',
    descriptionColor: 'ccc',
    imageUrl: 'assets/img/dsc.jpg'
  };
  toolsData: Tool[] = [
    {
      _id: '1',
      name: 'Mysql',
      logoUrl: 'assets/img/mysql.png'
    },
    {
      _id: '1',
      name: 'php',
      logoUrl: 'assets/img/php.png'
    },
    {
      _id: '1',
      name: 'Github Pages',
      logoUrl: 'assets/img/githubpages.svg'
    }
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.projectForm = this.formBuilder.group(
      {
        _id: [''],
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        tools: this.formBuilder.array([]),
        backgroundColor: ['', [Validators.required]],
        descriptionColor: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
      }
    );
  }

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

  childToParent(url: string) {
    this.test.imageUrl = url;
    this.project.emit(this.test);
  }

}
