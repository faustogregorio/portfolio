import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import ColorThief from '../../../node_modules/colorthief/dist/color-thief';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  @ViewChild('image', { static: true }) imageEl: ElementRef;
  color;
  palette;

  //

  constructor() {
  }

  ngOnInit(): void {

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
    /* img.addEventListener('load', function () {
      this.color = colorThief.getColor(img);
      this.palette = colorThief.getPalette(img);
      console.log('color: ', this.color);
      console.log('palette: ', this.palette);
    }, false);
    event.target.files = []; */
  }

}
