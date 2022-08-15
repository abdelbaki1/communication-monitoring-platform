import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageRapportComponent } from './affichage-rapport.component';

describe('AffichageRapportComponent', () => {
  let component: AffichageRapportComponent;
  let fixture: ComponentFixture<AffichageRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
