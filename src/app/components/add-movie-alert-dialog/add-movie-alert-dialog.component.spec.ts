import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieAlertDialogComponent } from './add-movie-alert-dialog.component';

describe('AddMovieAlertDialogComponent', () => {
  let component: AddMovieAlertDialogComponent;
  let fixture: ComponentFixture<AddMovieAlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieAlertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
