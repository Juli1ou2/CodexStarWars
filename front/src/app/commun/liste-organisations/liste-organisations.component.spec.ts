import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOrganisationsComponent } from './liste-organisations.component';

describe('ListeOrganisationsComponent', () => {
  let component: ListeOrganisationsComponent;
  let fixture: ComponentFixture<ListeOrganisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeOrganisationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
