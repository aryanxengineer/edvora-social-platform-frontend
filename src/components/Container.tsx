const Container = ({ children }: { children: React.ReactElement }) => {
  return <div className="w-full h-screen overflow-hidden">{children}</div>;
};

export default Container;
