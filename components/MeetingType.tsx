'use client'
import React, { useState } from 'react'
import MeetingTypeCard from './MeetingTypeCard'
import { CalendarPlus, UserPlus, Video } from 'lucide-react'
import MeetModal from './MeetModal'
// Client Side Rendering & Server Side Rendering
const MeetingType = () => {
    const [meetState, setMeetState] = useState<'isCreateMeeting' | 'isJoinMeeting' | 'isScheduleMeeting' | undefined >()

    const createMeeting=() => {
        console.log('Meeting Created')
        // TODO: Add API call to create meeting
    }
  return (
    <section className='grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <MeetingTypeCard
            icon={<Video className='text-blue-500'/>}
            title="Create Meeting"
            description="Start an instant meeting"
            buttonLabel="Start Now"
            handleClick={()=>setMeetState('isCreateMeeting')
                
            }
            
         />
        <MeetingTypeCard
            icon={<UserPlus className='text-blue-500'/>}
            title="Join Meeting"
            description="Paste the meeting URL to join the meeting"
            buttonLabel="Join Now"
            handleClick={()=>setMeetState('isJoinMeeting') }
         />
        <MeetingTypeCard
            icon={<CalendarPlus className='text-blue-500'/>}
            title="Schedule Meeting"
            description="Pick a date and time to schedule a meeting"
            buttonLabel="Schedule Now"
            handleClick={()=>setMeetState('isScheduleMeeting') }
         />
         <MeetModal
            isOpen={meetState==='isCreateMeeting'}
            onClose={()=>setMeetState(undefined)}
            title="Start an instant meeting"
            buttonLabel="Start Meeting"
            className="text-center text-gray-800"
            handleClick={createMeeting}
         />
    </section>
  )
}

export default MeetingType