import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import PublicRoutes from "./router";
import { ThemeProvider } from "styled-components";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";

import { themeConfig } from "./settings";
import DashAppHolder from "./dashAppStyle";
import GlobalStyles from "./settings/globalStyles";

const DashApp = () => (
  <ThemeProvider theme={themes[themeConfig.theme]}>
    <DashAppHolder>
      <Provider store={store}>
        <PublicRoutes history={history} />
      </Provider>
      <GlobalStyles />
    </DashAppHolder>
  </ThemeProvider>
);

export default DashApp;
export { AppLocale };
