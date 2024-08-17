import React, { forwardRef, ReactNode } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as RadixSelect from "@radix-ui/react-select";
import { clsx } from "clsx";

interface SelectProps {}

export const Select = (props: SelectProps) => {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger asChild>
        <div className="flex gap-1 items-center">
          <RadixSelect.Value />
          <RadixSelect.Icon>
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </div>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content>
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
            <RadixSelect.Group>
              <SelectItem value="jan2023">Jan 2023</SelectItem>
              <SelectItem value="feb2023">Feb 2023</SelectItem>
              <SelectItem value="mar2023">Mar 2023</SelectItem>
              <SelectItem value="apr2023">Apr 2023</SelectItem>
              <SelectItem value="may2023">May 2023</SelectItem>
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

const SelectItem = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  value: string;
  className?: string;
}) => {
  return (
    <RadixSelect.Item
      className={clsx(
        "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
        "radix-disabled:opacity-50",
        "focus:outline-none select-none"
      )}
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-2 inline-flex items-center">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
};
