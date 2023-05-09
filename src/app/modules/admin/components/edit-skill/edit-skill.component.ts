import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISkill, ISkillOut } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['../modals.css'],
})
export class EditSkillComponent implements OnInit {
  $defaultData: Observable<ISkill> | undefined = undefined;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.skillsService.getSkillById(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: ISkillOut) {
    this.skillsService.updateSkill(data, data.id!).subscribe(() => {
      this.skillsService.reloadSkillsData();
      this.handleClose();
    });
  }
}
