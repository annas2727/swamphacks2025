import React from 'react'

function Dashboard() {
    return (
    <>
<div className="grid grid-cols-6 grid-rows-7 gap-4 min-h-screen">
    <div className="col-span-4 col-start-2 text-center border-2 rounded-sm">DashBoard</div>
    <div className="col-span-2 row-span-2 col-start-2 row-start-2 text-center border-2 rounded-sm">Last Check</div>
    <div className="col-span-2 row-span-2 col-start-4 row-start-2 text-center border-2 rounded-sm">Fire Probability</div>
    <div className="col-span-4 row-span-2 col-start-2 row-start-4 text-center border-2 rounded-sm">Weather</div>
    <div className="col-span-4 row-span-2 col-start-2 row-start-6 text-center border-2 rounded-sm">Contact Authorities</div>
</div>
     </>
    )
}

export default Dashboard