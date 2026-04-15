export type PostType = {
  _id: string;
  profileId: string;
  authorUsernameSnapshot: string;
  authorAvatar: string;
  image: {
    url: string;
    publicId: string;
  };
  likesCount: number;
  isLiked: boolean;
  commentCount: number;
  caption?: string;
  title?: string;
  hashtags: string[];
  mentions: string[];
  visibility: "public" | "private";
  createdAt: Date;
}
