import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikePhotosComponent } from './hike-photos.component';

describe('HikePhotosComponent', () => {
  let component: HikePhotosComponent;
  let fixture: ComponentFixture<HikePhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HikePhotosComponent]
    });
    fixture = TestBed.createComponent(HikePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
