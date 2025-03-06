import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (

    <div>
      <Header />

      <Container> 
        <main className='py-3' >
          <h1> QUIZ NI ARNAZ</h1>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App; 