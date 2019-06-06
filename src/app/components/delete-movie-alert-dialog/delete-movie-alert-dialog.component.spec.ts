import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieAlertDialogComponent } from './delete-movie-alert-dialog.component';

describe('DeleteMovieAlertDialogComponent', () => {
  let component: DeleteMovieAlertDialogComponent;
  let fixture: ComponentFixture<DeleteMovieAlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMovieAlertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
