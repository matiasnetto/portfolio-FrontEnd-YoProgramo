import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDisplayComponent } from './technologies-display.component';

describe('TechnologiesDisplayComponent', () => {
  let component: TechnologiesDisplayComponent;
  let fixture: ComponentFixture<TechnologiesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
