import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { getProfileById, myProfile } from "@/features/profiles/profileActions";
import { getProfilePosts } from "@/features/posts/postActions";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Page = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { profileId } = useParams();
  const location = useLocation();

  const { isLoading, profileData } = useAppSelector((state) => state.profile);
  const { posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      try {
        if (profileId) {
          res = await dispatch(getProfileById(profileId)).unwrap();
        } 

        if(location.pathname === "/profile") {
          res = await dispatch(myProfile()).unwrap();
        }
        
        if (res.data) {
          dispatch(getProfilePosts(res.data._id));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Spinner />
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-muted-foreground">
        Profile not found
      </div>
    );
  }

  const stats = [
    { label: "Posts", value: profileData.postCounts || 0 },
    { label: "Followers", value: profileData.followersCount || 0 },
    { label: "Following", value: profileData.followingCount || 0 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* ================= HEADER ================= */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-12 gap-6">
              {/* AVATAR */}
              <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
                <Avatar className="w-24 h-24 md:w-28 md:h-28">
                  <AvatarImage src={profileData.avatar || ""} />
                  <AvatarFallback>
                    {profileData.username?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* INFO */}
              <div className="col-span-12 md:col-span-9 space-y-4 text-center md:text-left">
                {/* NAME + ACTIONS */}
                <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-3">
                  {/* Username */}
                  <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left w-full md:w-auto">
                    {profileData.username}
                  </h2>

                  {/* Buttons */}
                  <div className="flex justify-center md:justify-start gap-2 w-full md:w-auto">
                    <Button size="sm">Edit Profile</Button>
                    <Button size="sm" variant="outline">
                      Share
                    </Button>
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 max-w-sm mx-auto md:mx-0">
                  {stats.map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="font-semibold">{item.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BIO */}
                <div className="space-y-1 text-sm">
                  <p className="font-medium">{profileData.fullname || "—"}</p>
                  <p className="text-muted-foreground">
                    {profileData.bio || "No bio available"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= POSTS GRID ================= */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <Card
                  key={post._id}
                  onClick={() => navigate(`/post/${post._id}`)}
                  className="group aspect-square overflow-hidden cursor-pointer"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative w-full h-full">
                      <img
                        src={post.image?.url}
                        alt="post"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-sm text-muted-foreground py-10">
                No posts yet
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
