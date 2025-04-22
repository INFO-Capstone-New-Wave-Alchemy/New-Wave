import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './Chatbot';



// function App() {
//   return (
//     <div>
//       <Router>
//         <div>
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/chat" element={<ChatBot />} />
//             {/* <Route path="/about" element={<About />} /> */}
//           </Routes>
//         </div>
//       </Router>
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <ChatBot />
      <Footer />
    </div>
  );
}


export default App;