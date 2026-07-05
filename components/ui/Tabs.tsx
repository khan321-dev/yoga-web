"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      "inline-flex items-center justify-center rounded-full bg-stone-100 p-1",
      "border border-stone-200 gap-1",
      className
    )}
    {...props}
  />
);

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold",
      "transition-all duration-200 cursor-pointer text-stone-600",
      "data-[state=active]:bg-terracotta-500 data-[state=active]:text-white data-[state=active]:shadow-sm",
      "hover:text-terracotta-600",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400",
      className
    )}
    {...props}
  />
);

const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={cn(
      "mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400",
      className
    )}
    {...props}
  />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
