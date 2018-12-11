import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Profile } from '../../profile';
import { ProfileService } from '../../profile.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileDataService } from '../../profiledataservice';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  options: FormGroup;
  showFiller = false;
  profId: string;
  profile: Profile;
  constructor(private route: ActivatedRoute,
     private profileService: ProfileService,
     private fb: FormBuilder,
     private profileData: ProfileDataService) { 
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('id');
        this.profId = id;
    });


        this.profile = this.profileData.getProfile();
        console.log('profile of user',this.profile);
  }
}
