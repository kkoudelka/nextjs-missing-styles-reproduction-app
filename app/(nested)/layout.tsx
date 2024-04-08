import { CustomLayout } from "../../components/layout/custom-layout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CustomLayout>{children}</CustomLayout>;
}
