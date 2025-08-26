import { DashboardProps } from '@/app/dashboard/types';
import React from 'react'
import CountUp from './CountUp';
import { CardSpotlight } from '../ui/card-spotlight';

function Dashboard({ blogCount, testimonialCount }: DashboardProps) {
  return (
    <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardSpotlight className="bg-black p-6 rounded-lg border border-gray-800">
                <h2 className="relative text-xl font-semibold text-gray-300 mb-2">Total Blogs</h2>
                <p className="relative text-5xl font-bold text-[#0AF5AD]"><CountUp end={blogCount} /></p>
            </CardSpotlight>
            <CardSpotlight className="bg-black p-6 rounded-lg border border-gray-800">
                <h2 className="relative text-xl font-semibold text-gray-300 mb-2">Total Testimonials</h2>
                <p className="relative text-5xl font-bold text-[#0AF5AD]"><CountUp end={testimonialCount} /></p>
            </CardSpotlight>
        </div>
    </div>
  )
}

export default Dashboard