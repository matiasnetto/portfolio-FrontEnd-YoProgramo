import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-technologies-display',
  templateUrl: './technologies-display.component.html',
  styleUrls: ['./technologies-display.component.css'],
})
export class TechnologiesDisplayComponent {
  @Input() technologies!: ISkill[];
}
