import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListwithinlinestyleComponent } from './user-listwithinlinestyle.component';

describe('UserListwithinlinestyleComponent', () => {
  let component: UserListwithinlinestyleComponent;
  let fixture: ComponentFixture<UserListwithinlinestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListwithinlinestyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListwithinlinestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
