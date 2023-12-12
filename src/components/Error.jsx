import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
        <div className='bg-red-800 p-5 mb-5 font-bold text-white uppercase rounded-lg text-center'>
            <p>{mensaje}</p>
        </div>
    </div>
  )
}

export default Error
