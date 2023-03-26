import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyConnectionTwoComponent } from './many-connection-two.component';

describe('ManyConnectionTwoComponent', () => {
  let component: ManyConnectionTwoComponent;
  let fixture: ComponentFixture<ManyConnectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyConnectionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManyConnectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
