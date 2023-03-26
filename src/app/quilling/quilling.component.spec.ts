import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillingComponent } from './quilling.component';

describe('QuillingComponent', () => {
  let component: QuillingComponent;
  let fixture: ComponentFixture<QuillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
