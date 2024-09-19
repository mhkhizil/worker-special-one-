import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<P = unknown, IP = P> = AppProps<P> & {
  Component: NextPageWithLayout<P, IP>;
};
