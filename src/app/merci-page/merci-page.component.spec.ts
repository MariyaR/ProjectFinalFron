import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerciPageComponent } from './merci-page.component';

describe('MerciPageComponent', () => {
  let component: MerciPageComponent;
  let fixture: ComponentFixture<MerciPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerciPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerciPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
