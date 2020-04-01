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
      name: 'generator',
      description: 'desc',
      tecnologies: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '000',
      imageUrl: 'assets/img/truthables.png'
    },
    {
      _id: 'qw',
      name: 'generator',
      description: 'desc',
      tecnologies: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '546523',
      imageUrl: 'assets/img/truthables.jpg'
    },
    {
      _id: 'qw',
      name: 'generator',
      description: 'desc',
      tecnologies: [
        {
          _id: '1',
          name: 'php',
          logoUrl: 'assets/img/php.png'
        }
      ],
      backgroundColor: '865427',
      imageUrl: 'assets/img/truth-table-generator-1.jpg'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
    this.onResize('');

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 960) {
      this.cols = 1;
    } else if (window.innerWidth > 1920) {
      this.cols = 3;
    } else {
      this.cols = 2;
    }
  }
}

