import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMedioComponent } from './banner-medio.component';

describe('BannerMedioComponent', () => {
  let component: BannerMedioComponent;
  let fixture: ComponentFixture<BannerMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
