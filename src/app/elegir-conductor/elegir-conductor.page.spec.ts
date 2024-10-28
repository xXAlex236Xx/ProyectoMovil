import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirConductorPage } from './elegir-conductor.page';

describe('ElegirConductorPage', () => {
  let component: ElegirConductorPage;
  let fixture: ComponentFixture<ElegirConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
