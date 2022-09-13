import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDumbComponent } from './lib-dumb.component';

describe('LibDumbComponent', () => {
  let component: LibDumbComponent;
  let fixture: ComponentFixture<LibDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibDumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
