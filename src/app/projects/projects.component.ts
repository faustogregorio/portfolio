import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cols: number;
  projects: Project[] = [
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
      imageUrl: 'assets/img/truthables.png'
    },
    {
      _id: 'qw',
      name: 'Truthables',
      description: 'desc',
      tools: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '546523',
      descriptionColor: 'ccc',
      imageUrl: 'assets/img/dsc.jpg'
    },
    {
      _id: 'qw',
      name: 'Truth Table Generator',
      description: 'desc',
      tools: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '865427',
      descriptionColor: 'ccc',
      imageUrl: 'assets/img/ttg.jpg'
    },
    {
      _id: 'qw',
      name: 'Generator',
      description: 'desc',
      tools: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '865427',
      descriptionColor: 'ccc',
      imageUrl: 'assets/img/crow.jpg'
    }
  ];
  fontSize: string;
  constructor() {
  }

  ngOnInit(): void {
    this.onResize('');

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 600) {
      this.cols = 1;
      this.fontSize = '0.8rem';
    } else if (window.innerWidth <= 960) {
      this.cols = 2;
      this.fontSize = '0.9rem';
    } else if (window.innerWidth <= 1920) {
      this.cols = 3;
      this.fontSize = window.innerWidth <= 1280 ? '1rem' : '1.4rem';
    } else {
      this.cols = 4;
      this.fontSize = '1.5rem';
    }
  }
}

