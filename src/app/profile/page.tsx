import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Posts", value: 128 },
  { label: "Followers", value: "12.4K" },
  { label: "Following", value: 342 },
];

const posts = Array.from({ length: 12 }, (_, i) => i + 1);

const Page = () => {
  return (
    <div className="w-full min-h-screen p-3 sm:p-4 md:p-6">
      <div className="max-w-5xl mx-auto">

        {/* PROFILE HEADER */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">

            {/* AVATAR */}
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            {/* INFO */}
            <div className="flex-1 text-center md:text-left space-y-3">

              {/* NAME + ACTION */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold">username</h2>
                <div className="flex gap-2 justify-center md:justify-start">
                  <Button size="sm">Edit Profile</Button>
                  <Button size="sm" variant="outline">Share</Button>
                </div>
              </div>

              {/* STATS */}
              <div className="flex justify-around md:justify-start md:gap-6 text-sm">
                {stats.map((item) => (
                  <div key={item.label} className="text-center md:text-left">
                    <p className="font-semibold">{item.value}</p>
                    <p className="text-muted-foreground text-xs">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* BIO */}
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-black">Your Name</p>
                <p>Building scalable backend systems 🚀</p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* POSTS GRID */}
        <div className="mt-4 sm:mt-6">
          {posts.map((post) => (
            <Card
              key={post}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition my-4"
            >
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-sm">
                Post {post}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page;