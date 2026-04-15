import { disLike, like } from "@/features/likes/likeActions";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const Like = ({ isLiked, postId }: { isLiked: boolean; postId: string }) => {
  const dispatch = useAppDispatch();

  const likeHandler = () => {
    if (isLiked) {
      dispatch(disLike(postId));
    } else {
      dispatch(like(postId));
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={likeHandler}
      className="hover:scale-110 transition"
    >
      <Heart
        className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
      />
    </Button>
  );
};

export default Like;
