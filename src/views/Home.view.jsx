import Header from "../components/Header";
import HomeLayout from "../layouts/Home.layout";
import Footer from "../components/Footer";


function HomeView() {
  return (
    <>
      <Header />
      <div className="w-auto h-auto">
        <HomeLayout />
      </div>
      <Footer />
    </>
  );
}

export default HomeView;
