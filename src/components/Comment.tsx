import { Card, CardContent, CardHeader } from "./ui/card";

const Comment = () => {
  return (
    <Card className="py-3 mb-2">
      <CardHeader>Comments</CardHeader>
      <CardContent className="h-64 border-t-2">
        <section className="hidden overflow-x-hidden no-scrollbar scroll-auto">
          hello
        </section>

        <div className="w-full h-full flex justify-center items-center">
          <p className="text-xs font-semibold text-center py-5 px-2">
            No comments on this post
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Comment;
