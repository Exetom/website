import React from 'react'
import { Routes, Route } from "react-router-dom";
import BaseComponent from "../components/baseComponent/baseComponent";
import NotFound from "../components/notFound/notFound";
import Landing from "../containers/landing/landing";
import Booking from "../containers/booking/booking";
import ServicesPage from '../containers/services/services';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseComponent />}>
        <Route index element={<Landing />}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="services" element={<ServicesPage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Navigation