import { useEffect } from "react";
import AppRouter from "./routes/Route";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authenticUser } from "./features/auth/authActions";
import { Spinner } from "./components/ui/spinner";

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authenticUser());
  }, []);

  return isLoading ? (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner fontSize={30} />
    </div>
  ) : (
    <AppRouter />
  );
};

export default App;
