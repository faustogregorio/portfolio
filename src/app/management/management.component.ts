import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../projects/project.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  projectForm: FormGroup;

  fontSize = '1rem';
  project: Project =
    {
      _id: 'qw',
      name: 'TruThables',
      description: 'desc',
      url: 'https://faustogregorio.github.io/truth-table-generator/',
      tools: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '000000',
      descriptionColor: 'ccc',
      imageUrl: 'assets/img/dsc.jpg'
    };
    constructor(
      private formBuilder: FormBuilder
    ) {
      this.projectForm = this.formBuilder.group(
        {
          _id: [''],
          name: ['', [Validators.required]],
          description: ['', [Validators.required]],
          url: ['', [Validators.required]],
          tools: this.formBuilder.array([]),
          backgroundColor: ['', [Validators.required]],
          descriptionColor: ['', [Validators.required]],
          imageUrl: ['', [Validators.required]],
        }
      );
    }

  ngOnInit(): void {

  }

  handlePickedImage(imageSrc: string) {
    this.project.imageUrl = imageSrc;
  }
  handlePickedBackgroundColor($event: { backgroundColor: string, textColor: string }) {
    this.projectForm.patchValue({
      backgroundColor: $event.backgroundColor,
      descriptionColor: $event.textColor
    });
    this.project.backgroundColor = $event.backgroundColor;
    this.project.descriptionColor = $event.textColor;
    console.log(this.projectForm)
  }


}
