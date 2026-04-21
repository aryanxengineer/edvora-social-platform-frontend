const Container = ({ children }: { children: React.ReactElement }) => {
  return <div className="not-only-of-type:w-full h-screen overflow-x-hidden no-scrollbar scroll-auto">{children}</div>;
};

export default Container;
