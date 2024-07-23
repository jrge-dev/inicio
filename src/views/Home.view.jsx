import Header from "../components/Header";
import HomeLayout from "../layouts/Home.layout";

function HomeView() {
  return (
    <>
      <Header />
      <div className="w-auto h-auto">
        <HomeLayout />
      </div>
    </>
  );
}

export default HomeView;
