import React from "react";
import classNames from "classnames";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = () => (
  <RadixAccordion.Root
    className="bg-mauve6 rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <div className="flex justify-between w-full">
          <div>Entertainment</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex justify-between w-full">
          <div>Movies</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Concert</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Subscription</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        <div className="flex justify-between w-full">
          <div>Food</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex justify-between w-full">
          <div>Movies</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Concert</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Subscription</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        <div className="flex justify-between w-full">
          <div>Transport</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex justify-between w-full">
          <div>Movies</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Concert</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Subscription</div>
          <div>3000.00</div>
          <div>3000.00</div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </RadixAccordion.Root>
);

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  { children: any; className?: string; value: string }
>(function AccordionItem({ children, className, value }, forwardedRef) {
  return (
    <RadixAccordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      value={value}
      ref={forwardedRef}
    >
      {children}
    </RadixAccordion.Item>
  );
});

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: any; className?: string }
>(function AccordionTrigger({ children, className, ...props }, forwardedRef) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={classNames(
          "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex gap-2 h-[45px] flex-1 cursor-default items-center bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
        {children}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { children: any; className?: string }
>(function AccordionContent({ children, className, ...props }, forwardedRef) {
  return (
    <RadixAccordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </RadixAccordion.Content>
  );
});

export { Accordion };
