import { ArrowLeftIcon, MessageCircle, Plus } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isHome }: { isHome: boolean }) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full rounded-none md:hidden block fixed top-0 left-0 z-20 py-3">
      <CardHeader className="flex justify-between items-center">
        {isHome ? (
          <div>
            <h3 className="text-xl font-bold text-center px-2 text-green-500 tracking-wider">
              Edvora
            </h3>
          </div>
        ) : (
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
          </Button>
        )}
        <div className="lg:hidden">
          <Link to={"/conversation"}>
            <MessageCircle />
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;

// import { ArrowUpIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"

// export function ButtonDemo() {
//   return (
//     <div className="flex flex-wrap items-center gap-2 md:flex-row">
//       <Button variant="outline">Button</Button>
//       <Button variant="outline" size="icon" aria-label="Submit">
//         <ArrowUpIcon />
//       </Button>
//     </div>
//   )
// }
