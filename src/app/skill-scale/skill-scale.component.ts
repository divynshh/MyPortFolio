import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-scale',
  templateUrl: './skill-scale.component.html',
  styleUrls: ['./skill-scale.component.scss']
})
export class SkillScaleComponent implements OnInit {
  @Input() skillName!: string;
  @Input() rating!: number;

  ratingArray: boolean[] = [];

  ngOnInit() {
    this.ratingArray = Array.from({ length: 5 }, (_, i) => i < this.rating);
  }
}
