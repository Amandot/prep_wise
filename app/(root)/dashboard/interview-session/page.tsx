"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const InterviewSessionPage = () => {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const [sessionStarted, setSessionStarted] = useState(false)

  const mockQuestions = [
    "Tell me about yourself and your experience with frontend development.",
    "How do you handle state management in React applications?",
    "Explain the difference between var, let, and const in JavaScript.",
    "What are React Hooks and how do they work?",
    "How would you optimize the performance of a React application?",
    "Describe your experience with TypeScript and its benefits.",
    "How do you handle API calls in a React application?",
    "What testing strategies do you use for frontend applications?"
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (sessionStarted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0) {
      handleEndSession()
    }
    return () => clearTimeout(timer)
  }, [timeLeft, sessionStarted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleStartSession = () => {
    setSessionStarted(true)
    toast.success('Interview session started!')
  }

  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      toast.success('Moving to next question')
    } else {
      handleEndSession()
    }
  }

  const handleEndSession = () => {
    toast.success('Interview session completed!')
    router.push('/dashboard/feedback')
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    toast.success(isRecording ? 'Recording stopped' : 'Recording started')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-border">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="PrepWise" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-200">Interview Session</h1>
          <div className="text-light-100">
            Question {currentQuestion + 1} of {mockQuestions.length}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg font-mono text-primary-200">
            {formatTime(timeLeft)}
          </div>
          <Button onClick={handleEndSession} className="btn-secondary">
            End Session
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto">
        {!sessionStarted ? (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="card-border">
              <div className="card p-12 text-center max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
                <p className="text-light-100 mb-8 text-lg">
                  You're about to begin your mock interview session. Make sure you're in a quiet environment 
                  and have good lighting. The session will last 30 minutes.
                </p>
                <Button onClick={handleStartSession} className="btn-primary text-lg px-8 py-4">
                  Start Interview
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* AI Interviewer */}
            <div className="call-view">
              <div className="card-interviewer">
                <div className="avatar">
                  {isRecording && <div className="animate-speak"></div>}
                  <div className="text-4xl">🤖</div>
                </div>
                <h3>AI Interviewer</h3>
                <p className="text-center text-light-100">
                  {isRecording ? 'Listening...' : 'Ready for your answer'}
                </p>
              </div>

              <div className="card-border">
                <div className="card-content">
                  <h2 className="text-2xl font-bold text-white mb-4">Current Question</h2>
                  <p className="text-lg text-light-100 leading-relaxed">
                    {mockQuestions[currentQuestion]}
                  </p>
                </div>
              </div>
            </div>

            {/* Recording Controls */}
            <div className="transcript-border">
              <div className="transcript">
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    onClick={toggleRecording}
                    className={isRecording ? "btn-disconnect" : "btn-call"}
                  >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </Button>
                  <Button onClick={handleNextQuestion} className="btn-secondary">
                    Next Question
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="card-border">
              <div className="card p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-light-100">Progress</span>
                  <span className="text-light-100">
                    {currentQuestion + 1} / {mockQuestions.length}
                  </span>
                </div>
                <div className="w-full bg-dark-200 rounded-full h-3">
                  <div 
                    className="progress h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default InterviewSessionPage