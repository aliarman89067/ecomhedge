import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AmazonAutomation } from "./pages/services/amazon-automation";
import { TiktokShopAutomation } from "./pages/services/tiktok-shop-automation";
import { AmazonPrivateLabel } from "./pages/services/amazon-private-label";
import { WalmartAutomation } from "./pages/services/walmart-automation";
import { AccountReinstatement } from "./pages/services/account-reinstatement";
import { ShopifyDropshippingAutomation } from "./pages/services/shopify-dropshipping-automation";
import { Navbar } from "./components/dashboard/navbar";
import { Footer } from "./components/dashboard/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home/Index */}
        <Route path="/" Component={Home} />
        {/* Services */}
        {/* amazon automation */}
        <Route path="/amazon-automation" Component={AmazonAutomation} />
        <Route
          path="/tiktok-shop-automation"
          Component={TiktokShopAutomation}
        />
        <Route path="/amazon-private-label" Component={AmazonPrivateLabel} />
        <Route path="/walmart-automation" Component={WalmartAutomation} />
        <Route path="/account-reinstatement" Component={AccountReinstatement} />
        <Route
          path="/shopify-dropshipping-automation"
          Component={ShopifyDropshippingAutomation}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
