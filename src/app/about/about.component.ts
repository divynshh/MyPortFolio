import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() screenSize: any;

  images: string[] = [
    'assets/images/collage/1.jpg',
    'assets/images/collage/me.jpg',
    'assets/images/collage/3.jpg',
    'assets/images/collage/4.jpg'
  ];

  constructor(public dialog: MatDialog) {}

  viewResume(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResumeViewerComponent, {
      width: '95%',
      height: '90%',
      backdropClass: 'backDrop',
      panelClass: 'dialog-custom'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
