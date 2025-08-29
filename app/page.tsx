"use client";
import Header from "./ui/header";

import Companies from "./ui/companies";
import Weblog from "./ui/weblog";
import CompanySection from "./ui/companySection";
import ContactUsSection from "./ui/contactUsSection";
import Footer from "./ui/footer";
import OneIntroduction from "./ui/oneIntroduction";
import { AnimationDurationContext } from "./hooks/animationContext";

export default function Home() {
  const animationDuration = "1500";
  return (
    <AnimationDurationContext.Provider value={animationDuration}>
      <Header />
      <OneIntroduction />
      <Companies />
      <Weblog />
      <CompanySection />
      <ContactUsSection />
      <Footer />
    </AnimationDurationContext.Provider>
  );
}
