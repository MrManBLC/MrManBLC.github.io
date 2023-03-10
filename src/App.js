import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Carousel, CarouselItem } from './Carousel';
import { ResumePage } from './topics/ResumePage';
import { AboutPage } from './topics/AboutPage';
import { GamesPage } from './topics/GamesPage';

function App() {
  const topicIndex = useState(0);

  return (
    <div className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute h-full w-full bg-gradient-to-br from-platinum to-lavender -z-10"/>

      <div className="grid grid-cols-6 grid-rows-1 h-full">

        {/* Nav Bar Container */}
        <div className="h-full w-full bg-gradient-to-b from-lilac to-space-cadet-400 rounded-r-3xl">
          <NavBar className="" itemSelected={topicIndex}/>
        </div>

        {/* Content Container */}
        <div className="col-span-5 w-auto p-3 h-full">
          <div className="rounded-3xl h-full overflow-y-auto overflow-x-auto p-5 w-full" style={{boxShadow: "0px 0px 10px #6176A8"}}>
              
            <Carousel displayIndex={topicIndex[0]} setDisplayIndex={topicIndex[1]}>

              <CarouselItem> <AboutPage/> </CarouselItem>
              
              <CarouselItem> <ResumePage/> </CarouselItem>

              <CarouselItem> <GamesPage/> </CarouselItem>
            
            </Carousel>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;