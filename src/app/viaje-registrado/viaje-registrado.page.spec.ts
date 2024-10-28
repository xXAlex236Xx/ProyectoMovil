import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeRegistradoPage } from './viaje-registrado.page';

describe('ViajeRegistradoPage', () => {
  let component: ViajeRegistradoPage;
  let fixture: ComponentFixture<ViajeRegistradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeRegistradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
