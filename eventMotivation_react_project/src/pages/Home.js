import React from 'react'
import Footermenu from './main/Footermenu';
import Mainmenu from './main/Mainmenu';
import Banner from './page_component/Banner';
import Counter from './page_component/Counter';
import About from './page_component/About';
import Profile from './page_component/Profile';
import Schedule_c from './page_component/Schedule_c';
import Speaker_c from './page_component/Speaker_c';
import Sponsors from './page_component/Sponsors';
import Vaneue from './page_component/Vaneue';
import News from './page_component/News';
import Feature from './page_component/Feature';
import Pricing from './page_component/Pricing';



 function Home() {
  return (
    <>

<Mainmenu/>
  {/* =============Banner section Start=========== */}
 <Banner/>
  {/* =============Banner section End=========== */}


  {/* =============Counter section Start=========== */}
  <Counter/>
  {/* =============Counter section End=========== */}



  {/* =============About section Start=========== */}
  <About/>
 {/* =============About section End=========== */}



 {/* =============Profile section Start=========== */}
 <Profile/>
{/* =============Profile section End=========== */}


{/* =============Feature section Start=========== */}
<Feature/>
{/* =============Feature section End=========== */}


{/* =============Schedule section Start=========== */}
  <Schedule_c/>
{/* =============Schedule section End=========== */}



{/* =============Pricing section Start=========== */}
  <Pricing/>
{/* =============Pricing section End=========== */}



{/* =============Speaker section Start=========== */}
  <Speaker_c/>
{/* =============Speaker section End=========== */}



{/* =============Sponsors section Start=========== */}
 <Sponsors/>
{/* =============Sponsors section End=========== */}


{/* =============Vaneue section Start=========== */}
  <Vaneue/>
{/* =============Vaneue section End=========== */}




{/* =============News section Start=========== */}
  <News/>
{/* =============News section End=========== */}

  
  <Footermenu/>
    </>
  )
}
 export default Home;