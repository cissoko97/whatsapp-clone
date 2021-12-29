import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFillComponent } from './search-fill.component';

describe('SearchFillComponent', () => {
  let component: SearchFillComponent;
  let fixture: ComponentFixture<SearchFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
