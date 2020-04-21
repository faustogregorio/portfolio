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
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: 'http://dsc.itmorelia.edu.mx/truthables/',
      tools: [
        {
          _id: '1',
          name: 'Angular',
        },
        {
          _id: '1',
          name: 'Angular Material',
        },
        {
          _id: '1',
          name: 'MySQL',
        },
        {
          _id: '1',
          name: 'PHP',
        },
      ],
      backgroundColor: 'f9f9f9',
      descriptionColor: '000',
      imageUrl: 'assets/img/dsc.jpg'
    },
    {
      _id: 'qw',
      name: 'Truthables',
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: '',
      tools: [
        {
          _id: '1',
          name: 'php',
        }
      ],
      backgroundColor: '180f14',
      descriptionColor: 'fff',
      imageUrl: 'https://es.web.img3.acsta.net/newsv7/20/03/19/11/27/1847917.jpg'
    },
    {
      _id: 'qw',
      name: 'Truth Table Generator',
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: 'https://faustogregorio.github.io/truth-table-generator/',
      tools: [
        {
          _id: '1',
          name: 'Angular',
        },
        {
          _id: '1',
          name: 'Angular Material',
        },
        {
          _id: '1',
          name: 'GitHub Pages',
        },
        {
          _id: '1',
          name: 'PEG.js',
        }
      ],
      backgroundColor: 'f9f9f9',
      descriptionColor: '000',
      imageUrl: 'assets/img/fg.jpg'
    },
    {
      _id: 'qw',
      name: 'Truth Table Generator',
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: 'https://faustogregorio.github.io/truth-table-generator/',
      tools: [
        {
          _id: '1',
          name: 'Angular',
        },
        {
          _id: '1',
          name: 'Angular Material',
        },
        {
          _id: '1',
          name: 'Github Pages',
        },
        {
          _id: '1',
          name: 'PEG.js',
        }
      ],
      backgroundColor: '49a8d8',
      descriptionColor: '000',
      imageUrl: 'assets/img/lindsay-2.png'
    },
    {
      _id: 'qw',
      name: 'Generator',
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: 'https://faustogregorio.github.io/truth-table-generator/',
      tools: [
        {
          _id: '1',
          name: 'php',
        }
      ],
      backgroundColor: 'dcd5bb',
      descriptionColor: '000',
      imageUrl: 'assets/img/crow.jpg'
    },
    {
      _id: 'qw',
      name: 'Generator',
      date: new Date(),
      description: `Es un sistema que permite la evaluación y elaboración de tablas de
              verdad de expresiones de Lógica matemática, Conjuntos y Álgebra
              Booleana.`,
      url: 'https://faustogregorio.github.io/truth-table-generator/',
      tools: [
        {
          _id: '1',
          name: 'php',
        }
      ],
      backgroundColor: 'ceb7a6',
      descriptionColor: '000',
      imageUrl: 'assets/img/lindsay.jpg'
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
      this.cols = 1;
      this.fontSize = window.innerWidth <= 1280 ? '1rem' : '1rem';
    } else {
      this.cols = 4;
      this.fontSize = '1.2rem';
    }
  }
}

