import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageFormComponent } from './personnage-form.component';

describe('PersonnageFormComponent', () => {
  let component: PersonnageFormComponent;
  let fixture: ComponentFixture<PersonnageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonnageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
