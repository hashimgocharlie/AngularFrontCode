import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInlineEditComponent } from './employee-inline-edit.component';

describe('EmployeeInlineEditComponent', () => {
  let component: EmployeeInlineEditComponent;
  let fixture: ComponentFixture<EmployeeInlineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInlineEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeInlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
