import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppsContactComponent } from "../../apps-contact/apps-contact.component";
import { NgFor } from '@angular/common';
import { AnimetionComponent } from "../animetion/animetion.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink, AppsContactComponent, NgFor, AnimetionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  companies = [
    {
      name: 'Mohaymen - Code Star',
      Sdate: '2024',
      Edate: '2024',
      position: 'Intern Frontend Develpoer',
    },
    {
      name: 'Dsoon Academy',
      Sdate: '2023',
      Edate: 'Now',
      position: 'Web Developer Teacher',

    },
    {
      name: 'Faraz',
      Sdate: '2023',
      Edate: 'Now',
      position: 'Front End Developer',

    },
    {
      name: 'Cafe Arka',
      Sdate: '2023',
      Edate: '2024',
      position: 'Barista & Bartender',

    },
    {
      name: 'ArsalWeb',
      Sdate: '2019',
      Edate: '2020',
      position: 'Intern Frontend Develpoer',
    },


  ];
}