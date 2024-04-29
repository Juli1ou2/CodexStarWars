import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeFormComponent } from './vehicule-form.component';

describe('VehiculeFormComponent', () => {
  let component: VehiculeFormComponent;
  let fixture: ComponentFixture<VehiculeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
