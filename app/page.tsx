import AppointmentSelection from "@/components/appointment-selection/AppointmentSelection";
import HairdresserSelection from "@/components/hairdresser-selection/HairdresserSelection";
import ServiceSelection from "@/components/service-selection/ServiceSelection";


export default function Home() {
  console.log('HOME')
  return (
    <div className='bg-gray-100 w-full h-full p-5 '>
      dasfadfa
      <br></br>
      <HairdresserSelection></HairdresserSelection>
      <ServiceSelection></ServiceSelection>
      <AppointmentSelection></AppointmentSelection>
    </div>
  )
}
