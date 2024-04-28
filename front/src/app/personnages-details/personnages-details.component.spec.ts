import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesDetailsComponent } from './personnages-details.component';

describe('PersonnagesDetailsComponent', () => {
  let component: PersonnagesDetailsComponent;
  let fixture: ComponentFixture<PersonnagesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonnagesDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
