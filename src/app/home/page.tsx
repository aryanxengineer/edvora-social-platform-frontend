import Container from "@/components/Container";
import Header from "@/components/Header";
import PostCard from "@/components/Post";
import { Spinner } from "@/components/ui/spinner";
import { trendingPosts } from "@/features/feed/feedActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { trendingPostsData, isLoading } = useAppSelector(
    (state) => state.feed,
  );

  useEffect(() => {
    dispatch(trendingPosts());
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner />
      </div>
    );

  return (
    <Container>
      <div className="relative pt-14 md:pt-0">
        <Header isHome={true} />
        <section>
          {trendingPostsData && trendingPostsData?.length > 0 ? (
            trendingPostsData.map((post, index) => (
              <PostCard post={post} key={index} />
            ))
          ) : (
            <p>no posts found</p>
          )}
        </section>
      </div>
    </Container>
  );
};

export default Home;
