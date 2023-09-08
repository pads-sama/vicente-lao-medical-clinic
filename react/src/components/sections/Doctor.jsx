import DoctorCard from "../core/DoctorCard"

const Doctor = () => {
  return (
    <>
        <div className="py-5">
        <h1 className="py-10 text-3xl font-bold text-center font-roboto  | md:py-20" id="doctor" data-aos="fade-up">Our Doctor</h1>
        <DoctorCard name='Vicente Lao' title='General Practitioner' quote="Good health is a treasure, a compass guiding life's journey. It's the harmony of body and mind, the rhythm of vitality. Nourish it with care, for in health, we find the strength to embrace life's adventures."/>
        </div>
    </>
  )
}

export default Doctor