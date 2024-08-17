import React from "react";

import {
  BarChartIcon,
  PieChartIcon,
  PlusIcon,
  BellIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-4 py-2">
      <div className="grid place-items-center">
        <BarChartIcon />
        <div>Overview</div>
      </div>
      <div className="grid place-items-center">
        <PieChartIcon />
        <div>Budget</div>
      </div>
      <div className="grid place-items-center">
        <div>
          <PlusIcon />
        </div>
      </div>
      <div className="grid place-items-center">
        <BellIcon />
        <div>Activity</div>
      </div>
      <div className="grid place-items-center">
        <PersonIcon />
        <div>Profile</div>
      </div>
    </div>
  );
};
