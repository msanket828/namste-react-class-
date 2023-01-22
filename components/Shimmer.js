const Shimmer = () => {
  return (
    <div className="main-body shimmer">
      <div className="wrapper">
        {Array(10)
          .fill("")
          .map((e, index) => {
            return <div key={index} className="card"></div>;
          })}
      </div>
    </div>
  );
};

export default Shimmer;
