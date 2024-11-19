import React from 'react'
import { Button } from './ui/button';

interface MeetingTypeCardProps{
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonLabel: string;
    handleClick: () => void;
}

const MeetingTypeCard = ({icon, title, description, buttonLabel, handleClick}: MeetingTypeCardProps) => {
  return (
    <div className='bg-gray-200 overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 hover:bg-gray-300' onClick={handleClick}>
        <div className='p-6'>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md mb-4">
                {icon}
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600">
                    {description}
                </p>
                <Button className='mt-4 font-medium w-full inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm bg-blue-600 hover:bg-blue-700'>{buttonLabel}</Button>
            </div>
        </div>
    </div>
  )
}

export default MeetingTypeCard