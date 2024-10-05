import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppsContactComponent } from "../../apps-contact/apps-contact.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink, AppsContactComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
