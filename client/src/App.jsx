import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import UserList from './components/UserLIst.jsx'

function App() {


  return (
    <>
     
      <Header />
      
      <main className="main">
        {/* Section component  */}
        <UserList />
     
      </main>
      {/* Footer component  */}
      <Footer />
    </>

  )
}

export default App
