import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppsContactComponent } from "../../apps-contact/apps-contact.component";
import { AnimetionComponent } from "../animetion/animetion.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, AppsContactComponent, AnimetionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  {

}
