import ReelCard from "@/components/ReelCard";
import { Heart, Plus } from "lucide-react";
import StoryHeader from "./components/StoryHeader";
import { useState } from "react";
import HeaderInstaPopup from "./components/popups/HeaderInstaPopup";
import { addPostStory, headerInsta } from "@/assets/data/popups";
import { Link } from "react-router-dom";

const Home = () => {
  const [headerInstaPopup, setHeaderInstaPopup] = useState(false);
  const [headerPlusPopup, setHeaderPlusPopup] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-black/60 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="relative">
            <h3
              className="text-lg font-semibold cursor-pointer"
              onClick={() => setHeaderInstaPopup((prev) => !prev)}
            >
              Edvora Feed
            </h3>

            {headerInstaPopup && (
              <div className="absolute top-10 left-0 w-44 bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-2">
                {headerInsta.map(({ name, Icon }, index) => (
                  <HeaderInstaPopup key={index} name={name} Icon={<Icon />} />
                ))}
              </div>
            )}
          </div>

          <div className="relative flex items-center gap-4">
            <button
              onClick={() => setHeaderPlusPopup((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-800 transition"
            >
              <Plus size={22} />
            </button>

            <Link
              to="/activities"
              className="p-2 rounded-full hover:bg-gray-800 transition"
            >
              <Heart size={22} />
            </Link>

            {headerPlusPopup && (
              <div className="absolute top-12 right-0 w-44 bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-2">
                {addPostStory.map(({ name, Icon }, index) => (
                  <HeaderInstaPopup key={index} name={name} Icon={<Icon />} />
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <main
        onClick={() => {
          setHeaderInstaPopup(false);
          setHeaderPlusPopup(false);
        }}
        className="pt-20 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left - Feed */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-gray-900/60 backdrop-blur rounded-xl p-4 border border-gray-800">
            <StoryHeader />
          </div>

          <section className="flex flex-col gap-6">
            <ReelCard />
            <ReelCard />
          </section>
        </div>

        {/* Right - Sidebar */}
        <aside className="hidden lg:flex flex-col gap-6">
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
            <h4 className="text-sm text-gray-400 mb-2">Suggestions</h4>
            <div className="flex flex-col gap-3 text-sm">
              <span className="hover:text-green-400 cursor-pointer">User_01</span>
              <span className="hover:text-green-400 cursor-pointer">User_02</span>
              <span className="hover:text-green-400 cursor-pointer">User_03</span>
            </div>
          </div>

          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-xs text-gray-500">
            <p>© 2026 Edvora</p>
            <p>Privacy · Terms · Help</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;