import { Dot, MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardContent,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const ReelCard = () => {
  return (
    <Card className="bg-gray-950/70 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <CardHeader className="flex justify-between items-center px-4 py-3">
        <div className="flex gap-3 items-center">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <CardTitle className="flex flex-col text-sm">
            <div className="flex items-center gap-1">
              <span className="font-medium">username</span>
              <Dot size={14} />
              <span className="text-green-400 text-xs cursor-pointer hover:underline">
                Follow
              </span>
            </div>
            <p className="text-xs text-gray-500">Suggested post</p>
          </CardTitle>
        </div>

        <CardAction>
          <MoreHorizontal size={18} className="text-gray-400 hover:text-white cursor-pointer" />
        </CardAction>
      </CardHeader>

      {/* Image */}
      <CardContent className="p-0">
        <div className="w-full aspect-4/5 bg-black">
          <img
            src="https://images.unsplash.com/photo-1527275307199-15dbf3ce91c5?w=800&auto=format&fit=crop&q=80"
            alt="post"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-start px-4 py-3 gap-2">
        {/* Actions */}
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Heart className="cursor-pointer hover:text-red-500 transition" size={20} />
            <MessageCircle className="cursor-pointer hover:text-blue-400 transition" size={20} />
            <Send className="cursor-pointer hover:text-green-400 transition" size={20} />
          </div>
          <Bookmark className="cursor-pointer hover:text-yellow-400 transition" size={20} />
        </div>

        {/* Meta */}
        <span className="text-sm font-medium">1,900 likes</span>

        <p className="text-sm text-gray-300">
          <span className="font-medium text-white">username </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt temporibus cum aspernatur debitis.
        </p>

        <span className="text-xs text-gray-500 cursor-pointer hover:underline">
          View all 45 comments
        </span>

        <span className="text-xs text-gray-600">10 December · Translate</span>
      </CardFooter>
    </Card>
  );
};

export default ReelCard;