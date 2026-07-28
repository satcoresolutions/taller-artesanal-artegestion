"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import type {
  FC,
} from "react";

import SplashContext
  from "@/context/SplashContext";

import {
  SplashLogo,
  SplashMessage,
  SplashProgress,
  SplashScreen,
} from "@/components/ui/splash";

import type {
  SplashProviderProps,
} from "./SplashProvider.types";

import type {
  SplashContextValue,
} from "@/types/splash.types";
const SplashProvider: FC<SplashProviderProps> = ({
  children,
}) => {

  const [
    isVisible,
    setIsVisible,
  ] = useState(false);

  const show = useCallback(() => {

    setIsVisible(true);

  }, []);

  const hide = useCallback(() => {

    setIsVisible(false);

  }, []);

  const value = useMemo<SplashContextValue>(() => ({
    isVisible,
    show,
    hide,
  }), [
    isVisible,
    show,
    hide,
  ]);

  return (

    <SplashContext.Provider
      value={value}
    >

      <SplashScreen
        isVisible={isVisible}
      >

        <SplashLogo />

        <SplashMessage
        />

        <SplashProgress />

      </SplashScreen>

      {children}

    </SplashContext.Provider>

  );

};

export default SplashProvider;