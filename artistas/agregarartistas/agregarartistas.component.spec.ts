import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarartistasComponent } from './agregarartistas.component';

describe('AgregarartistasComponent', () => {
  let component: AgregarartistasComponent;
  let fixture: ComponentFixture<AgregarartistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarartistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarartistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
