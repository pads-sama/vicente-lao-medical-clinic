import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/solid"
import UserPageComponent from "../../components/pageComponents/UserPageComponent"

const Dashboard = () => {
  return (
    <UserPageComponent title='Dashboard'>
      <div className="w-full h-96 px-5 pt-5 font-roboto text-darkText">
          <div>
            <p className="text-xs uppercase underline text-secondaryColor">Welcome to Vicente Lao, Medical Clinic</p>
            <h1 className="text-2xl mt-2 font-bold | md:text-3xl md:mt-5">Hello, Alexander</h1>
            <p className="text-md">We're here to support you on your journey to a healthier, happier life.</p>
          </div>
          <div className="w-full flex space-x-16">
          <div className="w-60 h-auto mt-5 | md:mt-10">
            <p className="text-xs">We understand that your health is important, and we're here to make scheduling appointments as convenient as possible. Click the button to set up appointment</p>
            <button className="px-5 py-2 bg-secondaryColor flex items-center text-textColor rounded-md text-sm mt-3 shadow-md | hover:bg-secondaryColor/70 hover:text-black/80">
              <PlusIcon className="w-5 h-5"/>
              Set Appointment
            </button>
          </div>
          <div className="w-60 h-auto mt-5 | md:mt-10">
            <p className="text-xs">A medical chart provides a concise and visual summary of a patient's key health data</p>
            <button className="px-5 py-2 bg-transparent border-[1px] border-secondaryColor flex items-center text-darkText rounded-md text-sm mt-3 shadow-md | hover:bg-secondaryColor/70 hover:text-textColor md:mt-[45px]">
              <PencilSquareIcon className="w-5 h-5"/>
              Edit Medical Chart
            </button>
          </div>
          </div>

      </div>
    </UserPageComponent>
  )
}

export default Dashboard