import { cn } from '@/lib/utils'
import {  CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutDashboard } from 'lucide-react'
import EndCallButton from './EndCallButton'

type CallLayoutType = 'speaker-left' | 'speaker-right' | 'grid'

const MeetingRoom = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const isPersonalRoom = !!searchParams.get('personal');
    const [layout, setlayout] = useState<CallLayoutType>('grid')
    const [showParticipants, setShowParticipants] = useState(false)
    const CallLayout = () => {
        switch (layout) {
            case 'grid':
                return <PaginatedGridLayout/>
            
            case 'speaker-left':
                return <SpeakerLayout participantsBarPosition="right" />;

            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition="left" />;
            default:
                return <PaginatedGridLayout/>;
        }
    }

  return (
    <section className='relative h-screen w-full bg-blue-300 pt-4'>
        <div className="relative flex size-full items-center justify-center">
            <div className="flex size-full max-w-[1000px] items-center">
                <CallLayout/>
            </div>
            <div className={cn("h-[calc(100vh-86px)] hidden ml-2", {'show-block': showParticipants})}>
                <CallParticipantsList onClose={()=> setShowParticipants(false)}/>
            </div>
        </div>
        <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
            <CallControls onLeave={() => router.push('/dashboard')}/>
            <DropdownMenu>
                <div className="flex items-center">

                    <DropdownMenuTrigger className='cursor-pointer rounded-3xl bg-[#19232d] hover:bg-[#4c535b] p-2'>
                        <LayoutDashboard size={20}/>
                    </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                    {['Grid', 'Speaker-left', 'Speaker-right'].map((item, index) => (
                        <div key={index}>
                            <DropdownMenuItem
                                onClick={() => setlayout(item.toLowerCase() as CallLayoutType)}
                            >{item}</DropdownMenuItem>
                        </div>
                    ))}
                    
                    
                </DropdownMenuContent>
            </DropdownMenu>
            {!isPersonalRoom && <EndCallButton/>}
        </div>
    </section>
  )
}

export default MeetingRoom