export class PostType {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date | null;
  constructor() {
    this.title = '';
    this.content = '';
    this.loveIts = 0;
    this.created_at = null;
  }
}
