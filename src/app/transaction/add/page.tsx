import React from "react";
import { clsx } from "clsx";
import * as RadixTabs from "@radix-ui/react-tabs";
import { UploadIcon } from "@radix-ui/react-icons";

import RootLayout from "@/app/layout";
import { Select } from "@/widgets/Select";

const AddTransaction = () => {
  return (
    <RootLayout>
      <div>
        <div className="flex justify-between">
          <div>Cancel</div>
          <div>Add Transaction</div>
          <div>Create</div>
        </div>
        <div>
          <RadixTabs.Root defaultValue="outcome">
            <RadixTabs.List className="flex w-full rounded-lg bg-gray-300">
              <RadixTabs.Trigger
                value="income"
                className={clsx(
                  "first:rounded-tl-lg last:rounded-tr-lg",
                  "border-gray-300",
                  "data-[state=active]:bg-green-500 data-[state=active]:rounded-md",
                  "flex-1 px-3 py-2.5"
                )}
              >
                <span>Income</span>
              </RadixTabs.Trigger>
              <RadixTabs.Trigger
                value="outcome"
                className={clsx(
                  "first:rounded-tl-lg last:rounded-tr-lg",
                  "border-gray-300",
                  "data-[state=active]:bg-green-500 data-[state=active]:rounded-md",
                  "flex-1 px-3 py-2.5"
                )}
              >
                <span>Outcome</span>
              </RadixTabs.Trigger>
            </RadixTabs.List>

            <RadixTabs.Content value="income">
              <div>
                <div>
                  <label htmlFor="category">Source</label>
                  <Select />
                </div>

                <div>
                  <label htmlFor="category">Category</label>
                  <Select />
                </div>

                <div>
                  <label htmlFor="amount"></label>
                  <input type="text" id="amount" />
                </div>

                <div>
                  <label htmlFor="daterange">Date Range</label>
                  <Select />
                </div>

                <div>
                  <label htmlFor="notes">Notes</label>
                  <textarea name="notes" id="notes" />
                </div>

                <div>
                  <p>Attachment</p>
                  <div className="">
                    <UploadIcon />
                    <span>Browse Files</span>
                  </div>
                </div>
              </div>
            </RadixTabs.Content>
            <RadixTabs.Content value="outcome">
              <div>
                <div>
                  <label htmlFor="name"></label>
                  <input type="text" id="name" />
                </div>

                <div>
                  <label htmlFor="category">Category</label>
                  <Select />
                </div>

                <div>
                  <label htmlFor="budget"></label>
                  <input type="text" id="budget" />
                </div>

                <div>
                  <label htmlFor="daterange">Date Range</label>
                  <Select />
                </div>

                <div>
                  <label htmlFor="notes">Notes</label>
                  <textarea name="notes" id="notes" />
                </div>

                <div>
                  <p>Attachment</p>
                  <div className="">
                    <UploadIcon />
                    <span>Browse Files</span>
                  </div>
                </div>
              </div>
            </RadixTabs.Content>
          </RadixTabs.Root>
        </div>
      </div>
    </RootLayout>
  );
};

export default AddTransaction;
