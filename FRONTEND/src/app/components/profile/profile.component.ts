import { Component , OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  apellido: string = '';

  fetchProfile() {
    this.profileService.getProfile().subscribe(profile => {
      console.log(profile);
    });
  }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }
}
