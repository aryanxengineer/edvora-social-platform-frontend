import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const Footer = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-center px-2">Edvora</h3>
        <h5 className="text-md font-semibold text-center px-2">
          Social Media Platform
        </h5>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-semibold text-center py-5 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          excepturi?
        </p>
      </CardContent>
      <CardFooter className="w-full">
        <p className="text-xs font-extralight w-full text-center">All rights reserved &nbsp 2026 | Edvora - Social learning platform</p>
      </CardFooter>
    </Card>
  );
};

export default Footer;
