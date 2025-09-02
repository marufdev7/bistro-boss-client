import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className='max-w-screen-2xl mx-auto pl-4 pr-4'>
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
)
