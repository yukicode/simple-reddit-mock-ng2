import { Injectable } from '@angular/core';
import { STORIES } from './sample.data';
import { Story } from './story';

@Injectable()
export class DataService {

  list : Story[];
  defaultId: number;

  constructor(){
    this.list = STORIES;
    this.defaultId = 1000;
  }

  addStory(_title: string, _link: string) {
    this.list.push(
      new Story(_title, _link, 0, 0, this.defaultId++)
    );
  }

  getStories(): Story[] {
    return this.list.sort((a: Story,b: Story)=>{
      return b.score - a.score;
    });
  }

  upVote(id: number): void {
    this.list.find( story => story.id === id).upvote++;
  }

  downVote(id: number): void {
    this.list.find( story => story.id === id).downvote++;
  }
}
