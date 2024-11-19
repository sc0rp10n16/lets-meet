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
import MeetingType from "@/components/MeetingType";

export default function DashboardHome() {
  return (
    
        <div className="min-h-screen">
          <Navbar />
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome to Lets Meet</h1>
              <p className="mt-3 text-xl text-gray-600">Create, Join or Schedule your meetings using Lets Meet</p>
            </div>
              <MeetingType />
            
          </div>
        </div>
    
  );
}

