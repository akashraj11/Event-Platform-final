import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilecardComponent } from './components/profilecard/profilecard.component';

const profileRoutes: Routes = [
  {path: '', component: ProfilecardComponent},
  {path: 'user', component: ProfileComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      profileRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
