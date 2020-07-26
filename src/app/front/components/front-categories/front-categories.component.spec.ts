import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCategoriesComponent } from './front-categories.component';

describe('FrontCategoriesComponent', () => {
  let component: FrontCategoriesComponent;
  let fixture: ComponentFixture<FrontCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
