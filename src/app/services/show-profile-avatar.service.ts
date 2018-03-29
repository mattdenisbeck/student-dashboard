import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShowProfileAvatarService {

  private showProfileAvatar = new BehaviorSubject<boolean>(false);
  currentShowProfileAvatar = this.showProfileAvatar.asObservable();

  constructor() { }

  change(show: boolean) {
    this.showProfileAvatar.next(show);
  }

}
