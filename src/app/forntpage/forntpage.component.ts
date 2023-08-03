import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-forntpage',
  templateUrl: './forntpage.component.html',
  styleUrls: ['./forntpage.component.scss']
})
export class ForntpageComponent {

constructor(private dialog: MatDialog){}

  openDialog(templateRef: TemplateRef<any> )
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '500px';
    //dialogConfig.hasBackdrop = false;
    this.dialog.open(templateRef, dialogConfig);
  
  }

}
