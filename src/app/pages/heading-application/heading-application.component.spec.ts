import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingApplicationComponent } from './heading-application.component';

describe('HeadingApplicationComponent', () => {
  let component: HeadingApplicationComponent;
  let fixture: ComponentFixture<HeadingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
