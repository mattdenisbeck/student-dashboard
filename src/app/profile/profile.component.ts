import { Component, OnInit, Input } from '@angular/core';
import { ShowProfileAvatarService } from '../services/show-profile-avatar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showProfileAvatar: boolean;

  constructor( private showAvatarService: ShowProfileAvatarService ) { }

  ngOnInit() {
    this.showAvatarService.currentShowProfileAvatar.subscribe(isShown => this.showProfileAvatar = isShown);
  }

}
