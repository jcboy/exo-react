import React, {useState} from 'react';
import {AppRouter} from "./router/AppRouter";
import {PageContext} from "./components/common/PageContext";

function App() {

  const [pageName, setPageName] = useState('')

  return (
      <PageContext.Provider value={ {pageName, setPageName} }>
        <AppRouter />
      </PageContext.Provider>
  );
}

export default App;
