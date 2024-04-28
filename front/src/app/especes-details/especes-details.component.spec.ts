import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecesDetailsComponent } from './especes-details.component';

describe('EspecesDetailsComponent', () => {
  let component: EspecesDetailsComponent;
  let fixture: ComponentFixture<EspecesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspecesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
