import React from 'react'

const MeetingPage = ({params}: {params: {id: string} }) => {
  return (
    // TODO: Create a meeting page
    <div >
        <h1>Welcome to Meeting</h1>
        <p>Meeting ID: {params.id}</p>
    </div>
  )
}

export default MeetingPage