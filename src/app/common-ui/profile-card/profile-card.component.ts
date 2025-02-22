import {Component, Input} from '@angular/core';
import {Profile} from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  standalone: true,
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
