import Banner from "./Components/Banner/Banner"
import Caring from "./Components/Caring/Caring"
import Client from "./Components/Client/Client"
import Design from "./Components/Design/Design"
import Footer from "./Components/Footer/Footer"
import Helping from "./Components/Helping/Helping"
import Libero from "./Components/Libero/Libero"
import Manage from "./Components/Manage/Manage"
import Navbar from "./Components/Navbar/Navbar"
import Tim from "./Components/Tim/Tim"
import Unseen from "./Components/Unseen/Unseen"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Client></Client>
      <Manage></Manage>
      <Unseen></Unseen>
      <Helping></Helping>
      <Design></Design>
      <Tim></Tim>
      <Caring></Caring>
      <Libero></Libero>
      <Footer></Footer>
    </>
  )
}

export default App
