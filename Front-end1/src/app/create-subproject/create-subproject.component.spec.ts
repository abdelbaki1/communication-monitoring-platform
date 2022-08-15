import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubprojectComponent } from './create-subproject.component';

describe('CreateSubprojectComponent', () => {
  let component: CreateSubprojectComponent;
  let fixture: ComponentFixture<CreateSubprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
