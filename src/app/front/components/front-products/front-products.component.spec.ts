import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontProductsComponent } from './front-products.component';

describe('FrontProductsComponent', () => {
  let component: FrontProductsComponent;
  let fixture: ComponentFixture<FrontProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
