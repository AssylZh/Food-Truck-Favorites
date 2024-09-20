import './App.css';
import Board from './components/Cards'
import React from 'react';


const resources = [
  { 
    title: "Birria-Landia", 
    description: "Mexican", 
    link: "http://ww12.thebirrialandia.com/menu/?usid=27&utid=8207005301", 
    image: "src/pics/1.webp" 
  },
  { 
    title: "Mysttik Masala", 
    description: "Indian", 
    link: "https://indianfoodny.com/", 
    image: "src/pics/2.png" 
  },
  { 
    title: "The Halal Guys", 
    description: "Middle Eastern", 
    link: "https://thehalalguys.com/menu/", 
    image: "src/pics/3.webp" 
  },
  { 
    title: "NY Dosas", 
    description: "Vegetarian", 
    link: "https://nydosas.com/menu/", 
    image: "src/pics/4.jpg" 
  },
  { 
    title: "Jerk Pan", 
    description: "Jamaican", 
    link: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/", 
    image: "src/pics/5.jpg" 
  },
  { 
    title: "Tong", 
    description: "Bangladeshi", 
    link: "https://www.facebook.com/Bangladeshistreetfoods/", 
    image: "src/pics/6.jpg" 
  },
  { 
    title: "King Souvlaki of Astoria", 
    description: "Greek", 
    link: "https://kingsouvlakinyc.com/", 
    image: "src/pics/7.jpg" 
  },
  { 
    title: "Ling's Sweet Mini Cakes", 
    description: "Chinese", 
    link: "https://canalstreet.market/", 
    image: "src/pics/8.jpg" 
  },
  { 
    title: "Uncle Gussy's", 
    description: "Greek", 
    link: "https://unclegussys.com/menus/", 
    image: "src/pics/9.jpg" 
  },
  { 
    title: "Patacon Pisao", 
    description: "Venezuelan", 
    link: "https://www.pataconpisaonyc.com/menus/", 
    image: "src/pics/10.jpg" 
  },
];

function App() {
  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <Board resources={resources} />
    </div>
  );
}

export default App;
