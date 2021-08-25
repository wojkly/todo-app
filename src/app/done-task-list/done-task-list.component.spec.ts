import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskListComponent } from './done-task-list.component';

describe('DoneTaskListComponent', () => {
  let component: DoneTaskListComponent;
  let fixture: ComponentFixture<DoneTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
