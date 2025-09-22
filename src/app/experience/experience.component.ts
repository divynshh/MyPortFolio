import { Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  // slickConfig = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: true,
  //   infinite: true,
  //   arrows: true,
  //   autoplay: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  
  experiences = [
    {
      company: 'Zscaler',
      logo: '../../assets/images/zscaler.png',
      location: 'Chandigarh, INDIA',
      role: 'Product Support Intern',
      duration: "Jan'2019 – Jun'2019",
      points: [
        "Worked as a Product Support Intern for 6 months and got recommended in Cloud Based Security Domain.",
        "Troubleshooting and resolving network and cloud firewall related issues."
      ]
    },
    {
      company: 'UnitedHealth Group',
      logo: '../../assets/images/UHG.png',
      location: 'Hyderabad, Telangana, INDIA',
      role: 'Software Engineer',
      duration: "Jul'2019 – Jul'2022",
      points: [
        "Worked alongside product managers to architect a multi-step manual process into a single page web-app, saving time and money.",
        "Built REST APIs that served Angular web apps handling 500,000+ concurrent users.",
        "Designed an Automation Test Framework validating >1 million regression test cases."
      ]
    },
    {
      company: 'Airtel Africa Digital Labs',
      logo: '../../assets/images/AAFL.jpeg',
      location: 'Gurugram, Haryana, INDIA',
      role: 'Senior Software Engineer',
      duration: "Jul'2022 – April'2024",
      points: [
        "Created a microservice connecting Airtel Payment with Zambia’s National Financial Switch, boosting traffic.",
        "Designed solutions for Bill Payments, Loans, and mobile money services, improving reliability by 30% and engagement by 20%.",
        "Implemented externalized logging, boosting performance and availability of logs."
      ]
    },
    {
      company: 'Cars24',
      logo: '../../assets/images/CARS24_logo.svg.png',
      location: 'Gurugram, Haryana, INDIA',
      role: 'Senior Software Engineer',
      duration: "April'2024 – Present",
      points: [
        "Designed & Enabled Autopilot scaling to 4 plus geographical regions in India, providing on demand driver service to end users.",
        "Crafted & Built Service Management Platform which enabled 6+ clients to manage their services centrally.",
        "Implemented platforms for multiple business lines for Cars24."
      ]
    }
  ];
  

  constructor() { }
  @Input() screenSize;
  ngOnInit(): void {
    console.log('Screen Size:', this.screenSize);
  }

}
