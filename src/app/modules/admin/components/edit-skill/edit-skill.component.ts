import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ISkill, ISkillOut } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['../modals.css'],
})
export class EditSkillComponent implements OnInit {
  $defaultData: Observable<ISkill> | undefined = undefined;
  isLoading = true;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.skillsService.getSkillById(id).pipe(
      tap({
        complete: () => {
          this.isLoading = false;
        },
      })
    );
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: ISkillOut) {
    this.isLoading = true;
    this.skillsService.updateSkill(data, data.id!).subscribe(() => {
      this.skillsService.reloadSkillsData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
