import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { store, persistor } from 'Redux/store';
// import { PersistGate } from 'redux-persist/es/integration/react'
import './index.css'; // можем убрать, если надо

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/final_team_project/">
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
