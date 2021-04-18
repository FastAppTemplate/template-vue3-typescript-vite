type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
} | null;

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

export interface State {
  post: Post;
  comments: Comments;
}

export default (): State => ({
  post: null,
  comments: [],
});
