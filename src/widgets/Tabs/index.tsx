import React from "react";
import { clsx } from "clsx";
import * as RadixTabs from "@radix-ui/react-tabs";

import { Accordion } from "../Accordion";

interface TabsProps {}

export const Tabs = (props: TabsProps) => {
  return (
    <RadixTabs.Root defaultValue="month">
      <RadixTabs.List className="flex w-full rounded-lg bg-gray-300">
        <RadixTabs.Trigger
          value="week"
          className={clsx(
            "first:rounded-tl-lg last:rounded-tr-lg",
            "border-gray-300",
            "data-[state=active]:bg-green-500 data-[state=active]:rounded-md",
            "flex-1 px-3 py-2.5"
          )}
        >
          <span className={clsx("text-sm font-medium", "text-gray-700 ")}>
            Week
          </span>
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="month"
          className={clsx(
            "first:rounded-tl-lg last:rounded-tr-lg",
            "border-gray-300",
            "data-[state=active]:bg-green-500 data-[state=active]:rounded-md",
            "flex-1 px-3 py-2.5"
          )}
        >
          <span className={clsx("text-sm font-medium", "text-gray-700 ")}>
            Month
          </span>
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="year"
          className={clsx(
            "first:rounded-tl-lg last:rounded-tr-lg",
            "border-gray-300",
            "data-[state=active]:bg-green-500 data-[state=active]:rounded-md",
            "flex-1 px-3 py-2.5"
          )}
        >
          <span className={clsx("text-sm font-medium", "text-gray-700 ")}>
            Year
          </span>
        </RadixTabs.Trigger>
      </RadixTabs.List>

      <RadixTabs.Content value="week">
        <div>
          <Accordion />
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content value="month">
        <div className="w-full rounded-md my-4 p-3.5 bg-green-300">
          <p>August</p>
          <p>INR 4000.00</p>
          <p>Great! INR 4000 left in your budget</p>
        </div>
        <div>
          <Accordion />
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content value="year">
        <div>
          <Accordion />
        </div>
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
};
