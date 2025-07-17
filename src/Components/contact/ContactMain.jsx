import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'
import SectionTitle from '../common/SectionTitle'

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1400px] mx-auto items-center justify-center mt-[50px]  "
    >
      <SectionTitle title={`Contact`}/>
      <div className="  grid grid-cols-1 lg:grid-cols-2  bg-zinc-900 p-8  lg:flex-row flex-col">
        <ContactRight />
        <ContactLeft />
      </div>
    </div>
  )
}

export default ContactMain