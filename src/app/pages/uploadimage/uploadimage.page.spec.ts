import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadimagePage } from './uploadimage.page';

describe('UploadimagePage', () => {
  let component: UploadimagePage;
  let fixture: ComponentFixture<UploadimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadimagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
