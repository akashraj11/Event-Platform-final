import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

@Injectable() 
export class SharedModule { 
sharedMail: string = "not logged in";


constructor() { }

changeMail(email: string) {
  console.log("Email updating",this.sharedMail);
  this.sharedMail = email;
}

getDataSharedMail(){
      return this.sharedMail;
}

}
