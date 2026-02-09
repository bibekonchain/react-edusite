import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
return (
<>
<Navbar />
<Hero />


<main className="container">
<section className="section">
<Title subTitle="OUR PROGRAMS" Title="What We Offer" />
<Programs />
</section>


<section className="section alt">
<About />
</section>


<section className="section">
<Title subTitle="GALLERY" Title="Campus Life" />
<Campus />
</section>


<section className="section alt">
<Title subTitle="TESTIMONIALS" Title="What Students Say" />
<Testimonials />
</section>


<section className="section">
<Title subTitle="CONTACT" Title="Get In Touch" />
<Contact />
</section>
</main>


<Footer />
</>
)
}


export default App
