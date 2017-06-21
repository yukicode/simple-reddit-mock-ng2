import { Injectable } from '@angular/core';
import { STORIES } from './sample.data';

@Injectable()
export class DataService {

  list : any[];
  defaultId: number;

  constructor(){
    this.list = STORIES;
    this.defaultId = 1000;
  }

  addStory(_title: string, _link: string) {
    this.list.push({
      title: _title, 
      link: _link,
      upvote: 0,
      downvote: 0,
      id: this.defaultId++
    });
  }

  getStories(): any[] {
    return this.list.sort((a,b)=>{
      return -(a.upvote - b.upvote - a.downvote + b.downvote);
    });
  }

  upVote(id: number): void {
    this.list.find( story => story.id === id).upvote++;
  }

  downVote(id: number): void {
    this.list.find( story => story.id === id).downvote++;
  }
}
