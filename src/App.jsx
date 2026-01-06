import About from './components/About'
import Anim from './components/Anim'
import BoardOfDirectors from './components/BoardOfDirectors'
import Footer from './components/Footer'
import GlobalPartnership from './components/GlobalPartnership'
import Hero from './components/Hero'
import HeroMomentum from './components/HeroMomentum'
import Navbar from './components/Navbar'

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
    name: 'Mr. Munesh Narinder Khanna',
    role: 'Independent Director',
    image: '/Munesh.webp',
    tags: ['M', 'M', 'M', 'M'],
    tagColors: ['bg-blue-600', 'bg-orange-500',]
  },
  {
    name: 'Mr. Ravi Shamlal Chawla',
    role: 'Managing Director & CEO',
    image: '/Ravi.webp',
    tags: ['M', 'M', 'M'],
    tagColors: ['bg-orange-600', 'bg-red-500', 'bg-blue-500']
  },
  {
    name: 'Mr. Nirvik Singh',
    role: 'Independent Director',
    image: '/Nirvik.webp',
    tags: ['M', 'M', 'M', 'M'],
    tagColors: ['bg-blue-600', 'bg-orange-500',]
  },
]

    return (
        <>
            <div className="min-h-screen mx-auto flex flex-col">
                <Navbar />
                <Hero />
                <About />
                <Anim />
                <HeroMomentum />
                <GlobalPartnership />
                <BoardOfDirectors data={directors} />
                <Footer />

            </div>
        </>
    )
}

export default App
