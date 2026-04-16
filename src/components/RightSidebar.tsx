import Comment from "./Comment";
import Footer from "./Footer";

const RightSidebar = () => {
  return (
    <section className="hidden lg:block py-4">
      <Comment />
      <Footer />
    </section>
  );
};

export default RightSidebar;
