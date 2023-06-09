import "./App.css";
import AboutUs from "./components/HomeComponents/AboutUs";
import BlogAndNew from "./components/HomeComponents/BlogAndNew";

function App() {
  return (
    <div className="h-[3000px]">
      <section>
        <AboutUs />
      </section>
      <section className="">
        <BlogAndNew />
      </section>
    </div>
  );
}

export default App;
