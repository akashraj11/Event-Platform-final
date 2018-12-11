import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../profile';
import { ProfileDataService } from '../../profiledataservice';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');
  profId: string;
  profile: Profile;
  name:string;
  loginToken: AuthToken;
  email :string = "";

  constructor(private route: ActivatedRoute,
    private profileService: ProfileService,
    private profileData: ProfileDataService) { }

  ngOnInit() {
    try{
    this.loginToken=jwt_decode(this.tokenObtained);
    console.log('Profile component Token',this.loginToken);
    this.email=this.loginToken.sub;
    console.log('profile component email is',this.email);
    }
    catch(error){
    console.log(error);
    }


    this.profileService.getProfileById(this.email)
    .subscribe(data => {
      this.profile = data;
      this.profileData.setProfile(this.profile);
      this.name = this.profile.name;
      console.log(this.profile);
    });
  }

}
