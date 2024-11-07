import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimetionComponent } from "../animetion/animetion.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, AnimetionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
