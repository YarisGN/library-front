import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarCComponent } from './explorar-c.component';

describe('ExplorarCComponent', () => {
  let component: ExplorarCComponent;
  let fixture: ComponentFixture<ExplorarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorarCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
