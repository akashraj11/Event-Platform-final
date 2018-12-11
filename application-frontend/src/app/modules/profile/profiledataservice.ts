import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable() 
export class ProfileDataService {

  profile : Profile;

  constructor() { }

  getProfile() {
    return this.profile;
  }

  setProfile(profileData: Profile){
      this.profile =profileData;
  }
}
