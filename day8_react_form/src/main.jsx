import React from 'react';  // Add this line
import { createRoot } from 'react-dom/client';
import Form from './Form';

createRoot(document.getElementById('root')).render(
  <>
    <Form />
  </>
);
