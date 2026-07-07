import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollRestorer } from "@/components/ScrollRestorer";
import { Home } from "@/pages/Home";
import { Contacts } from "@/pages/Contacts";

export default function App() {
  return (
    <>
      <ScrollRestorer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </>
  );
}
