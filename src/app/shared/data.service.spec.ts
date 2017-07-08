import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { STORIES } from './sample.data';
import { Story } from './story';

describe('DataService', () => {
  let ds: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a list of stories', () => {
    ds = new DataService();
    expect(ds).toBeTruthy();
    expect(ds.list.length).toBeGreaterThan(0);
    expect(ds.list).toBe(STORIES);
  });

  it('should have a default id of 1000', () => {
    ds = new DataService();
    expect(ds.defaultId).toBe(1000);
  })

  it('addStory should add new story to the list', () => {
    let oldLength = ds.list.length;
    ds = new DataService();
    ds.addStory('new story', 'www.newlink.com');
    expect(ds.list.length).toBe(oldLength + 1);
    let addedStory = ds.list[oldLength];
    expect(addedStory.title).toBe('new story');
    expect(addedStory.link).toBe('www.newlink.com');
    expect(addedStory.id).toBe(1000);
  })

  it('getStories should return a sorted list of stories', () => {
    ds = new DataService();
    let sortedList = ds.getStories();
    expect(sortedList).toBe(STORIES);
    expect(sortedList[0].score).toBeGreaterThan(sortedList[1].score);
    expect(sortedList[1].score).toBeGreaterThan(sortedList[2].score);
    expect(sortedList[2].score).toBeGreaterThan(sortedList[3].score);
    expect(sortedList[3].score).toBeGreaterThan(sortedList[4].score);
  });

  it('upVote to increase the amount of upvotes by one', ()=>{
    ds = new DataService();
    let testId = ds.list[0].id;
    let testUpVote = ds.list[0].upvote;
    ds.upVote(testId);
    expect(ds.list[0].upvote).toBe(testUpVote + 1);
  });

  it('upVote for a nonexist id should not break the service', ()=>{
    ds = new DataService();
    let failId = 5005;
    ds.upVote(failId);
  });

  it('downVote to decrease the amount of downvotes by one', ()=>{
    ds = new DataService();
    let testId = ds.list[0].id;
    let testDownVote = ds.list[0].downvote;
    ds.downVote(testId);
    expect(ds.list[0].downvote).toBe(testDownVote + 1);
  });

  it('downVote for a nonexist id should not break the service', ()=>{
    ds = new DataService();
    let failId = 5005;
    ds.downVote(failId);
  });

});
