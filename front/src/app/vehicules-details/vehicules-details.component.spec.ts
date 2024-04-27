import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesDetailsComponent } from './vehicules-details.component';

describe('VehiculesDetailsComponent', () => {
  let component: VehiculesDetailsComponent;
  let fixture: ComponentFixture<VehiculesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
