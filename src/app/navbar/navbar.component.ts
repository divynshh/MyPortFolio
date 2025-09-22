import { Component,Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import projects from '../../assets/projects.json'
import { ProjectsDTO } from '../projects/projectsDTO';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScreenSizeService } from '../shared/screen-size.service';
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]

})

export class NavbarComponent  {

@ViewChild('drawer') drawer: MatDrawer;
  isSideNavOpen = false;

  screenSize: string;
  projectList : ProjectsDTO[];
  isBlog=false;
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,private router: Router,private screenSizeService: ScreenSizeService) {

      this.projectList = projects;

  }



  ngOnInit() {
    this.screenSizeService.screenSize$.subscribe(size => {
      this.screenSize = size;
    });
  }

  toggleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;

  }

  scroll(el) {
    this.drawer.close();
    this.isBlog = false;
    delay(1000);
    el = document.getElementById(el);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
}

goToBlog(){
  this.router.navigate(['/blog']); // navigates to /blog route
  this.isBlog = !this.isBlog;
  this.drawer.close();
}

goToHome(){
  this.router.navigate(['/']); // navigates to /blog route
  this.isBlog = !this.isBlog;
  this.drawer.close();
}

viewResume(){
  console.log("Resume");
  this.openDialog();
  //this.openFile();
 }
 openFile() {
   window.open("../../assets/docs/Resume.pdf");
}

  openDialog(): void {
    const dialogRef = this.dialog.open(ResumeViewerComponent, {
      width: '95%',
      height: '90%',
      backdropClass : 'backDrop',
      panelClass: 'dialog-custom' 
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


}
