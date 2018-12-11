import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../../profile.service';
import { Profile } from '../../profile';
import { SharedService } from '../../sharedService';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
     private profileService: ProfileService,
     public snackbar: MatSnackBar,
     private sharedService: SharedService) {
   }

  updateForm: FormGroup;
  genre1: string[];
  name1: string;
  language1: string;
  city1: string;
  phoneNumber1: string;

  genreList: string[]= [ 
    'Comedy',
    'Horror',
    'Action',
    'Fantasy',
    'Scifi',
    'Romantic',
    'Rom-com',
    'Drama',
    'Thriller',
    'Adventure',
    'Mystery'];

  languageList: string[] = [
    'English',
    'Telugu',
    'Hindi',
    'Malayalam',
    'Tamil'
  ]

  @Input()
  profile: Profile;
  
  get name() { return this.updateForm.get('name'); }

  get phoneNumber() { return this.updateForm.get('phoneNumber'); }

  get city() { return this.updateForm.get('city'); }

  get genre() { return this.updateForm.get('genre'); }
  
  get language() { return this.updateForm.get('language'); } 

  ngOnInit() {
    const controls = this.languageList.map(c => new FormControl(false));

    for(var j =0;j<this.languageList.length;j++){
      for(var k =0;k<this.profile.language.length;k++){
        if(this.languageList[j] == this.profile.language[k])
            controls[j].setValue(true);
      }
    }

    const controlsGenre = this.genreList.map(c => new FormControl(false));
    for(var j =0;j<this.genreList.length;j++){
      for(var k =0;k<this.profile.genre.length;k++){
        if(this.genreList[j] == this.profile.genre[k])
        controlsGenre[j].setValue(true);
      }
    }

    this.updateForm = this.formBuilder.group({
      name : [this.profile.name, [Validators.required]],
      city : [this.profile.city, Validators.required],
      language : new FormArray(controls),
      genre: new FormArray(controlsGenre),
      phoneNumber : [this.profile.phoneNumber, [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.name1 =this.profile.name;
    this.city1 =this.profile.city;
    this.language1 =this.profile.language;
    this.phoneNumber1 =this.profile.phoneNumber;
    this.genre1= this.profile.genre;
    console.log(this.genre1);
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      console.log('PUT Failed');
      return;
    }
    const selectedlanguage = this.updateForm.value.language
    .map((v, i) => v ? this.languageList[i] : null)
    .filter(v => v !== null);

    const selectedGenre = this.updateForm.value.genre
    .map((v, i) => v ? this.genreList[i] : null)
    .filter(v => v !== null);

    this.profile.name = this.updateForm.value.name;
    this.profile.phoneNumber = this.updateForm.value.phoneNumber;
    this.profile.city = this.updateForm.value.city;
    this.profile.genre = selectedGenre;
    this.profile.language = selectedlanguage;
    console.log(this.profile);
    this.profileService.updateProfile(this.profile.email, this.profile)
      .subscribe(data => {
        // console.log(data);
        console.log('PUT Successful');
      });
    this.sharedService.changeGenre(this.profile.genre);
    console.log('this.profile.genre',this.profile.genre);
      this.snackbar.open('Succesfully submitted!', 'Close', {
        duration: 3000,
      });
  }

}

 