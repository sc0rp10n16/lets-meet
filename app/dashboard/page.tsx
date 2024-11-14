import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { CalendarPlus, UserPlus, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

export default function DashboardHome() {
  return (
    
        <div className="min-h-screen">
          <Navbar />
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome to Lets Meet</h1>
              <p className="mt-3 text-xl text-gray-600">Create, Join or Schedule your meetings using Lets Meet</p>
            </div>
            <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Create Meeting */}
              <div className="bg-gray-200 overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md mb-4">
                    <Video className="h-6 w-6 text-blue-500"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold text-gray-900">Create Meeting</h3>
                  <p className="mt-2 text-gray-600">Start an instant meeting</p>
                  <Button className="mt-4 font-medium w-full inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm bg-blue-600 hover:bg-blue-700">
                    Start Now
                  </Button>
                  </div>
                </div>
              </div>
              {/* Join Meeting */}
              <div className="bg-gray-200 overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md mb-4">
                    <UserPlus className='h-6 w-6 text-blue-600'/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold text-gray-900">Join Meeting</h3>
                  <p className="mt-2 text-gray-600">Paste the meeting URL to join the meeting</p>
                  <Button asChild className="mt-4 font-medium w-full inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm bg-blue-600 hover:bg-blue-700">
                    <Dialog>
                      <DialogTrigger className="mt-4 font-medium w-full inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">Join Now</DialogTrigger>
                      <DialogContent className="rounded-md">
                        <DialogHeader>
                          <DialogTitle>Enter Meeting URL</DialogTitle>
                          
                        </DialogHeader>
                        
                        <Input className=" bg-blue-200"/>
                        <Button className="bg-blue-600 hover:bg-blue-700 ">Join Now</Button>
                      </DialogContent>
                    </Dialog>
                  </Button>
                  </div>
                </div>
              </div>
              {/* Schedule Meeting */}
              <div className="bg-gray-200 overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md mb-4">
                    <CalendarPlus className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold text-gray-900">Schedule Meeting</h3>
                  <p className="mt-2 text-gray-600">Schedule a Meet</p>
                  <Dialog>
                      <DialogTrigger className="mt-4 font-medium w-full inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">Schedule Now</DialogTrigger>
                      <DialogContent className="rounded-md">
                        <DialogHeader>
                          <DialogTitle>Pick a date</DialogTitle>
                          
                        </DialogHeader>
                        
                        {/* Calandar */}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  );
}

