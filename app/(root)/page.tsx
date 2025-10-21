import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="PrepWise" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-200">PrepWise</h1>
        </div>
        <nav className="flex gap-4">
          <Link href="/Sign-in">
            <Button className="btn-secondary">Sign In</Button>
          </Link>
          <Link href="/Sign-up">
            <Button className="btn-primary">Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Master Your Next
            <span className="text-primary-200"> Interview</span>
          </h1>
          <p className="text-xl text-light-100 mb-8 leading-relaxed">
            Practice with AI-powered mock interviews tailored to your role and tech stack.
            Get detailed feedback and improve your interview skills.
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <Link href="/Sign-up">
              <Button className="btn-primary text-lg px-8 py-4">
                Start Practice Interview
              </Button>
            </Link>
            <Link href="/Sign-in">
              <Button className="btn-secondary text-lg px-8 py-4">
                Sign In to Continue
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <div className="card-border">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Interviews</h3>
              <p className="text-light-100">Conduct realistic mock interviews with intelligent AI agents</p>
            </div>
          </div>
          
          <div className="card-border">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Feedback</h3>
              <p className="text-light-100">Get comprehensive analysis and improvement suggestions</p>
            </div>
          </div>
          
          <div className="card-border">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Role-Specific Questions</h3>
              <p className="text-light-100">Questions tailored to your target role and tech stack</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-light-100">
        <p>&copy; 2024 PrepWise. Built for interview success.</p>
      </footer>
    </div>
  )
}

export default page
