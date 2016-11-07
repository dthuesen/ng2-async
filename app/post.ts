export interface IPost {
  userId: number;
  id?: number; // optional because of the '?', so it's not required
  title: string ;
  body: string;
}
