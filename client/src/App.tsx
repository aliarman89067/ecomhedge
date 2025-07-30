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
import About from "./pages/about";
import Contact from "./pages/contact";
import { ScrollToTop } from "./components/scroll-to-top";
import Faq from "./pages/faq";
import { ContextProvider } from "./context/form-context";
import { OverlayForm } from "./components/overlay-form";
import AmazonAutomationContract from "./pages/automation-wholesale-fba-contract";
import { FloatingElements } from "./components/floating-elements";
import { Contract } from "./pages/contract/Contract";

const App = () => {
  const pathname = window.location.href;

  const isContractPage = pathname.includes("contract-management-cms");

  return (
    <ContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        {!isContractPage && <OverlayForm />}
        {!isContractPage && <FloatingElements />}

        {!isContractPage && <Navbar />}
        <Routes>
          {/* Home/Index */}
          <Route path="/" Component={Home} />
          {/* Services */}
          {/* amazon automation */}
          <Route path="/amazon-fba-automation" Component={AmazonAutomation} />
          <Route
            path="/tiktok-shop-automation"
            Component={TiktokShopAutomation}
          />
          <Route path="/amazon-private-label" Component={AmazonPrivateLabel} />
          <Route path="/walmart-automation" Component={WalmartAutomation} />
          <Route
            path="/account-reinstatement"
            Component={AccountReinstatement}
          />
          <Route
            path="/shopify-dropshipping-automation"
            Component={ShopifyDropshippingAutomation}
          />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/faq" Component={Faq} />
          <Route
            path="/tiktok-shop-ds-contract"
            Component={AmazonAutomationContract}
          />
          <Route path="/contract-management-cms" Component={Contract} />
        </Routes>
        {!isContractPage && <Footer />}
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
