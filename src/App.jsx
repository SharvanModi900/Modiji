import { NavBar,Footer,Container } from "./components";
import "./App.css";



const App = ({connectToWallet}) => {
  return <>
  <NavBar connectToWallet={connectToWallet} />
  <Container/>
  <Footer />
  </>;
};

export default App;
