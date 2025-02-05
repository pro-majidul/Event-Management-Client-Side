import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes.jsx';
import provider from './provider/provider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <provider>
      <RouterProvider router={router} />
    </provider>
  </StrictMode>,
)
