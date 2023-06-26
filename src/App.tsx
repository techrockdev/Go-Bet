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
import { DashboardLayout } from './components/Layout/DashboardLayout';


export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <>
        <BrowserRouter>
        <DashboardLayout>
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
          </DashboardLayout>
        </BrowserRouter>
    </>
  );
};

export default App;