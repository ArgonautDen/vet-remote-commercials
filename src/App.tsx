import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Layout } from "@/components/layout/Layout";
import { ScrollRestorer } from "@/components/ScrollRestorer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CookieBanner } from "@/components/CookieBanner";
import { AppReadyContext } from "@/context/AppReadyContext";
import { Home } from "@/pages/Home";
import { Contacts } from "@/pages/Contacts";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      <AppReadyContext.Provider value={!isLoading}>
        <ScrollRestorer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
        <CookieBanner />
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AppReadyContext.Provider>
    </MotionConfig>
  );
}
