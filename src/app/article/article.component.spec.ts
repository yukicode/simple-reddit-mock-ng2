import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleComponent } from './article.component';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let testStory: Story;
  let dsSpy: any;

  class DataServiceSpy {
    upVote = jasmine.createSpy('upVote');
    downVote = jasmine.createSpy('downVote');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      providers: [{provide: DataService, useClass: DataServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    testStory = new Story('test title', 'http://www.testDomain.com/addition', 10, 3, 2000);
    component.story = testStory;
    dsSpy = fixture.debugElement.injector.get(DataService);

    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a final score count', ()=>{
    let scoreEle = fixture.debugElement.query(By.css('.score')).nativeElement;
    expect(scoreEle.innerHTML).toBe('7');
  });

  it('should have story title', ()=>{
    let titleEle = fixture.debugElement.query(By.css('.story-title')).nativeElement;
    expect(titleEle.innerHTML).toBe('test title');
  });

  it('should have the domain of the story', ()=>{
    let domainEle = fixture.debugElement.query(By.css('.story-domain')).nativeElement;
    expect(domainEle.innerHTML).toBe('www.testDomain.com');
  });

  it('should have a upvote button', ()=>{
    let upVoteBtn = fixture.debugElement.query(By.css('.upvote')).nativeElement;
    expect(upVoteBtn).toBeTruthy;
  });

  it('should have a downvote button', ()=>{
    let downVoteBtn = fixture.debugElement.query(By.css('.downvote')).nativeElement;
    expect(downVoteBtn).toBeTruthy;
  });

  it('should show upvote count in the button', ()=>{
    let upVoteCount = fixture.debugElement.query(By.css('.upvote-count')).nativeElement;
    expect(upVoteCount.innerHTML).toBe('10');
  });

  it('should show downvote count in the button', ()=>{
    let downVoteCount = fixture.debugElement.query(By.css('.downvote-count')).nativeElement;
    expect(downVoteCount.innerHTML).toBe('3');
  });

  it('should call upVote of DataService when clicking upVote button', ()=>{
    let upVoteBtn = fixture.debugElement.query(By.css('.upvote'));
    expect(dsSpy.upVote.calls.any()).toBe(false, 'upVote has not been called');
    upVoteBtn.triggerEventHandler('click', null);
    expect(dsSpy.upVote.calls.any()).toBe(true, 'upVote called after click');
  });

  it('should call downVote of DataService when clicking downVote button', ()=>{
    let downVoteBtn = fixture.debugElement.query(By.css('.downvote'));
    expect(dsSpy.downVote.calls.any()).toBe(false, 'upVote has not been called');
    downVoteBtn.triggerEventHandler('click', null);
    expect(dsSpy.downVote.calls.any()).toBe(true, 'upVote called after click');
  });

});
