import React, {Component} from 'react'
import dynamic from 'next/dynamic'

import Layout from '../layout'
import Banner from '../views/Banner'
import Products from '../views/Products'
import AboutUs from '../views/AboutUs'
import Achievement from '../views/Achievement'
import Navigation  from '../views/Navigation'
import TopLine from '../views/TopLine'
import Contacts from '../views/Contacts'
import Footer from '../views/Footer'

const Map = dynamic(() => import("../views/Map"), {
  loading: () => '',
  ssr: true
})



class index extends Component {

  render(){
    return (
      <Layout>
        <header>
          <TopLine />
          <Navigation />
        </header>
        <Banner/>
        <Products />
        <AboutUs/>
        <Achievement />
        <Map/>
        <Contacts/>
        <Footer/>
      </Layout>
    )
  }
}
export default index
