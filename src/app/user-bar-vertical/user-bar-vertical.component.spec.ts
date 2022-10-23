import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarVerticalComponent } from './user-bar-vertical.component';

describe('UserBarVerticalComponent', () => {
  let component: UserBarVerticalComponent;
  let fixture: ComponentFixture<UserBarVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBarVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
