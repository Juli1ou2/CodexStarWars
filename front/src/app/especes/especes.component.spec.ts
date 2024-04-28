import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecesComponent } from './especes.component';

describe('EspecesComponent', () => {
  let component: EspecesComponent;
  let fixture: ComponentFixture<EspecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
