import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisViajesPage } from './mis-viajes.page';

describe('MisViajesPage', () => {
  let component: MisViajesPage;
  let fixture: ComponentFixture<MisViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
