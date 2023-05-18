import { useState } from 'react'
import FormInput from './components/FormInput'
import Display from './components/Display'
import Arrow from './assets/Arrow'

export default function App() {
  const [calcYear, setCalcYear] = useState(0)
  const [calcMonths, setCalcMonths] = useState(0)
  const [calcDays, setCalcDays] = useState(0)
  return (
    <main className='flex bg-[#f0f0f0] h-screen justify-center items-center'>
      <div className='bg-white h-fit py-10 px-5 rounded-t-lg rounded-bl-lg rounded-br-[30%] w-[400px] max-w-lg'>
        <FormInput
          setCalcDays={setCalcDays}
          setCalcMonths={setCalcMonths}
          setCalcYear={setCalcYear}
        />
        <Display
          calcDays={calcDays}
          calcMonths={calcMonths}
          calcYear={calcYear}
        />
      </div>
    </main>
  )
}
