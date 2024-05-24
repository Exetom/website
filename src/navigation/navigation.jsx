import React from 'react'
import { Routes, Route } from "react-router-dom";
import BaseComponent from "../components/baseComponent/baseComponent";
import NotFound from "../components/notFound/notFound";
import Landing from "../containers/landing/landing";
import Booking from "../containers/booking/booking";

const Navigation = () => {
  return (
    <Routes>
        <Route path="/" element={<BaseComponent />}>
            <Route index element={<Landing />}></Route>
            <Route path="booking" element={<Booking />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Navigation