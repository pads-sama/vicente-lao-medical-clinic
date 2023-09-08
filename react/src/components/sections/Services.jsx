import ServiceCard from '../core/ServiceCard'
import { mobileCheckup, mobileConfinement, mobileHomeMedication, mobileHospitalization } from '../../asset/mobile';
import { BuildingOffice2Icon, BuildingOfficeIcon, ClipboardDocumentCheckIcon, HomeIcon } from '@heroicons/react/24/solid'

const Services = () => {
  return (
    <>
        <div className='px-5 py-10 bg-white | md:px-14' id="services" data-aos="fade-up">
            <h1 className='py-5 text-3xl font-bold text-center'>Our Services</h1>
            <div className='md:flex md:space-x-10'>
                <ServiceCard
                    image={ mobileCheckup }
                    altText='image for general checkup'
                    icon={<ClipboardDocumentCheckIcon className='text-secondaryColor  w-[70px] h-auto ' /> }
                    title='General Checkup'
                    description='A physical examination is conducted to look for any signs of health issues. Depending on your age and risk factors, you may also have various tests and screenings. '
                />
                <ServiceCard
                    image={ mobileConfinement }
                    altText='image for confinement'
                    icon={<BuildingOfficeIcon className='text-secondaryColor  w-[70px] h-auto ' />}
                    title='Confinement'
                    description='Patient stays in a hospital for medical treatment, care, or observation. During this time, individuals receive medical attention from healthcare professionals to diagnose, treat, or manage health conditions.'
                />
                <ServiceCard
                    image={ mobileHospitalization }
                    altText='image for hospitalization'
                    icon={<BuildingOffice2Icon className='text-secondaryColor  w-[70px] h-auto ' />}
                    title='Hospitalization'
                    description='Involves admitting a patient to a hospital for medical care and treatment. It is typically necessary for serious illnesses, surgeries, or medical procedures that require close monitoring, specialized equipment, or round-the-clock medical attention.'
                />
                <ServiceCard
                    image={ mobileHomeMedication }
                    altText='image for home medication'
                    icon={<HomeIcon className='text-secondaryColor  w-[70px] h-auto '/>}
                    title='Home Medication'
                    description='Practice of taking prescribed or over-the-counter medications at home, as directed by a healthcare provider.  Proper adherence to medication instructions is essential for achieving positive health outcomes and maintaining overall well-being.'
                />
            </div>
        </div>
    </>
  )
}

export default Services