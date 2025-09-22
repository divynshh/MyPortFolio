import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  @Input() screenSize!: string;

  // ✅ Single unified skill structure
  categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "Python", level: 80 }
      ]
    },
    {
      title: "Front-End",
      skills: [
        { name: "Angular", level: 65 },
        { name: "HTML + CSS", level: 90 }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "SpringBoot", level: 80 },
        { name: "Object Oriented Design", level: 95 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Jenkins", level: 70 },
        { name: "OpenShift", level: 55 },
        { name: "Docker", level: 60 }
      ]
    },
    {
      title: "Other Cool Skills",
      skills: [
        { name: "Guitar", level: 60 },
        { name: "Piano", level: 40 },
        { name: "Video Editing", level: 55 }
      ]
    }
  ];
  splitCategories: any[] = [];

  ngOnInit(): void {
    this.splitCategories = this.splitIntoColumns(this.categories, 2);
  }

  // ✅ Utility to split evenly into N columns
  splitIntoColumns(arr: any[], columns: number): any[][] {
    const result: any[][] = Array.from({ length: columns }, () => []);
    arr.forEach((item, index) => {
      result[index % columns].push(item);
    });
    return result;
  }
}