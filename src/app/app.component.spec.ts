import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
  it(`the sidenav should start closed`, async(() => {
    expect(comp.opened).toEqual(false);
  }));

});
