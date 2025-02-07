import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto'; // Default weight (400)
import '@fontsource/inter'; // Variable font weights
import FirstDepositModalReset from './reusable_component/FirstDepositModalReset';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the FirstDepositModalReset component */}
    <FirstDepositModalReset />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);