import React from "react";
import type { ReactNode } from "react";

import { Navbar } from "@/widgets/Navbar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="p-6">
          {children}
          <div className="fixed bottom-0 left-0 w-full">
            <Navbar />
          </div>
        </main>
      </body>
    </html>
  );
};
