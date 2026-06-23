import { createContext } from "react";

import type { I18nContextValue } from "./I18nProvider";

export const I18nContext = createContext<I18nContextValue | null>(null);
