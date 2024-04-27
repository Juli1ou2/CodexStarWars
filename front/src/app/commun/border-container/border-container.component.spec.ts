import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderContainerComponent } from './border-container.component';

describe('BorderContainerComponent', () => {
  let component: BorderContainerComponent;
  let fixture: ComponentFixture<BorderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
