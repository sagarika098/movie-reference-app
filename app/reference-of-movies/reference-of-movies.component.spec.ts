import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceOfMoviesComponent } from './reference-of-movies.component';

describe('ReferenceOfMoviesComponent', () => {
  let component: ReferenceOfMoviesComponent;
  let fixture: ComponentFixture<ReferenceOfMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceOfMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceOfMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
