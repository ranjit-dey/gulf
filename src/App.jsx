import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'

// Components
import About from './components/About'
import Anim from './components/Anim'
import BoardOfDirectors from './components/BoardOfDirectors'
import FinancialDashboard from './components/FinancialDashboard'
import GlobalPartnership from './components/GlobalPartnership'
import Hero from './components/Hero'
import HeroMomentum from './components/HeroMomentum'
import Leadership from './components/Leadership'
import DynamicContentPage from './components/DynamicContentPage'
import Rd from './Rd'

// Home Page Composition
const Home = ({ directors }) => (
    <>
        <Hero />
        <About />
        <Anim />
        <HeroMomentum />
        <GlobalPartnership />
        <Leadership />
        <BoardOfDirectors data={directors} />
        <FinancialDashboard />
    </>
)

const App = () => {
    const directors = [
        {
            name: 'Mr. Sanjay G. Hinduja',
            role: 'Chairman, Non-Executive Director',
            image: '/Sanjay.webp',
            tags: ['M', 'M', 'M', 'M'],
            tagColors: ['bg-blue-600', 'bg-orange-500', 'bg-purple-600', 'bg-cyan-500'],
        },
        {
            name: 'Mr. Shom A. Hinduja',
            role: 'Non-Executive Director',
            image: '/Shom.webp',
            tags: ['M'],
            tagColors: ['bg-red-600'],
        },
        {
            name: 'Mr. Arvind Uppal',
            role: 'Independent Director',
            image: '/Arvind.webp',
            tags: ['C', 'C', 'C'],
            tagColors: ['bg-orange-500', 'bg-purple-600', 'bg-red-600'],
        },
        {
            name: 'Mrs. Manju Agarwal',
            role: 'Independent Director',
            image: '/Manju.webp',
            tags: ['C', 'C'],
            tagColors: ['bg-blue-700', 'bg-blue-600'],
        },
        {
            name: 'Mr. Ravi Shamlal Chawla',
            role: 'Managing Director & CEO',
            image: '/Ravi.webp',
            tags: ['M', 'M', 'M'],
            tagColors: ['bg-orange-600', 'bg-red-500', 'bg-blue-500'],
        },
    ]

    return (
        <Router>
            <Layout>
                <Routes>
                    {/* <Route path="/" element={<Home directors={directors} />} /> */}
                    <Route path="/" element={<Rd directors={directors} />} />

                    {/* DYNAMIC ROUTE: This handles EVERYTHING else */}
                    {/* :category maps to "corporate-overview" */}
                    {/* :slug maps to "board-of-directors" */}
                    <Route path="/:category/:slug" element={<DynamicContentPage />} />

                    <Route
                        path="*"
                        element={
                            <div className="text-white text-center pt-20">404 - Page Not Found</div>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
