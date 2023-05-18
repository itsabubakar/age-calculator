import { useState } from "react"
import Arrow from "../assets/Arrow"

const FormInput = ({ setCalcDays, setCalcMonths, setCalcYear }) => {

    const [year, setYear] = useState()
    const [months, setMonths] = useState()
    const [days, setDays] = useState()

    const [fieldError, setfieldError] = useState({
        day: true,
        month: true,
        year: true
    })

    const age = () => {

        let date = new Date()
        let dayTwo = date.getDate()
        let monthTwo = 1 + date.getMonth()
        let yearTwo = date.getFullYear()
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


        if (days > dayTwo) {
            dayTwo = dayTwo + month[monthTwo - 1]
            monthTwo = monthTwo - 1
        }
        if (months > monthTwo) {
            monthTwo = monthTwo + 12
            yearTwo = yearTwo - 1
        }

        let d = dayTwo - days
        let m = monthTwo - months
        let y = yearTwo - year

        setCalcYear(y)
        setCalcMonths(m)
        setCalcDays(d)
    }


    return (
        <div>
            <form className="flex">
                <div className="flex flex-col">
                    <label className={`text-[11px] tracking-[1.7px] font-bold ${fieldError.day ? '' : 'text-red-500'}`} htmlFor="DAY">DAY</label>
                    <input placeholder="DD" onChange={(e) => setDays(e.target.value)} className={`h-fit mt-2 rounded-md py-2 px-2 outline-none max-w-[80px] font-bold border mr-4 hover:ring-[#141414] hover:ring-1 hover:border-[#141414] ${fieldError.day ? '' : 'border-red-500'}`} type="text" />
                    <span className={`${fieldError.day ? 'hidden' : 'text-red-500 text-[10.5px] italic mt-2'}`}>All fields required</span>
                </div>
                <div className="flex flex-col">
                    <label className={`text-[11px] tracking-[1.7px] font-bold ${fieldError.month ? '' : 'text-red-500'}`} htmlFor="MONTH">MONTH</label>
                    <input placeholder="MM" onChange={(e) => setMonths(e.target.value)} className={`h-fit mt-2 rounded-md py-2 px-2 outline-none max-w-[80px] font-bold border mr-4 hover:ring-[#141414] hover:ring-1 hover:border-[#141414] ${fieldError.month ? '' : 'border-red-500'}`} type="text" />
                    <span className={`${fieldError.month ? 'hidden' : 'text-red-500 text-[10.5px] italic mt-2'}`}>All fields required</span>

                </div>
                <div className="flex flex-col">
                    <label className={`text-[11px] tracking-[1.7px] font-bold ${fieldError.year ? '' : 'text-red-500'}`} htmlFor="YEAR">YEAR</label>
                    <input placeholder="YYYY" onChange={(e) => setYear(e.target.value)} className={`h-fit mt-2 rounded-md py-2 px-2 outline-none max-w-[80px] font-bold border hover:ring-[#141414] hover:ring-1 hover:border-[#141414] ${fieldError.year ? '' : 'border-red-500'}`} type="text" />
                    <span className={`${fieldError.year ? 'hidden' : 'text-red-500 text-[10.5px] italic mt-2'}`}>All fields required</span>

                </div>
            </form>
            <div className='flex items-center'>
                <div className='h-[1px] w-full bg-[#dbdbdb]'></div>
                <button onClick={age} className='bg-[#854dff] hover:bg-[#141414] flex justify-center rounded-full py-3 w-14 cursor-pointer'>
                    <Arrow />
                </button>
            </div>
        </div>
    )
}
export default FormInput