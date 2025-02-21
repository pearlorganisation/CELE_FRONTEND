import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout/Layout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Obituaries from "../pages/Obituaries";
import ObituariesDetails from "../pages/ObituariesDetails";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Pricing from "../pages/Pricing";
import ObituaryNotifications from "../components/Obituary Notifications/Obituary Notifications";
import FuneralBenefits from "../components/resources/FuneralBeniefits";
import Funeral from "../components/servicesSection/funeral";
import OurServices from "../components/servicesSection/OurServices";
import PersonalServices from "../components/servicesSection/PersonalServices";
import EulogyForm from "../pages/Eulogy";
import EcommercePage from "../components/Ecommerce/EcommercePage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/about_us",
        element: <AboutUs />,
      },

      {
        path: "contact",
        element: <ContactUs />,
      },

      {
        path: "obituaries",
        element: <Obituaries />,
      },
      {
        path: "obituaries/:id",
        element: <ObituariesDetails />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "/notification",
        element: <ObituaryNotifications />,
      },

      {
        path: "/funeralBenefits",
        element: <FuneralBenefits />,
      },
      {
        path: "/funeral",
        element: <Funeral />,
      },
      {
        path: "/ourServices",
        element: <OurServices />,
      },
      {
        path: "/personalServices",
        element: <PersonalServices/>,
      },
      
      {path:"/Eulogy-ai",
        element:<EulogyForm/>
      },
      {
        path:"/e-shop",
        element:<EcommercePage/>
      }
    ],
  },
]);

export default Routes;
