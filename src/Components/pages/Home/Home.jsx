import AppDownload from '../../AppDownload/AppDownload'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Header from './Header/Header'
import './Home.css'
import React, { useState } from 'react'

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category = {category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
