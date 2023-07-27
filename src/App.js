import Home from './pages/home';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import About from './pages/about';
import AddClubs from './pages/addclubs';
import Advertisements from './pages/advertisements';
import BusinessOwner from './pages/businessowner';
import Chat from './pages/chat';
import Chatwithstudents from './pages/chatwithstudents';
import Checkout from './pages/checkout';
import Contact from './pages/contact';
import ExploreClubs from './pages/exploreclubs';
import ExplorePosts from './pages/exploreposts';
import ExploreProducts from './pages/exploreproducts';
import ForgotPassword from './pages/forgotpassword';
import Your_Orders from './pages/your_orders';
import SuperAdmin from './pages/superadmin';
import StudentProfile from './pages/studentprofile';
import ShoppingCart from './pages/shoppingcart';
import Services from './pages/services';
import SellProduct from './pages/sellproduct';
import SchoolAdmin from './pages/schooladmin';
import PostAdvertisements from './pages/postadvertisements';
import ModeratePosts from './pages/moderateposts';
import ModerateClubs from './pages/moderateclubs';
import ManageAdvertisement from './pages/manageadvertisement';
import ManageBusinessOwnerSchool from './pages/managebusinessownerschool';
import ManageStudentSuper from './pages/managestudentsuper';
import ManageBusinessOwnerSuper from './pages/managebusinessownersuper';
import ManageProducts from './pages/manageproducts';
import ManageStudentSchool from './pages/managestudentschool';
import ManageSchoolAdmin from './pages/manageschooladmin';
import AddPosts from './pages/addposts';
import React, { useState, useMemo, useContext } from 'react'
import UserContext from "./components/UserContext";
import AddProducts from './pages/addproducts';
import { EmailContext } from './components/EmailContext';
import AddclubsStudent from './pages/addclubsstudent';
import ProductEdit from './pages/productedit';
import AdsEdit from './pages/adsedit';
import AddPostsStudent from './pages/addpostsstudent';
import PostEdit from './pages/postedit';
import PostEditStudent from './pages/posteditstudent';


function App() {

  
  const userDat = useContext(UserContext)
  const [value, setValue] = useState(null)

  const [emailLogin, setEmailLogin] = useState(null)
  
  
  const providerValue = useMemo(() => ({ 
    value, setValue 
  }), [value, setValue])
  
  const newproviderValue = useMemo(() => ({ 
    emailLogin, setEmailLogin 
  }), [emailLogin, setEmailLogin])


  return <div>
    <Router basename={'/mercadodynamic'}>
    <UserContext.Provider value={providerValue}>
    <EmailContext.Provider value={newproviderValue}>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/addclubs" element={<AddClubs />} />

        <Route exact path="/addposts" element={<AddPosts />} />
        <Route exact path="/addpostsstudent" element={<AddPostsStudent />} />

        <Route exact path="/addproducts" element={<AddProducts />} />
        <Route exact path="/productedit" element={<ProductEdit />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
        <Route exact path="/your_orders" element={<Your_Orders />} />
        <Route exact path="/adsedit" element={<AdsEdit />} />
        
        <Route exact path="/addclubsstudent" element={<AddclubsStudent />} />

        <Route exact path="/advertisements" element={<Advertisements />} />
        <Route exact path="/businessowner" element={<BusinessOwner />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/chatwithstudents" element={<Chatwithstudents />} />
        <Route exact path="/exploreclubs" element={<ExploreClubs />} />
        <Route exact path="/exploreposts" element={<ExplorePosts />} />
        <Route exact path="/exploreproducts" element={<ExploreProducts />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/your_orders" element={<Your_Orders />} />
        <Route exact path="/superadmin" element={<SuperAdmin />} />
        <Route exact path="/studentprofile" element={<StudentProfile />} />
        <Route exact path="/sellproduct" element={<SellProduct />} />
        <Route exact path="/schooladmin" element={<SchoolAdmin />} />
        <Route exact path="/postadvertisements" element={<PostAdvertisements />} />
        <Route exact path="/moderateposts" element={<ModeratePosts />} />
        <Route exact path="/moderateclubs" element={<ModerateClubs />} />
        <Route exact path="/manageadvertisement" element={<ManageAdvertisement />} />
        <Route exact path="/managebusinessownerschool" element={<ManageBusinessOwnerSchool />} />
        <Route exact path="/managestudentssuper" element={<ManageStudentSuper />} />
        <Route exact path="/managebusinessownersuper" element={<ManageBusinessOwnerSuper />} />
        <Route exact path="/manageproducts" element={<ManageProducts />} />
        <Route exact path="/manageschooladmin" element={<ManageSchoolAdmin />} />
        <Route exact path="/managestudentsschool" element={<ManageStudentSchool />} />
        <Route exact path="/postedit" element={<PostEdit />} />
        <Route exact path="/posteditstudent" element={<PostEditStudent />} />

      </Routes>
      </EmailContext.Provider>
      </UserContext.Provider>

    </Router>

  </div>
}

export default App;
