import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-lg">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-base font-semibold leading-7 text-blue-600">Lets connect the world</h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Seamless video Calls Anytime, Anywhere</p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Introducing{" "}
              <span className="font-bold text-blue-600">Lets Meet</span>
              <br />
              Experience seamless, high quality video calls with your friends and family. Lets Meet is a video call application that allows you to connect with your loved ones anytime, anywhere.
            </p>
          </div>
          <SignedIn>
            <Button className="mt-10">
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
            {/* <SignOutButton/> */}
          </SignedIn>
          <SignedOut>
            <Button asChild className="mt-10">
              <SignInButton/>
            </Button>
            
          </SignedOut>
        </div>
      </div>
    </main>
    // sm, lg, md, xl, 2xl, 3xl ...
  );
}

