import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import Logo from "./imports/Logo-1-68";
import { useState } from "react";
import {
  MessageCircle,
  Brain,
  Volume2,
  TrendingUp,
  Shield,
  Mic,
  Type,
  Heart,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Download,
  Apple
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-teal-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-sm border-b border-orange-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <Logo />
            </div>
            <img src="/images/icon.png" alt="Aluuna" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-orange-700 hover:text-orange-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-orange-700 hover:text-orange-900 transition-colors">How It Works</a>
            <a href="#beta-testing" className="text-orange-700 hover:text-orange-900 transition-colors">Beta Testing</a>
            <a href="#pricing" className="text-orange-700 hover:text-orange-900 transition-colors">Pricing</a>
            <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
              Join the Beta
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pb-20 pt-10 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-gradient-to-r from-orange-50 to-teal-50 text-gray-700 border border-orange-200/50 shadow-sm">
            Available on iOS & Android
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-quicksand" style={{ color: '#353535' }}>
            <img src="/images/logo.png" alt="Aluuna" className="h-20 w-auto mx-auto" />
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-quicksand" style={{ color: '#353535' }}>
            Your AI Therapy Companion That{" "}
            <span className="inline-block bg-gradient-to-r from-orange-500 via-teal-500 to-purple-600 bg-clip-text text-transparent">
              Listens, Remembers, and Guides
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-quicksand">
            <span className="font-semibold">A private companion for your inner journey.</span><br />
            Aluuna remembers and reflects across weeks and seasons, witnessing your journey as you move toward your truth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out">
              Join the Beta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out">
              See How It Works
            </Button>
          </div>

          {/* Phone Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-6xl mx-auto">
            {/* Row 1 */}
            {/* Conversation Screenshot */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-white to-orange-50 rounded-[40px] border-8 border-orange-200 shadow-2xl overflow-hidden">
                <img
                  src="/images/screenshot-conversation.png"
                  alt="Aluuna conversation interface"
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              {/* Individual Speech Bubbles */}
              <div className="absolute top-[380px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Text or voice. You talk Aluuna listens, remembers, and responds."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-orange-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-32 -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-3 z-10">
                <p className="text-sm text-gray-700">"AI-powered insights with safety-first space holding guardrails"</p>
                <div className="absolute bottom-5 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-orange-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-32 -left-[175px] w-48 bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Purpose-oriented support with balanced, caring pushback."</p>
                <div className="absolute bottom-5 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-orange-200 transform -rotate-45"></div>
              </div>
            </div>

            {/* Right Menu Screenshot */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-white to-teal-50 rounded-[40px] border-8 border-teal-200 shadow-2xl overflow-hidden">
                <img
                  src="/images/screenshot-left-menu.png"
                  alt="Aluuna navigation menu"
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              {/* Individual Speech Bubbles */}
              <div className="absolute top-[240px] -left-[185px] w-48 bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Your personal conversations saved and ready to revisit, anytime."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-teal-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[107px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Quietly and consentually tracks patterns to support growth."</p>
                <div className="absolute bottom-5 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-teal-200 transform rotate-45"></div>
              </div>
            </div>

            {/* Row 2 */}
            {/* Left Menu Screenshot */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-white to-purple-50 rounded-[40px] border-8 border-purple-200 shadow-2xl overflow-hidden">
                <img
                  src="/images/screenshot-right-menu.png"
                  alt="Aluuna right menu interface"
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              {/* Individual Speech Bubbles */}
              <div className="absolute top-[170px] -right-[170px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Intuitively saves memories, insights, boundaries, shadows, and more."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-purple-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-[220px] -left-[185px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Tap into tools that accelerate growth."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-purple-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[300px] -right-[165px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700">"Your journey organized and accessible in one place."</p>
                <div className="absolute bottom-10 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-purple-200 transform rotate-45"></div>
              </div>
            </div>

            {/* Mantra Screenshot */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-white to-orange-50 rounded-[40px] border-8 border-amber-300 shadow-2xl overflow-hidden">
                <img
                  src="/images/screenshot-mantra.png"
                  alt="Aluuna mantra interface"
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              {/* Individual Speech Bubbles */}
              <div className="absolute top-[50px] -left-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-3 z-10">
                <p className="text-sm text-gray-700">"Pin favorites for instant access."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-purple-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[0px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-3 z-10">
                <p className="text-sm text-gray-700">"User-led, AI-assisted guidance for transparent growth."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-amber-300 transform rotate-45"></div>
              </div>
              <div className="absolute top-[100px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-3 z-10">
                <p className="text-sm text-gray-700">"Practice daily, set goals, reflect to keep moving toward your truth."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-amber-300 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-quicksand" style={{ color: '#353535' }}>
              Intro
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              More than journaling. Aluuna is your therapeutic mirror — a compassionate AI that:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#353535' }}>Listens deeply</h3>
                <p className="text-gray-600">to your voice or written reflections</p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understands your context</h3>
                <p className="text-gray-600">drawing on your emotional history</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Responds wisely</h3>
                <p className="text-gray-600">in a tone that matches your state</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Remembers what matters</h3>
                <p className="text-gray-600">from key life events to personal goals</p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Guides gently</h3>
                <p className="text-gray-600">offering support, challenge, or validation when you need it most</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grows with you</h3>
                <p className="text-gray-600">every conversation builds a richer picture of your emotional journey</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With Aluuna, every conversation builds a richer picture of your emotional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Beta Testing Section */}
      <section id="beta-testing" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-quicksand" style={{ color: '#353535' }}>
              Join the Beta
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us shape the future of therapeutic AI. Get early access on iOS & Android.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto">
            {/* Custom Tab Navigation */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div
                className="group cursor-pointer"
                onClick={() => setActiveTab('about')}
              >
                <Card className={`transition-all duration-300 border-2 ${activeTab === 'about' ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg transform scale-105' : 'border-gray-200 hover:border-orange-200 hover:shadow-md'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${activeTab === 'about' ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300'}`}>
                      <Heart className={`w-8 h-8 ${activeTab === 'about' ? 'text-white' : 'text-orange-600'}`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${activeTab === 'about' ? 'text-orange-800' : 'text-gray-900 group-hover:text-orange-700'}`}>
                      About Aluuna
                    </h3>
                    <p className={`text-sm mt-2 transition-colors duration-300 ${activeTab === 'about' ? 'text-orange-700' : 'text-gray-600 group-hover:text-orange-600'}`}>
                      Our vision for emotional wellness
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                className="group cursor-pointer"
                onClick={() => setActiveTab('testing')}
              >
                <Card className={`transition-all duration-300 border-2 ${activeTab === 'testing' ? 'border-teal-300 bg-gradient-to-br from-teal-50 to-teal-100 shadow-lg transform scale-105' : 'border-gray-200 hover:border-teal-200 hover:shadow-md'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${activeTab === 'testing' ? 'bg-gradient-to-r from-teal-500 to-teal-600' : 'bg-gradient-to-r from-teal-100 to-teal-200 group-hover:from-teal-200 group-hover:to-teal-300'}`}>
                      <Smartphone className={`w-8 h-8 ${activeTab === 'testing' ? 'text-white' : 'text-teal-600'}`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${activeTab === 'testing' ? 'text-teal-800' : 'text-gray-900 group-hover:text-teal-700'}`}>
                      How to Test
                    </h3>
                    <p className={`text-sm mt-2 transition-colors duration-300 ${activeTab === 'testing' ? 'text-teal-700' : 'text-gray-600 group-hover:text-teal-600'}`}>
                      Get early access on iOS & Android
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                className="group cursor-pointer"
                onClick={() => setActiveTab('features')}
              >
                <Card className={`transition-all duration-300 border-2 ${activeTab === 'features' ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg transform scale-105' : 'border-gray-200 hover:border-purple-200 hover:shadow-md'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300'}`}>
                      <MessageCircle className={`w-8 h-8 ${activeTab === 'features' ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${activeTab === 'features' ? 'text-purple-800' : 'text-gray-900 group-hover:text-purple-700'}`}>
                      Key Features
                    </h3>
                    <p className={`text-sm mt-2 transition-colors duration-300 ${activeTab === 'features' ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-600'}`}>
                      Screenshots with speech bubbles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <Card className="border-orange-100 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision for Emotional Wellness</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Aluuna represents a new frontier in emotional support technology. We're building an AI companion that doesn't just respond to your immediate needs—it grows with you, remembers your journey, and provides increasingly personalized guidance over time.
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Our goal is to create a safe space where you can explore your emotions without judgment, track your growth patterns, and develop deeper self-awareness through compassionate AI interaction.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 mt-2"></div>
                          <p className="text-gray-700">Building long-term emotional memory for truly personalized support</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 mt-2"></div>
                          <p className="text-gray-700">Integrating evidence-based therapeutic approaches like IFS and mindfulness</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-2"></div>
                          <p className="text-gray-700">Creating a bridge between self-reflection and professional therapy</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-6 border border-orange-100">
                      <h4 className="font-semibold text-gray-900 mb-4">What Makes Aluuna Different</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-500" />
                          <span>Remembers your emotional patterns and triggers</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-500" />
                          <span>Adapts communication style to your preferences</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-500" />
                          <span>Tracks your growth over weeks and months</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-500" />
                          <span>Provides voice-based emotional support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'testing' && (
              <Card className="border-teal-100 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="w-10 h-10 text-teal-600" />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Get Early Access to Aluuna</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <Apple className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">iOS Beta Testing</h4>
                        <p className="text-gray-700 mb-6">Join our TestFlight program to access the latest iOS builds and help us optimize the experience for iPhone users.</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500" />
                            <span>iOS 15.0 or later required</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500" />
                            <span>Regular updates with new features</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500" />
                            <span>Direct feedback channel to developers</span>
                          </div>
                        </div>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                          Join iOS Beta
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <svg className="w-16 h-16 text-teal-600 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Android Beta Testing</h4>
                        <p className="text-gray-700 mb-6">Access early Android builds through Google Play Console and help us refine the experience across different Android devices.</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span>Android 8.0 or later required</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span>Weekly beta releases</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span>Beta community access</span>
                          </div>
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                          Join Android Beta
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="bg-gradient-to-r from-orange-100 via-teal-100 to-purple-100 rounded-xl p-6 border border-teal-100">
                      <h4 className="font-semibold text-gray-900 mb-3">What We're Looking For</h4>
                      <p className="text-gray-700 mb-4">
                        We're seeking beta testers who are passionate about emotional wellness and willing to provide thoughtful feedback on their experience with Aluuna.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge className="bg-orange-200 text-orange-800">Regular app usage</Badge>
                        <Badge className="bg-teal-200 text-teal-800">Detailed feedback</Badge>
                        <Badge className="bg-purple-200 text-purple-800">Bug reporting</Badge>
                        <Badge className="bg-orange-200 text-orange-800">Feature suggestions</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'features' && (
              <Card className="border-purple-100 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Experience Aluuna's Key Features</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Voice Interaction Screenshot */}
                    <div className="relative">
                      <div className="bg-gradient-to-b from-white to-orange-50 rounded-2xl border-4 border-orange-200 shadow-xl overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-4 h-4">
                              <Logo />
                            </div>
                            <div className="w-12 h-3 bg-orange-200 rounded-full"></div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-orange-100 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <Mic className="w-3 h-3 text-orange-600" />
                                <div className="flex space-x-1">
                                  <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                                  <div className="w-1 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                              </div>
                              <p className="text-xs text-orange-800">"I'm feeling really anxious about tomorrow's presentation..."</p>
                            </div>
                            <div className="bg-teal-100 rounded-lg p-3">
                              <p className="text-xs text-teal-800">I can hear the worry in your voice. Let's explore what specifically about the presentation is causing this anxiety. What thoughts are coming up for you?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speech Bubble */}
                      <div className="absolute -right-4 top-8 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                        <div className="absolute -left-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-orange-500 border-b-4 border-b-transparent"></div>
                        Voice Recognition
                      </div>
                    </div>

                    {/* Emotional Memory Screenshot */}
                    <div className="relative">
                      <div className="bg-gradient-to-b from-white to-teal-50 rounded-2xl border-4 border-teal-200 shadow-xl overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-teal-800">Memory Insights</span>
                            <Brain className="w-4 h-4 text-teal-600" />
                          </div>
                          <div className="space-y-3">
                            <div className="bg-teal-100 rounded-lg p-3">
                              <div className="text-xs text-teal-700 mb-1">Patterns Noticed</div>
                              <p className="text-xs text-teal-800">You often feel anxious on Sunday evenings, usually related to work stress</p>
                            </div>
                            <div className="bg-purple-100 rounded-lg p-3">
                              <div className="text-xs text-purple-700 mb-1">Growth Milestone</div>
                              <p className="text-xs text-purple-800">You've been practicing breathing exercises for 2 weeks straight! 🎉</p>
                            </div>
                            <div className="bg-orange-100 rounded-lg p-3">
                              <div className="text-xs text-orange-700 mb-1">Relationship Update</div>
                              <p className="text-xs text-orange-800">Your relationship with Sarah has been a source of strength lately</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speech Bubble */}
                      <div className="absolute -left-4 top-8 bg-teal-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                        <div className="absolute -right-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-teal-500 border-b-4 border-b-transparent"></div>
                        Remembers Everything
                      </div>
                    </div>

                    {/* Growth Tracking Screenshot */}
                    <div className="relative">
                      <div className="bg-gradient-to-b from-white to-purple-50 rounded-2xl border-4 border-purple-200 shadow-xl overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-purple-800">Your Progress</span>
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-purple-700">Emotional Awareness</span>
                                <span className="text-xs text-purple-600">+18%</span>
                              </div>
                              <div className="h-2 bg-purple-200 rounded-full">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-4/5"></div>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-teal-700">Stress Management</span>
                                <span className="text-xs text-teal-600">+25%</span>
                              </div>
                              <div className="h-2 bg-teal-200 rounded-full">
                                <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speech Bubble */}
                      <div className="absolute -right-4 top-12 bg-purple-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                        <div className="absolute -left-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-purple-500 border-b-4 border-b-transparent"></div>
                        Tracks Growth
                      </div>
                    </div>

                    {/* Voice Response Screenshot */}
                    <div className="relative">
                      <div className="bg-gradient-to-b from-white to-green-50 rounded-2xl border-4 border-green-200 shadow-xl overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-green-800">Voice Response</span>
                            <Volume2 className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="space-y-3">
                            <div className="bg-green-100 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                                <span className="text-xs text-green-700">Playing response...</span>
                              </div>
                              <p className="text-xs text-green-800 italic">"I want you to know that your feelings are completely valid. Take a deep breath with me..."</p>
                            </div>
                            <div className="flex justify-center">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                                <Volume2 className="w-3 h-3 mr-1" />
                                Replay
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speech Bubble */}
                      <div className="absolute -left-4 top-12 bg-green-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                        <div className="absolute -right-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-green-500 border-b-4 border-b-transparent"></div>
                        Soothing Voice
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-6">
                      These are just a few examples of how Aluuna will support your emotional journey. As a beta tester, you'll help us refine these features and discover new ways to enhance your wellbeing.
                    </p>
                    <Button className="bg-gradient-to-r from-orange-500 via-teal-500 to-purple-600 hover:from-orange-600 hover:via-teal-600 hover:to-purple-700 text-white">
                      Start Your Beta Journey
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature is crafted to help you feel heard, understood, and supported on your emotional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:border-orange-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice or Text Journaling</h3>
                <p className="text-gray-600">Capture thoughts effortlessly, with accurate voice transcription.</p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Emotional Memory</h3>
                <p className="text-gray-600">Long-term storage of your personal milestones, themes, and challenges.</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Guided, Empathic Responses</h3>
                <p className="text-gray-600">GPT-powered conversations shaped by therapeutic approaches like IFS and mindfulness.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-200 via-teal-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Volume2 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Soothing Voice Playback</h3>
                <p className="text-gray-600">Hear compassionate replies via natural AI text-to-speech.</p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-200 via-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Growth Tracking</h3>
                <p className="text-gray-600">See changes in emotional awareness, resilience, and self-compassion over time.</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-200 transition-colors bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-200 via-orange-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Privacy</h3>
                <p className="text-gray-600">All conversations encrypted end-to-end.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional journaling apps or chatbots, Aluuna doesn't start fresh every time.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              It grows with you — remembering your emotional patterns, adapting to your communication style, and offering increasingly personalised guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Your Journey, Witnessed Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Journey, Witnessed
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Aluuna is your safe, always-available space for emotional reflection. Every interaction is remembered and woven into your personal growth profile — so you feel seen, heard, and supported.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Four easy steps to begin your journey with your AI therapy companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Speak or Type</h3>
              <p className="text-gray-600">Share your thoughts using the mic or keyboard. Your voice is transcribed instantly with Whisper AI.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Understanding</h3>
              <p className="text-gray-600">Aluuna combines your current mood with your emotional history to offer insight that feels truly personal.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Guided Response</h3>
              <p className="text-gray-600">Receive a compassionate, tailored reply — as text, spoken back in a warm, human voice, or both.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-teal-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Memory</h3>
              <p className="text-gray-600">Important events, patterns, relationships, and themes are remembered so each session builds on the last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One flat rate for unlimited access to your AI therapy companion.
            </p>
          </div>

          <Card className="border-teal-200 shadow-lg max-w-md mx-auto bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-2">$29</div>
                <div className="text-gray-600">per month</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Unlimited journaling sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Voice playback responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Emotional memory tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Growth analytics & insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 via-teal-500 to-purple-600 hover:from-orange-600 hover:via-teal-600 hover:to-purple-700 text-white">
                Join the Beta
              </Button>

              <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>All data encrypted and secure</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voices of Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Early users share how Aluuna has become their trusted emotional companion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Aluuna remembers details about my life that even I forget. It feels like having a therapist who truly knows me and is always available."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Beta User</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The voice feature is incredible. Hearing compassionate responses makes me feel less alone during difficult moments."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marcus T.</div>
                    <div className="text-sm text-gray-600">Early Adopter</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Watching my emotional growth tracked over time has been eye-opening. Aluuna helps me see patterns I never noticed."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold">
                    L
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Luna K.</div>
                    <div className="text-sm text-gray-600">Beta Tester</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why We Created Aluuna
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We believe everyone deserves a safe, always-available space for emotional reflection and guidance.
            Aluuna was born from the understanding that healing happens through being truly heard and remembered.
            Our AI companion doesn't replace human connection—it creates a foundation for deeper self-awareness
            and emotional growth that enhances all your relationships.
          </p>
          <p className="text-lg text-gray-700">
            Your journey deserves to be witnessed, honored, and remembered. Let Aluuna be your trusted companion
            as you explore the depths of your emotional landscape with compassion and wisdom.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-teal-500 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be among the first to experience an AI companion that truly remembers you.
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Help us shape the future of therapeutic AI. Get early access on iOS & Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out">
              <Apple className="mr-2 w-5 h-5" />
              iOS: TestFlight invite link
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out">
              <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
              Android: Google Play Internal Test / APK link
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-6 h-6">
                <Logo />
              </div>
              <img src="/images/logo.png" alt="Aluuna" className="h-6 w-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>

              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full flex items-center justify-center hover:opacity-80 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center hover:opacity-80 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 Aluuna. Your emotional wellbeing companion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}