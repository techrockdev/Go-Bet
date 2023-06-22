import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Layout/Sidebar/SideBar';
import { Dashboard } from './page/Dashboard/Dashboard';
import { About } from './page/About';
import { Analytics } from './page/Analytics';
import { Comment } from './page/Comment';
import { Product } from './page/Product';
import { Header } from './components/Layout/Header/Header';
import { LoginPage } from './page/Login/Login';
import { UserProfile } from './page/UserProfile/UserProfile';


export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              
              <Route index path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/about" element={<About />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/product" element={<Product />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='profile' element={<UserProfile />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;