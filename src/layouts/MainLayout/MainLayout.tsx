import React, { ReactNode } from "react";

interface IMainComponent {
  children: ReactNode;
}

function MainLayout({ children }: IMainComponent) {
  return (
    <main id="main-layout" className=" h-screen ">
      {children}
    </main>
  );
}

export default MainLayout;
