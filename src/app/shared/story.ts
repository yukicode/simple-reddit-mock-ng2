export class Story {
    title: string;
    link: string;
    id: number;
    private _upvote: number;
    private _downvote: number;
    private _score: number;

    constructor(
        title: string, 
        link: string, 
        upvote?: number,
        downvote?: number,
        id?: number
    ){
        this.title = title;
        this.link = link;
        this.upvote = upvote || 0;
        this.downvote = downvote || 0;
        this.id = id || 0;
    }

    public get score(): number {
        return this._score;
    }

    public get upvote(): number {
        return this._upvote;
    }

    public get downvote(): number {
        return this._downvote;
    }

    public set upvote(v: number) {
        this._upvote = v;
        this._score = v - this._downvote;
    }

    public set downvote(v: number) {
        this._downvote = v;
        this._score = this._upvote - v;
    }
}