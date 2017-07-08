import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';
import { ArticleListComponent } from './article-list.component';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let dsSpy: any;

  class DataServiceSpy {
    testStories = [
      new Story('first title', 'www.firstlink.com'),
      new Story('secound title', 'www.secondlink.com'),
    ];
    getStories = jasmine.createSpy('getStories').and.returnValue(this.testStories);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      providers: [{provide: DataService, useClass: DataServiceSpy}],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    dsSpy = fixture.debugElement.injector.get(DataService);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call service and get the story list from service', fakeAsync(()=>{
    expect(dsSpy.getStories.calls.any()).toBe(false, 'service has not been called');
    tick();
    fixture.detectChanges();
    expect(dsSpy.getStories.calls.any()).toBe(true, 'service has been called');
    expect(component.stories).toBe(dsSpy.testStories);
  }))
});
