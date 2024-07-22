import Header from "../components/Header";
import Home from "../layouts/Home.layout";

function HomeView() {
  return (
    <>
      <Header />
      <div className="w-auto h-auto">
        <Home />
      </div>
    </>
  );
}

export default HomeView;
