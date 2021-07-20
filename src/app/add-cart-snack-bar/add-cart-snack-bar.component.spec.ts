import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartSnackBarComponent } from './add-cart-snack-bar.component';

describe('AddCartSnackBarComponent', () => {
  let component: AddCartSnackBarComponent;
  let fixture: ComponentFixture<AddCartSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCartSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
