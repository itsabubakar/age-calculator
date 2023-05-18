const Display = ({ calcYear, calcDays, calcMonths }) => {
    console.log(calcYear);
    return (
        <div>
            <div className="">
                <p className="font-bold italic text-[55px] -mt-8"> <span className="text-[#854dff] text-[65px]">{calcYear ? calcYear : '--'}</span> years</p>
                <p className="font-bold italic text-[55px] -mt-8"><span className="text-[#854dff] text-[65px]">{calcMonths ? calcMonths : '--'}</span> months</p>
                <p className="font-bold italic text-[55px] -mt-8"><span className="text-[#854dff] text-[65px]">{calcDays ? calcDays : '--'}</span> days</p>
            </div>
        </div>
    )
}
export default Display