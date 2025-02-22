import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';
import {ProfileService} from './data/services/profile.service';
import {CommonModule} from '@angular/common';
import {Profile} from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = []

  constructor() {
    this.profileService.getTestAccounts().subscribe(accounts => {
      this.profiles = accounts;
    })
  }
}
