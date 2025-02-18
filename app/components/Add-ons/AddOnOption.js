import React from 'react'

const AddOnOption = ({addOnOptions, addOnDescription, addOnPrice}) => {
  return (
    <div className='flex w-[21rem] border border-black-400 rounded p-4 items-center mt-3'>
      <input className='cursor-pointer' type='checkbox' name={addOnOptions} />
      <div className='ml-4'>
        <div className='font-bold'>{addOnOptions}</div>
        <p className='text-slate-400'>{addOnDescription}</p>
      </div>
      <div className='text-blue-600 ml-auto'>+${addOnPrice}/mo</div>
    </div>
  )
}

export default AddOnOption