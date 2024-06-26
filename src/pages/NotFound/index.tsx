const index = () => {
  const page = window.location.pathname.split("/")[1];
  return (
    <div className="flex flex-col  min-h-[97vh] text-center items-center justify-center gap-4">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-gray-600 text-4xl">{page} Page not found</p>
    </div>
  );
};

export default index;
