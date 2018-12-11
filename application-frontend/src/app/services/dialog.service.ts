import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(msg){
   return this.dialog.open(ConfirmDialogComponent,
      {
      
        disableClose:true,
        panelClass:'confirmDialogContainer',
        data:
        {
          message:msg
        },
        position:
        {
          top:"10px"
        }
      })
  }
}
