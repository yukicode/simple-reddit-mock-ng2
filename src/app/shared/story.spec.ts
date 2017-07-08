import { TestBed, inject } from '@angular/core/testing';
import { Story } from './story';

describe('Story class', () => {
  it('should be able to create a new story with title and link', ()=>{
    let story = new Story('test title', 'www.testLink.com');
    expect(story).toBeTruthy();
    expect(story.title).toBe('test title');
    expect(story.link).toBe('www.testLink.com');
    expect(story.id).toBe(0);
    expect(story.upvote).toBe(0);
    expect(story.downvote).toBe(0);
  });

  it('should be able to create a new story with title, link, upvote, downvote, id', ()=>{
    let story = new Story('test title', 'www.testLink.com', 10, 3, 1001);
    expect(story).toBeTruthy();
    expect(story.title).toBe('test title');
    expect(story.link).toBe('www.testLink.com');
    expect(story.id).toBe(1001);
    expect(story.upvote).toBe(10);
    expect(story.downvote).toBe(3);
  });

  it('should set total score', ()=>{
    let story = new Story('test title', 'www.testLink.com', 10, 3, 1001);
    expect(story.score).toBe(7);
  });

  it('should update score when votes change', ()=>{
    let story = new Story('test title', 'www.testLink.com');
    expect(story.score).toBe(0);
    story.upvote = 10;
    expect(story.score).toBe(10);
    story.downvote = 2;
    expect(story.score).toBe(8);
  });

  it('should get domain of the link', ()=>{
      let story = new Story('test title', 'www.testLink.com');
      let domain = 'www.testLink.com';
      expect(story.getDomain()).toBe(domain);
      story = new Story('test title', 'http://www.testLink.com');
      expect(story.getDomain()).toBe(domain);
      story = new Story('test title', 'https://www.testLink.com');
      expect(story.getDomain()).toBe(domain);
      story = new Story('test title', 'www.testLink.com/random/anotherrandom/random');
      expect(story.getDomain()).toBe(domain);
      story = new Story('test title', 'https://www.testLink.com/random/anotherrandom/random');
      expect(story.getDomain()).toBe(domain);
  })
});
