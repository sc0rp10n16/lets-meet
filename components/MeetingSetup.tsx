'use client'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) => {
    const [isCamMicOn, setIsCamMicOn] = useState(false)

    const call = useCall()

    if(!call){
        throw new Error('Call is not available')
    }

    useEffect(()=>{
        if(isCamMicOn){
            call?.camera.disable();
            call?.microphone.disable();
        }
        else{
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isCamMicOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
            <label className='flex items-center justify-center gap-2 font-medium text-black'>
                <input type="checkbox"
                    checked={isCamMicOn}
                    onChange={(e)=>setIsCamMicOn(e.target.checked)}
                />
                Join with camera and microphone off
            </label>
            <DeviceSettings />
        </div>
        <Button className='rounded-md bg-blue-500 px-4 py-2.5'
            onClick={()=>{
                call?.join()
                setIsSetupComplete(true)
            }}
        >
            Join Now
        </Button>
    </div>
  )
}

export default MeetingSetup