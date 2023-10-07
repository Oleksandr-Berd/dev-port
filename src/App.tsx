import ContactForm from "./components/ContacForm/ContactForm";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <>
      <Header status={null}/>
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Header status="footer"/>
    </>
  );
}

export default App;
