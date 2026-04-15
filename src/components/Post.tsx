import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Heart,
} from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { useState } from "react";
import { comment } from "@/features/comments/commentActions";
import { toast } from "sonner";
import { disLike, like } from "@/features/likes/likeActions";

export default function PostCard({ post }: { post: any }) {
  const {
    _doc: {
      _id,
      profileId,
      image,
      authorUsernameSnapshot,
      authorAvatar,
      caption,
      likesCount,
      title,
      visibility,
      createdAt,
    },
    isLiked,
    commentsCount,
  } = post;

  const newAvatar = authorAvatar
    ? authorAvatar
    : authorUsernameSnapshot
      ? authorUsernameSnapshot.charAt(0).toUpperCase()
      : "U";

  const dispatch = useAppDispatch();

  const [commentData, setCommentData] = useState("");
  const [likes, setLikes] = useState(likesCount);
  const [liked, setLiked] = useState(isLiked);

  const commentHandler = () => {
    const postId = _id;
    const content = commentData;

    try {
      dispatch(comment({ postId, content }));
      setCommentData("");
      toast.success("Comment successfully posted");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const likeHandler = () => {
    if (liked) {
      setLikes((prev: number) => prev - 1);
      dispatch(disLike(_id));
    } else {
      setLikes((prev: number) => prev + 1);
      dispatch(like(_id));
    }
    setLiked((prev: boolean) => !prev);
  };

  return (
    <div className="flex justify-center w-full p-2 sm:p-4">
      <Card className="w-full max-w-xl rounded-2xl shadow-md border ">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={newAvatar} />
                <AvatarFallback>{newAvatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">
                  {authorUsernameSnapshot}
                </p>
                <p className="text-xs text-gray-500"></p>
              </div>
            </div>
            <MoreHorizontal className="h-5 w-5 cursor-pointer" />
          </div>

          {/* Image */}
          <div className="w-full aspect-square overflow-hidden">
            <img
              src={image.url}
              className="w-full h-full object-contain"
              alt="post"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={likeHandler}
                className="hover:scale-110 transition"
              >
                <Heart
                  className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`}
                />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-6 w-6" />
                <span className="pl-2 text-xs font-light">
                  {" "}
                  {commentsCount}
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Send className="h-6 w-6" />
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>

          {/* Likes */}
          <div className="px-4">
            <p className="text-sm font-semibold">{likes} likes</p>
          </div>

          {/* Caption */}
          <div className="px-4 py-2 text-sm">
            <span className="font-semibold mr-2">{authorUsernameSnapshot}</span>
            {caption ?? title ?? "No caption"}
          </div>

          {/* Time */}
          <div className="px-4 py-2 text-xs text-gray-400">{}</div>

          {/* Add Comment */}
          <div className="flex items-center border-t px-4 py-2">
            <input
              type="text"
              value={commentData}
              placeholder="Add a comment..."
              onChange={(e) => setCommentData(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
            />
            <Button onClick={() => commentHandler()} className="px-5">
              Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
