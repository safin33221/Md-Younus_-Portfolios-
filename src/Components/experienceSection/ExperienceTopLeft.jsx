import React from 'react'
import ExperienceInfo from './ExperienceInfo';

const ExperienceTopLeft = () => {
  return (
     <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-amber-500 font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="20+" text="Projects" />
      </div>
      <p className="text-center">
        With 3 years of experience in digital marketing, social media advertising, content strategy and brand growth
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  )
}

export default ExperienceTopLeft