import Footer from "../components/Footer";
import Content from "../components/HomeItem/Content";
import Navigation from "../components/Navigation/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
