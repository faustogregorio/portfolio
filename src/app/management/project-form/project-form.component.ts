import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  project: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.project = this.formBuilder.group(
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

  ngOnInit(): void {
    console.log(this.project);
  }

}
