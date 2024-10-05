import { Component } from '@angular/core';
import { AppsContactComponent } from '../../apps-contact/apps-contact.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, AppsContactComponent ,NgFor] ,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  companies = [
    {
      name: 'Mohaymen - Code Star',
      Sdate: '2024',
      Edate: '2024',
      position: 'Intern Frontend Develpoer',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi'
    },
    {
      name: 'Dsoon Academy',
      Sdate: '2023',
      Edate: 'Now',
      position: 'Web Developer Teacher',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi'

    },
    {
      name: 'Faraz',
      Sdate: '2023',
      Edate: 'Now',
      position: 'Front End Developer',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi'

    },
    {
      name: 'Cafe Arka',
      Sdate: '2023',
      Edate: '2024',
      position: 'Barista & Bartender',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi'

    },
    {
      name: 'ArsalWeb',
      Sdate: '2019',
      Edate: '2020',
      position: 'Intern Frontend Develpoer',
      dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi'
    },


  ];

}
