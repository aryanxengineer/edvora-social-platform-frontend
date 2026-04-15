export type FeedResponseType = {
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
  commentCounts: number;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
