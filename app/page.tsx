"use client";
import Header from "./ui/header";
import Companies from "./ui/companies";
import Weblog from "./ui/weblog";
import CompanySection from "./ui/companySection";
import ContactUsSection from "./ui/contactUsSection";
import Footer from "./ui/footer";
import useIsVisible from "./hooks/useIsVisible";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import OneIntroduction from "./ui/oneIntroduction";

export default function Home() {
  return (
    <>
      <Header />
      <OneIntroduction />
      <Companies />
      <Weblog />
      <CompanySection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
