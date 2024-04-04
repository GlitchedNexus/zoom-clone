'use client'

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
// 
// Since we do not know the route name before time
// we will use dynamic routes so generate them dynamically
// when they are required and when we have necessary information
// in this case we do not know the meeting IDs. 
// 
const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}> 
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
            ) : (
            <MeetingRoom  />
          )}

        </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting