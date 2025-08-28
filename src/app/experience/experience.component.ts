import { Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {


  experiences = [
    {
      image: '../../assets/images/zscaler.png',
      company: 'Zscaler',
      location: 'Chandigarh, INDIA',
      role: 'Product Support Intern',
      duration: 'January\'19 - June\'19',
      tasks: [
        'Worked as a Product Support Intern for 6 months.',
        'Troubleshooting and resolving network and cloud firewall related issues.'
      ]
    },
    {
      image: '../../assets/images/UHG.png',
      company: 'UnitedHealth Group',
      location: 'Hyderabad, Telangana, INDIA',
      role: 'Software Engineer',
      duration: 'July\'19 - July\'22',
      tasks: [
        'Architected a multi-step manual process into a web app.',
        'Built REST APIs that served Angular-based web apps handling over 500,000 users.'
      ]
    },
    {
      image: '../../assets/images/AAFL.jpeg',
      company: 'AAFL',
      location: 'Gurugram, Haryana, INDIA',
      role: 'Senior Software Engineer',
      duration: 'July\'22 - Present',
      tasks: [
        'Worked with Airtel Payments Back-End team.',
        'Built and maintained microservices.'
      ]
    }
  ];

  constructor() { }
  @Input() screenSize;
  ngOnInit(): void {
    console.log('Screen Size:', this.screenSize);
  }

}
