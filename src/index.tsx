import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Post from './widgets/Post';

const container = document.getElementById('roller');
createRoot(container!).render(
  <React.Suspense fallback={<></>}>
    <Post />
  </React.Suspense>
);
