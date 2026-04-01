import {
  Home,
  Search,
  Compass,
  Film,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
} from "lucide-react"

export const sidebarItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Search", icon: Search, url: "/search" },
  { title: "Explore", icon: Compass, url: "/explore" },
  { title: "Reels", icon: Film, url: "/reels" },
  { title: "Messages", icon: MessageCircle, url: "/messages" },
  { title: "Notifications", icon: Heart, url: "/notifications" },
  { title: "Create", icon: PlusSquare, url: "/create" },
  { title: "Profile", icon: User, url: "/profile" },
]