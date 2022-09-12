import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSmartComponent } from './lib-smart.component';

describe('LibSmartComponent', () => {
  let component: LibSmartComponent;
  let fixture: ComponentFixture<LibSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
