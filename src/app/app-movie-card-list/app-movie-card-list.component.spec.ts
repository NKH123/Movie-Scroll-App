import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieCardListComponent } from './app-movie-card-list.component';

describe('AppMovieCardListComponent', () => {
  let component: AppMovieCardListComponent;
  let fixture: ComponentFixture<AppMovieCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMovieCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
