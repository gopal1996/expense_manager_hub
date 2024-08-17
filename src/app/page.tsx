import React from "react";

import { Tabs } from "@/widgets/Tabs";
import { MainLayout } from "@/layout/MainLayout";
import { Select } from "@/widgets/Select";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex justify-between mb-4">
        <p>Budget overview</p>
        <div>
          <Select />
        </div>
      </div>
      <Tabs />
    </MainLayout>
  );
};

export default Home;
