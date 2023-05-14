import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-technologies-display',
  templateUrl: './technologies-display.component.html',
  styleUrls: ['./technologies-display.component.css'],
})
export class TechnologiesDisplayComponent {
  @Input() technologies!: ISkill[];
}
