const Shimmer = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      {/* Button Placeholder */}
      <div className="h-10 bg-gray-200 rounded-lg"></div>

      {/* Shimmer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-40 bg-gray-200 rounded-lg"></div>
        <div className="h-40 bg-gray-200 rounded-lg"></div>
        <div className="h-40 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Shimmer;
