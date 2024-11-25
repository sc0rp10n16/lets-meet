'use client'
import React, { useState } from 'react'
import MeetingTypeCard from './MeetingTypeCard'
import { CalendarPlus, UserPlus, Video } from 'lucide-react'
import MeetModal from './MeetModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import ReactDatePicker from 'react-datepicker'

// Client Side Rendering & Server Side Rendering
const MeetingType = () => {
    const router = useRouter()
    const [meetState, setMeetState] = useState<'isCreateMeeting' | 'isJoinMeeting' | 'isScheduleMeeting' | undefined >()
    const [values, setValues] = useState({
      dateTime: new Date(),
      description: '',
      link: '',
    })
    const [callDetails, setCallDetails] = useState<Call>()

    const {user} = useUser();
    const client = useStreamVideoClient();

    const createMeeting= async () => {
        console.log('Meeting Created')
        // TODO: Add API call to create meeting
        if(!client || !user) return;

        try {
          const id = crypto.randomUUID();
          const call = client.call('default', id)

          if(!call) throw new Error('Call not created');

          const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
          const description = values.description || 'Instant Meeting';

          await call.getOrCreate({
            data: {
              starts_at: startsAt,
              custom: {
                description
              }
            }
          })
          setCallDetails(call)

          if(!values.description ) {
            router.push(`/meeting/${id}`);
          }
        } catch (error) {
            console.error(error)
          
        }

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
         <MeetModal
          isOpen={meetState==='isJoinMeeting'}
          onClose={()=>setMeetState(undefined)}
          title='Type the link to join the meeting'
          className="text-center text-gray-800"
          buttonLabel='Join Meeting'
          handleClick={() => router.push(values.link)}
         >
          <Input
            placeholder='Meeting Link'
            onChange={(e)=>setValues({...values, link: e.target.value })}
          />
         </MeetModal>
         {!callDetails ? (
          <MeetModal
            isOpen={meetState==='isScheduleMeeting'}
            onClose={()=>setMeetState(undefined)}
            title='create meeting'
            handleClick={createMeeting}
            buttonLabel='Schedule Meeting'
          >
            <div className="flex flex-col gap-2.5">
              <label className='text-base font-normal'>Add a description</label>
              <Textarea
                className='border-none focus-visible:ring-0 focus-visible:ring-offset-0'
                onChange={(e) => setValues({...values, description: e.target.value})}
              />
            </div>
            <div className="flex w-full flex-col">
              <label className='text-base font-normal'>Select Date and time</label>
              <ReactDatePicker
                selected={values.dateTime}
                onChange={(date) => setValues({...values, dateTime: date!})}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                timeCaption='time'
                dateFormat='MMMM d, yyyy h:mm aa'
                className='w-full rounded focus:outline-none'
              />
            </div>
          </MeetModal>
         ) : (
          <MeetModal
            isOpen={meetState==='isScheduleMeeting'}
            onClose={()=>setMeetState(undefined)}
            title='Meeting Scheduled'
              
            handleClick={() => {
              // navigator.clipboard.writeText(meetingLink)

            }}
            image='/checked.svg'
            buttonLabel='Copy Meeting Link'
            className='text-center text-gray-800'
          />
         )}
    </section>
  )
}

export default MeetingType