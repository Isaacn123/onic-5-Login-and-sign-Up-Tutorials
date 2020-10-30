import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginscreenPage } from './loginscreen.page';

describe('LoginscreenPage', () => {
  let component: LoginscreenPage;
  let fixture: ComponentFixture<LoginscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
