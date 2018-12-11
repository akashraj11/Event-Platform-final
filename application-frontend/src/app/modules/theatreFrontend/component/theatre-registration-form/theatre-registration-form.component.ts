import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../services/custom_validators';
import {  FormService } from '../../services/form';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Theatre } from '../../domain/theatre';
import { ProducerService } from '../../services/producer-service';
import { _MatFormFieldMixinBase } from '@angular/material';
import { CoreDataService } from 'src/app/services/data.service';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";

export interface Location {
  value: string;
}

@Component({
  selector: 'app-theatre-registration-form',
  templateUrl: './theatre-registration-form.component.html',
  styleUrls: ['./theatre-registration-form.component.css']
})


export class TheatreRegistrationFormComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');


  producerToken: AuthToken;
  email :string = "";
  public noOfSeatsGold = 0;
  noOfSeatsSilver = 0;
  noOfColumns1: 0;
  noOfRows1: 0;
  noOfColumns2: 0;
  noOfRows2: 0;
  public rows: string[];
  public cols: number[];
  i: number;
  j = 0;
  public rows2: string[];
  public cols2: number[];

  public goldSeats = [];
  public silverSeats = [];
  id  = this.formService.getId() * Math.floor(Math.random() * 100) + 1   + this.formService.getId() + Math.floor(Math.random() * 124) + 1  ;
  sub: any;

  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" },
    { value: "Kochi" },
    { value: "Pune" },
    { value: "Gurugram" },
    { value: "Ahmedabad" },
    { value: "Goa" },
    { value: "Srinagar" },
    { value: "Gudgoan" },
    { value: "Dehradun" }
  ]

  public theatre: Theatre = {
    theatreId: this.id ,
    theatreName: '',
    theatreCity: '',
    theatreAddress: '',
    'screenLayout':
    {
       'category': [
             {
            'type': 'gold',
            'noOfColumns': 3,
            'noOfRows': 3,
            'seatLayout': [
                     {
                    'seatNumber': 'A0'
                     }
                   ]
            },
            {
              'type': 'silver',
              'noOfColumns': 3,
              'noOfRows': 3,
              'seatLayout': []
              }
       ]
     }
  };



  public theatreRegForm: FormGroup;
  public formErrors = {
  };

  constructor(
    public form: FormBuilder,
    public formService: FormService,
    public snackbar: MatSnackBar,
    private producerService: ProducerService,
    private coreService: CoreDataService
  ) {}

  // initiate component
  public ngOnInit() {
    this.buildForm();
    this.producerToken=jwt_decode(this.tokenObtained);
    console.log('producer Token',this.producerToken);
    this.email=this.producerToken.sub;
    console.log('email is',this.email);
  }

  public submit() {
    this.formService.setId(this.id + 1);
    console.log(this.id);
    this.theatre.theatreId = this.id;
    this.theatre.screenLayout.category[0].noOfColumns = this.noOfColumns1  ;
    this.theatre.screenLayout.category[0].noOfRows = this.noOfRows1  ;
    this.theatre.screenLayout.category[1].noOfColumns = this.noOfColumns2  ;
    this.theatre.screenLayout.category[1].noOfRows = this.noOfRows2  ;
    this.noOfSeatsGold = this.noOfColumns1 * this.noOfRows1;
    this.noOfSeatsSilver = this.noOfColumns2 * this.noOfRows2;

    this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].slice(0, this.noOfRows1);
    this.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumns1);


    this.rows2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'].slice(this.noOfRows1,this.noOfRows1+this.noOfRows2);
    this.cols2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumns2);

    for (const item of this.rows) {
      for (const item1 of this.cols) {
          this.goldSeats.push(item + item1);
        }
    }

    for (const item of this.rows2) {
      for (const item1 of this.cols2) {
          this.silverSeats.push(item + item1);
        }
    }
    console.log('gold', this.goldSeats);
    console.log('silver', this.silverSeats);
    this.theatre.screenLayout.category[0].seatLayout = this.goldSeats;
    this.theatre.screenLayout.category[1].seatLayout = this.silverSeats;

    this.theatre.screenLayout.category[0].type = 'Gold Class';
    this.theatre.screenLayout.category[1].type = 'Silver Class';

    // mark all fields as touched
    this.formService.markFormGroupTouched(this.theatreRegForm);
    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched 
    if (this.theatreRegForm.valid) {
      this.producerService.addTheatre(this.email, this.theatre);
      this.id  = this.formService.getId();
      this.snackbar.open('Succesfully submitted!', 'Close', {
        duration: 3000,
      });
      this.theatreRegForm.reset();
    } else {
      this.formErrors = this.formService.validateForm(this.theatreRegForm, this.formErrors, false)
    }
  }

  // build the user edit form
  public buildForm() {
    this.theatreRegForm = this.form.group({
      theatreName: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(15), CustomValidators.validateCharacters]],
      theatreCity: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), CustomValidators.validateCharacters]],
      theatreAddress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), CustomValidators.validateCharacters]],
      noOfColumns1: ['', [Validators.required, Validators.min(1), Validators.max(8), Validators.pattern('^[0-9]')]],
      noOfRows1: ['', [Validators.required, Validators.min(1), Validators.max(8), Validators.pattern('^[0-9]')]],
      noOfColumns2: ['', [Validators.required, Validators.min(1), Validators.max(8), Validators.pattern('^[0-9]')]],
      noOfRows2: ['', [Validators.required, Validators.min(1), Validators.max(8), Validators.pattern('^[0-9]')]],
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.theatreRegForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.theatreRegForm, this.formErrors, true);
    });
  }
}
