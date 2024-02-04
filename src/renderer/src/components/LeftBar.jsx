import React, { useEffect } from 'react'

let arr = []
for(let i=0;i<10;i++)
    arr.push(i)
const LeftBar = ({setQuestionNo}) => {
  return (
    <div className='flex items-start justify-center mb-8 h-screen'>
        <div className='flex w-72 h-[75%] flex-col flex-wrap gap-4 ml-4 bg-slate-200 justify-start items-center py-6 rounded-lg'>
            <div className='flex gap-4 justify-start flex-wrap p-4'>
            {arr.map((ele)=>{
                return(
                    <button key={ele} className='border-2 border-rose-600 px-2 text-rose-600 font-semibold rounded-md w-8' onClick={() => setQuestionNo(ele)}>{ele+1}</button>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default LeftBar