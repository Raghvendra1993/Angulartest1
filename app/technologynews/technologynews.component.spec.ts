import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologynewsComponent } from './technologynews.component';

describe('TechnologynewsComponent', () => {
  let component: TechnologynewsComponent;
  let fixture: ComponentFixture<TechnologynewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologynewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
