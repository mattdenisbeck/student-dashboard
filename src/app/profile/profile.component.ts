import { Component, OnInit, Input } from '@angular/core';
import { ShowProfileAvatarService } from '../services/show-profile-avatar.service';
import { GradesService } from '../services/grades.service';
import { AccountService } from '../account/account.service';
import { StudentInfoService } from '../services/student-info.service';
import { Student } from '../models/student';
import { ProfileBannerService } from '../services/profile-banner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bannerImg: string;
  showProfileAvatar: boolean;
  gpa: number;
  accountBalance: number;
  student: Student;

  constructor( private showAvatarService: ShowProfileAvatarService, private gradesService: GradesService,
    private accountService: AccountService, private studentInfoService: StudentInfoService,
    private bannerService: ProfileBannerService ) { }

  ngOnInit() {
    this.showAvatarService.currentShowProfileAvatar.subscribe(isShown => this.showProfileAvatar = isShown);
    this.gpa = this.gradesService.getGPA();
    this.accountBalance = this.accountService.getBalance();
    this.student = this.studentInfoService.getStudent();
    this.bannerImg = this.bannerService.getActiveBanner();
  }

}
