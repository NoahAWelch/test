import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'

export default function products() {
  return ( 
    <div>
    <Navbar />
    <PageTitle title="Products" />
    <PageContent content="Content" />
  </div>
  )
}
