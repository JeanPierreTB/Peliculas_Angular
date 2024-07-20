import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajapelicualasComponent } from './cajapelicualas.component';

describe('CajapelicualasComponent', () => {
  let component: CajapelicualasComponent;
  let fixture: ComponentFixture<CajapelicualasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajapelicualasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajapelicualasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
