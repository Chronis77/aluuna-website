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
            <a href="#why-different" className="text-orange-700 hover:text-orange-900 transition-colors font-quicksand" onClick={(e) => {
              e.preventDefault();
              document.getElementById('why-different')?.scrollIntoView({ behavior: 'smooth' });
            }}>Why We're Different</a>
            <a href="#why-created" className="text-orange-700 hover:text-orange-900 transition-colors font-quicksand" onClick={(e) => {
              e.preventDefault();
              document.getElementById('why-created')?.scrollIntoView({ behavior: 'smooth' });
            }}>Why We Created Aluuna</a>
            <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50" onClick={() => document.getElementById('join-beta')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the Beta
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pb-20 pt-10 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-gradient-to-r from-orange-50 to-teal-50 text-gray-700 border border-orange-200/50 shadow-sm font-quicksand">
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out" onClick={() => document.getElementById('join-beta')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the Beta
              <ArrowRight className="ml-2 w-5 h-5" />
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
                <p className="text-sm text-gray-700 font-quicksand">"Text or voice. You talk Aluuna listens, remembers, and responds."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-orange-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-32 -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"AI-powered insights with safety-first space holding guardrails"</p>
                <div className="absolute bottom-5 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-orange-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-32 -left-[175px] w-48 bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"Purpose-oriented support with balanced, caring pushback."</p>
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
                <p className="text-sm text-gray-700 font-quicksand">"Your personal conversations saved and ready to revisit, anytime."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-teal-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[107px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"Quietly and consentually tracks patterns to support growth."</p>
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
                <p className="text-sm text-gray-700 font-quicksand">"Intuitively saves memories, insights, boundaries, shadows, and more."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-purple-200 transform rotate-45"></div>
              </div>
              <div className="absolute top-[220px] -left-[185px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"Tap into tools that accelerate growth."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-purple-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[300px] -right-[165px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"Your journey organized and accessible in one place."</p>
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
                <p className="text-sm text-gray-700 font-quicksand">"Pin favorites for instant access."</p>
                <div className="absolute bottom-2 -right-[7px] w-3 h-3 bg-white border-r-2 border-b-2 border-purple-200 transform -rotate-45"></div>
              </div>
              <div className="absolute top-[0px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"User-led, AI-assisted guidance for transparent growth."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-amber-300 transform rotate-45"></div>
              </div>
              <div className="absolute top-[100px] -right-[180px] w-48 bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">"Practice daily, set goals, reflect to keep moving toward your truth."</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-amber-300 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section id="why-different" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-quicksand">
              Why We're Different
            </h2>
            <p className="text-xl text-teal-600 font-semibold max-w-4xl mx-auto leading-relaxed font-quicksand">
              Unlike traditional journaling apps or chatbots, Aluuna doesn't start fresh every time.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4 font-quicksand">
              Aluuna grows with you, remembering your emotional patterns, adapting to your life journey and personal rhythms, and offering increasingly personalized guidance. Aluuna is your safe, always-available space for emotional reflection. Every interaction is remembered and woven into your personal growth profile, so you feel seen, heard, and supported.
            </p>
          </div>
        </div>
      </section>


      {/* Why We Created Aluuna Section */}
      <section id="why-created" className="py-20 px-6 bg-gradient-to-br from-orange-50/80 via-teal-50/80 to-purple-50/80">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-quicksand">
              Why We Created Aluuna
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 font-quicksand">
              Born from a deep understanding of human vulnerability and the need for compassionate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-white/70 backdrop-blur-sm border-2 border-orange-200/50 hover:border-orange-300/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-quicksand">Compassionate Foundation</h3>
                <p className="text-gray-700 leading-relaxed font-quicksand">
                  We believe everyone deserves a safe, always-available space for emotional reflection and guidance.
                  Aluuna creates the foundation for deeper self-awareness that enhances all your relationships.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white/70 backdrop-blur-sm border-2 border-teal-200/50 hover:border-teal-300/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-quicksand">Deep Understanding</h3>
                <p className="text-gray-700 leading-relaxed font-quicksand">
                  Born from understanding that healing happens through being truly heard in vulnerability and
                  bringing deeper awareness to our patterns, shadows, and traumas.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white/70 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-quicksand">Sacred Witness</h3>
                <p className="text-gray-700 leading-relaxed font-quicksand">
                  Your journey deserves to be witnessed, honored, and remembered. Let Aluuna be your trusted
                  companion as you explore the depths of your emotional landscape with compassion and wisdom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* JOIN THE BETA Section */}
      <section id="join-beta" className="py-20 px-6 bg-gradient-to-r via-teal-500 to-purple-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Screenshot with feedback bubble */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-white to-orange-50 rounded-[40px] border-8 border-purple-200 shadow-2xl overflow-hidden mx-auto">
                <img
                  src="/images/screenshot-feedback.png"
                  alt="Aluuna feedback interface"
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              {/* Feedback bubble */}
              <div className="absolute top-[150px] -right-[20px] w-48 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-3 z-10">
                <p className="text-sm text-gray-700 font-quicksand">Give feedback quickly and efficiently in-app by clicking the bug at the top right.</p>
                <div className="absolute bottom-2 -left-[7px] w-3 h-3 bg-white border-l-2 border-b-2 border-orange-200 transform rotate-45"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-quicksand">
                JOIN THE BETA
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-quicksand">
                Be among the first to experience an AI companion that truly remembers you.
              </h3>
              <p className="text-xl mb-12 opacity-90 font-quicksand">
                Become a founding tester. Get early access on iOS & Android and help us fine-tune Aluuna's support for your journey. Let's build this together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 px-8 py-4 hover:shadow-lg transition-all duration-300 ease-in-out font-quicksand">
                  <Apple className="mr-2 w-5 h-5" />
                  <a href="https://testflight.apple.com/join/jKBZaHqw" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
                    iOS: Join TestFlight Beta
                  </a>
                </Button>
                <Button size="lg" variant="secondary" disabled className="bg-gray-300 text-gray-500 cursor-not-allowed px-8 py-4 font-quicksand">
                  <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                  </svg>
                  Android: Coming Soon
                </Button>
              </div>
            </div>
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
              <img src="/images/logo-is-white.png" alt="Aluuna" className="h-6 w-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-quicksand" onClick={(e) => {
                  e.preventDefault();
                  const email = 'development' + '@' + 'aluuna.ai';
                  navigator.clipboard.writeText(email);
                  
                  // Create a temporary toast notification at the click position
                  const rect = e.currentTarget.getBoundingClientRect();
                  const toast = document.createElement('div');
                  toast.className = 'fixed bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 font-quicksand text-sm';
                  toast.textContent = 'Email copied to clipboard!';
                  toast.style.left = `${rect.left}px`;
                  toast.style.top = `${rect.top - 40}px`;
                  document.body.appendChild(toast);
                  
                  // Remove toast after 2 seconds
                  setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(-10px)';
                    setTimeout(() => document.body.removeChild(toast), 200);
                  }, 2000);
                }}>Contact</a>
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
            <p className="font-quicksand">&copy; 2025 Aluuna. Your emotional wellbeing companion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}