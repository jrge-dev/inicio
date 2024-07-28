import Header from "../components/Header";
import HomeLayout from "../layouts/Home.layout";
import Footer from "../components/Footer";

function HomeView() {
  return (
    <>
      <div className="dark:bg-slate-900 text-white">
        <Header />
        <div className="w-auto h-auto">
          <HomeLayout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomeView;
