// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import './App.css'; // keep your styles

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <Home />
      </main>
    </div>
  );
}