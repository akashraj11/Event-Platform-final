import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SharedserviceService} from '../../services/sharedservice.service'
import {Details} from '../../domain/details'
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private sharedservice:SharedserviceService,private router:Router) {
    this.ft1=0;
    this.ft2=0;
    this.ft3=0;
    this.ft4=0;
    this.count1=0;
    this.count2=0;
    this.count3=0;
    this.count4=0;
    this.ft5=0;
    this.ft6=0;
    this.ft7=0;
    this.ft8=0;
    this.count5=0;
    this.count6=0;
    this.count7=0;
    this.count8=0;
  }
   fitem1:string;
   fitem2:string;
   fitem3:string;
   fitem4:string;
   fitem5:string;
   fitem6:string;
   fitem7:string;
   fitem8:string;
   ft1:number;
   ft2:number;
   ft3:number;
   ft4:number;
   ft5:number;
   ft6:number;
   ft7:number;
   ft8:number;
   count1:number;
   count2:number;
   count3:number;
   count4:number;
   count5:number;
   count6:number;
   count7:number;
   count8:number;
   message:string[];
   category:string[];
   size:number;
   Ticktamount:number;
   loginToken: AuthToken; 
    email: string="Guest";
   bookamount:number;
   subamount:number;
   payamount:number;
   details:Details;
   movieTitle:string;
   time:string;
   screen:string;
   public selectedseats:string;
   classtype:string
  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
     
      }
      catch(error){
        console.log(error);
      }

    this.sharedservice.currentMessage.subscribe(message => this.message=message);
    this.sharedservice.currentcategory.subscribe(category=>this.category=category);
    this.sharedservice.currentDetail.subscribe(details=>this.details=details);
    if(this.details.type==="Gold")
      this.Ticktamount= this.details.totalPrice;
    else(this.details.type==="Silver") 
     this.Ticktamount= this.details.totalPrice;
     this.bookamount=this.details.seats.length*20;
     this.selectedseats=this.details.seats.toString(); 
   this.subamount=this.Ticktamount+this.bookamount;
    this.payamount=this.subamount;
    this.movieTitle=this.category[0];
    this.time=this.category[1]; 
    this.classtype=this.details.type;
  }

  public  sum(cat:string){
      //console.log(cat);
      if(cat==="Chicken Nuggets")
       {
        this.fitem1=cat;
        this.count1++;
        this.ft1=this.count1*200;
        this.payamount=this.payamount+200;
       }
       if(cat==="Burger")
       {this.fitem2=cat;
        this.count2++;
        this.ft2=this.count2*250;
        this.payamount=this.payamount+250;
       }
       if(cat==="Chicken Popcorn")
       {this.fitem3=cat;
        this.count3++;
        this.ft3=this.count3*200;
        this.payamount=this.payamount+200;
        
       }
       if(cat==="Popcorn")
       {this.fitem4=cat;
        this.count4++;
        this.ft4=this.count4*200;
        this.payamount=this.payamount+200;
       }
       if(cat==="Pepsi")
       {this.fitem5=cat;
        this.count5++;
        this.ft5=this.count5*200;
        this.payamount=this.payamount+200;
       }
       if(cat==="Masala Fries")
       {this.fitem6=cat;
        this.count6++;
        this.ft6=this.count6*200;
        this.payamount=this.payamount+200;
       }
       if(cat==="Combo-Large")
       {this.fitem7=cat;
        this.count7++;
        this.ft7=this.count7*250;
        this.payamount=this.payamount+250;
       }
       if(cat==="Chicken Pizza")
       {this.fitem8=cat;
        this.count8++;
        this.ft8=this.count8*250;
        this.payamount=this.payamount+250;
       }
    }
    public  dif(cat:string){
      //console.log(cat);
      if(cat==="Chicken Nuggets")
       {
        this.fitem1=cat;
        this.count1--;
        this.ft1=this.count1*200;
        this.payamount=this.payamount-200;
       }
       if(cat==="Burger")
       {this.fitem2=cat;
        this.count2--;
        this.ft2=this.count2*250;
        this.payamount=this.payamount-250;
       }
       if(cat==="Chicken Popcorn")
       {this.fitem3=cat;
        this.count3--;
        this.ft3=this.count3*200;
        this.payamount=this.payamount-200;
        
       }
       if(cat==="Popcorn")
       {this.fitem4=cat;
        this.count4--;
        this.ft4=this.count4*200;
        this.payamount=this.payamount-200;
        
       }
       if(cat==="Pepsi")
       {this.fitem5=cat;
        this.count5--;
        this.ft5=this.count5*200;
        this.payamount=this.payamount-200;
        
       }
       if(cat==="Masala Fries")
       {this.fitem6=cat;
        this.count6--;
        this.ft6=this.count6*200;
        this.payamount=this.payamount-200;
        
       }
       
       if(cat==="Combo-Large")
       {this.fitem7=cat;
        this.count7--;
        this.ft7=this.count7*200;
        this.payamount=this.payamount-200;
        
       }
       if(cat==="Chicken Pizza")
       {this.fitem8=cat;
        this.count8--;
        this.ft8=this.count8*250;
        this.payamount=this.payamount-250;
        
       }
    }

    makePayment(){
      this.details.totalPrice =this.payamount;
      this.sharedservice.changeDetail(this.details);
      this.router.navigate(['card']);
    }

    onSubmit(emailGuest:string){
     
      this.details.email=emailGuest;
      this.email =emailGuest;
    
    }
}
