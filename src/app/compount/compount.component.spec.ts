import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompountComponent } from './compount.component';

describe('CompountComponent', () => {
  let component: CompountComponent;
  let fixture: ComponentFixture<CompountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
