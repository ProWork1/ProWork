import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Contact from './components/Contact'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import SignUp from './components/SignUp'
import { useEffect } from 'react'
import SettingColor from './components/SettingColor'

function App() {
    const onScroll = e => {
        if (e.target.documentElement.scrollTop > 50) {
            document.getElementsByTagName('header')[0].classList.add('sticky')
        } else {
            document.getElementsByTagName('header')[0].classList.remove('sticky')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='App'>
            <div>
                <Router>
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Route path='/' component={HomeScreen} exact />
                        <Route path='/aboutus' component={AboutUs} exact />
                        <Route path='/portfolio' component={Portfolio} exact />
                        <Route path='/contact' component={Contact} exact />
                        <Route path='/signin' component={SignIn} exact />
                        <Route path='/signup' component={SignUp} exact />
                    </div>
                    <div>
                        <Footer />
                    </div>
                    <div>
                        <SettingColor />
                    </div>
                </Router>
            </div>
        </div>
    )
}
export default App
