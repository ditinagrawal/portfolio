"use client";

import { TableOfContents } from "@/components/blog/table-of-contents";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { List } from "lucide-react";

export function MobileTableOfContents() {
  return (
    <Drawer>
      <DrawerTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 fixed right-6 bottom-6 z-50 rounded-full p-3 shadow-lg transition-colors lg:hidden">
        <List size={20} />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <h3 className="font-semibold">Table of Contents</h3>
        </DrawerHeader>

        <DrawerBody>
          <TableOfContents />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
