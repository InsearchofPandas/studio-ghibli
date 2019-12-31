import React from 'react'

const Error = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/5 h-64 bg-yellow-lighter rounded-lg">
        <h2 className="text-center p-3">Error</h2>
        <p className="text-center"> The page you requested does not exist. </p>
      </div>
    </div>
  )
}

export default Error
