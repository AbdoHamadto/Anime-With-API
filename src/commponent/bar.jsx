const Bar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Bar;
