import { experiences } from '../../constants';


import SingleExperience from './SingleExperience';


const AllExperience = () => {
  return (
    <div className='mx-auto'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {experiences.map((experience, index) => {
          return (

            <SingleExperience key={index} experience={experience} />

          );
        })}
      </div>
    </div>
  )
}

export default AllExperience