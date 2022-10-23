import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-100vh">
        <div className="flex-1">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Home;
