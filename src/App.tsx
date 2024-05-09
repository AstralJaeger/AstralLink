import './App.css'
import Badge from "./badge/Badge.tsx";
import SocialLinks from "./links/SocialLinks.tsx";
import {getModel} from "./model.ts";
import Footer from "./Footer.tsx";

function App() {
  const model = getModel();

  return (
    <>
      <Badge badge={model.badge} bio={model.bio} />
      <SocialLinks socials={model.socials} />
      <Footer />
    </>
  )
}

export default App;
