import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieCardComponent } from './app-movie-card.component';

describe('AppMovieCardComponent', () => {
  let component: AppMovieCardComponent;
  let fixture: ComponentFixture<AppMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
