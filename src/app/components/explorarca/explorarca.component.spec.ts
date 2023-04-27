import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarcaComponent } from './explorarca.component';

describe('ExplorarcaComponent', () => {
  let component: ExplorarcaComponent;
  let fixture: ComponentFixture<ExplorarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
