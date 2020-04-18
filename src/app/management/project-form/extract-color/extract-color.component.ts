import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import ColorThief from '../../../../../node_modules/colorthief/dist/color-thief';

@Component({
  selector: 'app-extract-color',
  templateUrl: './extract-color.component.html',
  styleUrls: ['./extract-color.component.scss']
})
export class ExtractColorComponent implements OnInit {
  @Output() onPickedImage = new EventEmitter<string>();
  @Output() onPikedBackgroundColor = new EventEmitter<{backgroundColor: string, textColor: string}>();
  @ViewChild('file', { static: true }) file: ElementRef;
  @ViewChild('image', { static: true }) imageEl: ElementRef;

  color: number[];
  palette: any[];
  selectedColor: string;
  selectdColorIndex: number;
  textColor: string;
  constructor() { }

  ngOnInit(): void {
  }
  addFile() {
    this.file.nativeElement.click();
  }

  onFileChange(event) {
    this.selectdColorIndex = undefined;
    this.selectedColor = undefined;
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
      this.onPickedImage.emit(img.src);
    };
  }
  onSelectColor(colorIndex: number, color: string) {

    this.selectdColorIndex = colorIndex;
    this.selectedColor = color;
    this.setTextColor(colorIndex);
    this.onPikedBackgroundColor.emit({backgroundColor: this.selectedColor, textColor: this.textColor});
  }
  setTextColor(index) {
    switch (index) {
      case 0:
        this.textColor = this.getTextColor(this.color);
        break;
      case 1:
        this.textColor = this.getTextColor(this.palette[0]);
        break;
      case 2:
        this.textColor = this.getTextColor(this.palette[1]);
        break;
      case 3:
        this.textColor = this.getTextColor(this.palette[2]);
        break;
      case 4:
        this.textColor = this.getTextColor(this.palette[3]);
        break;
      case 5:
        this.textColor = this.getTextColor(this.palette[4]);
        break;
      case 6:
        this.textColor = this.getTextColor(this.palette[5]);
        break;
      case 7:
        this.textColor = this.getTextColor(this.palette[6]);
        break;
      case 8:
        this.textColor = this.getTextColor(this.palette[7]);
        break;
      case 9:
        this.textColor = this.getTextColor(this.palette[8]);
        break;
      case 10:
        this.textColor = this.getTextColor(this.palette[9]);
        break;
    }
  }
  getTextColor(rgb: number[]) {
    return (( 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255) > 0.5 ? '000' : 'FFF';
  }
  decimalToHexadecimal(rgb: number[]) {
    const r = rgb[0] > 15 ? `${rgb[0].toString(16)}` : `0${rgb[0].toString(16)}`;
    const g = rgb[1] > 15 ? `${rgb[1].toString(16)}` : `0${rgb[1].toString(16)}`;
    const b = rgb[2] > 15 ? `${rgb[2].toString(16)}` : `0${rgb[2].toString(16)}`;
    return `${r}${g}${b}`;
  }
}
