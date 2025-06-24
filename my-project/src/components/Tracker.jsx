import {useState,useEffect} from "react"

function Tracker() {

    const [pushUps,setPushUps]=useState(()=>Number(localStorage.getItem("pushUps"))||0)
    const [pullUps,setPullUps]=useState(()=>Number(localStorage.getItem("pullUps"))||0)

    function handlePushUpsChange(event){
        setPushUps(Number(event.target.value))
    }
    function handlePullUpsChange(event){
        setPullUps(Number(event.target.value))
    }

    useEffect(()=>{
        localStorage.setItem("pullUps",pullUps)
    },[pullUps])

    useEffect(()=>{
        localStorage.setItem("pushUps",pushUps)
    },[pushUps])

    function handleReset(){
        setPullUps(0)
        setPushUps(0)
    }
    return (
        <div className='absolute bg-slate-400 border border-3 rounded-md shadow-md flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[60px]'>
            <label htmlFor="pull-ups">Pull-ups</label>
        <input min={0} onChange={handlePullUpsChange} value={pullUps} id="pull-ups" className='focus:outline-none border shadow-md rounded-md p-[10px] h-[35px] w-[calc(170px+1.5vw)] mb-[10%]' type="number" placeholder="number of pull-ups" />
            <label htmlFor="push-ups">Push-ups</label>
        <input min={0} onChange={handlePushUpsChange} value={pushUps} id="push-ups" className='focus:outline-none border shadow-md p-[10px] rounded-md h-[35px] w-[calc(170px+1.5vw)]' type="number" placeholder="number of push-ups" />
        <button onClick={handleReset} className="mt-[30px] border bg-white shadow-md rounded w-[100px] text-center relative left-1/2 -translate-x-1/2 active:scale-105">Reset</button>
        </div>
    )
}

export default Tracker
