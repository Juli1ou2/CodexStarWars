import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceFormComponent } from './espece-form.component';

describe('EspeceFormComponent', () => {
  let component: EspeceFormComponent;
  let fixture: ComponentFixture<EspeceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspeceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspeceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
