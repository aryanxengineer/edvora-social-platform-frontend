import { Plus } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-bold tracking-wide">I AM THE BEST</h4>
        </div>
        <div>
          <Button>
            Create <Plus />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
