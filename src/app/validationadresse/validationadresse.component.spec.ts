import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationadresseComponent } from './validationadresse.component';

describe('ValidationadresseComponent', () => {
  let component: ValidationadresseComponent;
  let fixture: ComponentFixture<ValidationadresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationadresseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
