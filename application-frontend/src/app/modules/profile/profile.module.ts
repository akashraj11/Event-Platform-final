import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileService} from './profile.service';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from './material';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfilecardComponent } from './components/profilecard/profilecard.component';
import { ProfileDataService } from './profiledataservice';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedService } from './sharedService';

@NgModule({
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ProfileRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule
    
  ],
  declarations: [
    ShowProfileComponent,
    UpdateProfileComponent,
    ProfileComponent,
    WishlistComponent,
    ProfilecardComponent,
 
  ],
  providers: [ProfileService,ProfileDataService,SharedService],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
