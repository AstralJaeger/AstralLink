import "./App.css";
import Badge from "./badge/Badge.tsx";
import SocialLinks from "./links/SocialLinks.tsx";
import { getModel } from "./model.ts";
import Footer from "./Footer.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const model = getModel();

  return (
    <QueryClientProvider client={queryClient}>
      <Badge badge={model.badge} bio={model.bio} />
      <SocialLinks socials={model.socials} />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
