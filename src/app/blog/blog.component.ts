import { Component, Input, OnInit } from '@angular/core';
import { MediumService } from '../medium-embed/medium.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  
  @Input() screenSize;

  posts: any[] = [];

  constructor(private mediumService: MediumService,private router: Router) { }

  ngOnInit(): void {
    this.mediumService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  goToHome(){
    this.router.navigate(['/']); // navigates to /blog route

  }
  
}
