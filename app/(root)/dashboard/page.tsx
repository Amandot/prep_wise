import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="PrepWise" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-200">PrepWise</h1>
        </div>
        <nav className="flex gap-4 items-center">
          <span className="text-light-100">Welcome back!</span>
          <Link href="/">
            <Button className="btn-secondary">Logout</Button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-light-100">Start practicing with AI-powered mock interviews</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="card-border">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Start New Interview</h3>
              <p className="text-light-100 mb-4">Begin a new mock interview session</p>
              <Link href="/dashboard/new-interview">
                <Button className="btn-primary w-full">Start Interview</Button>
              </Link>
            </div>
          </div>

          <div className="card-border">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Practice History</h3>
              <p className="text-light-100 mb-4">Review your past interview sessions</p>
              <Link href="/dashboard/history">
                <Button className="btn-secondary w-full">View History</Button>
              </Link>
            </div>
          </div>

          <div className="card-border">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Feedback Reports</h3>
              <p className="text-light-100 mb-4">Analyze your performance feedback</p>
              <Link href="/dashboard/feedback">
                <Button className="btn-secondary w-full">View Reports</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card-border">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-dark-200 rounded-lg">
                <div>
                  <h3 className="text-white font-medium">Frontend Developer Interview</h3>
                  <p className="text-light-100 text-sm">React, TypeScript, JavaScript</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-200 font-semibold">85/100</p>
                  <p className="text-light-100 text-sm">2 days ago</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-dark-200 rounded-lg">
                <div>
                  <h3 className="text-white font-medium">Backend Developer Interview</h3>
                  <p className="text-light-100 text-sm">Node.js, Express, MongoDB</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-200 font-semibold">78/100</p>
                  <p className="text-light-100 text-sm">5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage