import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import ColorThief from '../../../node_modules/colorthief/dist/color-thief';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  @ViewChild('image', { static: true }) imageEl: ElementRef;
  color;
  palette;
  fontSize = '1rem';
  project: Project =
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
  constructor() {
  }

  ngOnInit(): void {

  }

  updateProject($event: Project) {
    this.project = $event;
    console.log(this.project);
  }

  onFileChange(event) {
    const colorThief = new ColorThief();
    let img = this.imageEl.nativeElement;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      console.log('otravex');
      img.src = reader.result;
    }, false);
    img.onload = () => {
      this.color = colorThief.getColor(img);
      this.palette = colorThief.getPalette(img);
      console.log('color: ', this.color);
      console.log('palette: ', this.palette);
    };
  }

}
