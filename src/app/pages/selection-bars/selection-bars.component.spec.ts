import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBarsComponent } from './selection-bars.component';

describe('SelectionBarsComponent', () => {
  let component: SelectionBarsComponent;
  let fixture: ComponentFixture<SelectionBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
