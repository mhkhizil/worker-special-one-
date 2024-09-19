import React, { ReactNode } from "react";

interface BaseLayoutProps{
    children?:ReactNode;
}

export type ReactFCWithChildren<T> = React.FC<React.PropsWithChildren<T>>;
export type LayoutwithChildren = React.FC<BaseLayoutProps>;

export interface APIErrorMessage {
    errorMessage?: string;
    errorDescription?: string;
    errorCode?: string;
  }