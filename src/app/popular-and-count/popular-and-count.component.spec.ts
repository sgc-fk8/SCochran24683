import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAndCountComponent } from './popular-and-count.component';

describe('PopularAndCountComponent', () => {
  let component: PopularAndCountComponent;
  let fixture: ComponentFixture<PopularAndCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularAndCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAndCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
