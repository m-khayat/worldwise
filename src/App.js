import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";

import "./index";
import { lazy, Suspense } from "react";

import SpinnerFullPage from "./component/SpinnerFullPage/SpinnerFullPage";
import CityList from "./component/CityList/CityList";
import CountryList from "./component/CountryList/CountryList";
import City from "./component/Cities/City";
import Form from "./component/Form/Form";

// import HomePage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

const HomePage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter basename="/worldwise">
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="/app/cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="/app/countries" element={<CountryList />} />
              <Route path="/app/form" element={<Form />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}
