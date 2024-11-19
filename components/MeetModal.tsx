import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MeetModalProps{
    isOpen: boolean,
    onClose: () => void,
    title: string,
    buttonLabel: string,
    className?: string,
    handleClick: () => void,
    buttonIcon?: React.ReactNode,
    children?: React.ReactNode,
    image?: string
}

const MeetModal = ({isOpen, onClose, title, buttonLabel, className, handleClick, buttonIcon, children, image}:MeetModalProps ) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  
  <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-gray-200 px-6 py-9'>
    <div className="flex flex-col gap-6">
        {image && (
            <div className='flex justify-center'>
                <Image src={image} alt='image' width={72} height={72} />
            </div>
        )}
        <DialogTitle className={cn('text-3xl font-bold leading-[40px]', className)}>
            {title}
        </DialogTitle>
        {children}
        <Button className='bg-blue-600 hover:bg-blue-700' onClick={handleClick}>{buttonLabel}</Button>
    </div>
  </DialogContent>
</Dialog>

  )
}

export default MeetModal