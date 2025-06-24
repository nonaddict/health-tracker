import {useState} from "react"

function Tracker() {
    const [pushUps,setPushUps]=useState(localStorage.getItem("pushUps")||0)
    const [pullUps,setPullhUps]=useState(localStorage.getItem("pullUps")||0)
    function handlePushUpsChange(event){
        localStorage.setItem("pushUps",event.target.value)
        setPushUps(event.target.value)
    }
    function handlePullUpsChange(event){
        localStorage.setItem("pullUps",event.target.value)
        setPullhUps(event.target.value)
    }
    return (
        <div className='absolute bg-slate-400 border border-3 rounded-md shadow-md flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[60px]'>
            <label htmlFor="pull-ups">Pull-ups</label>
        <input  onChange={handlePullUpsChange} value={pullUps} id="pull-ups" className='focus:outline-none border shadow-md rounded-md p-[10px] h-[35px] w-[calc(170px+1.5vw)] mb-[10%]' type="number" placeholder="number of pull-ups" />
            <label htmlFor="push-ups">Push-ups</label>
        <input onChange={handlePushUpsChange} value={pushUps} id="push-ups" className='focus:outline-none border shadow-md p-[10px] rounded-md h-[35px] w-[calc(170px+1.5vw)]' type="number" placeholder="number of push-ups" />
        </div>
    )
}

export default Tracker
