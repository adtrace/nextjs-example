import { createContext, useContext } from 'react';
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const Adtrace = createContext();

export function AdtraceWrapper({ children }) {
  let AdtraceSdk

  if (typeof window !== 'undefined') {
    AdtraceSdk = require('web-adtrace')

    AdtraceSdk.initSdk({
      appToken: "anykmem88j9x",
      environment: "production", // or "sandbox"
      attributionCallback:(e, attribution)=>{
        console.log('attribution')
        console.log(attribution)
        console.log('e')
        console.log(e)
    }
    })
  }

  return (
    <Adtrace.Provider value={AdtraceSdk}>
      {children}
    </Adtrace.Provider>
  );
}

export function useAdtraceContext() {
  return useContext(Adtrace);
}
