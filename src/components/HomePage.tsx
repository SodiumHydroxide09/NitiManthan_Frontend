import React from 'react';
import { FileText, MessageSquare, BarChart3, Download, ArrowRight, Users, TrendingUp, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const quickAccessCards = [
    {
      title: 'View Draft Legislations',
      description: 'Browse and review current policy drafts',
      icon: FileText,
      action: () => onNavigate('drafts'),
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Submit Feedback',
      description: 'Share your insights on policy matters',
      icon: MessageSquare,
      action: () => onNavigate('feedback'),
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'View Sentiment Analysis',
      description: 'Explore public opinion analytics',
      icon: BarChart3,
      action: () => onNavigate('analytics'),
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Generate Reports',
      description: 'Download comprehensive policy reports',
      icon: Download,
      action: () => onNavigate('analytics'),
      color: 'bg-purple-50 border-purple-200'
    },
  ];

  const impactHighlights = [
    { label: 'Acts Reviewed', value: '247', icon: FileText },
    { label: 'Public Comments', value: '15,492', icon: MessageSquare },
    { label: 'Active Citizens', value: '8,743', icon: Users },
    { label: 'Policy Insights', value: '1,234', icon: TrendingUp },
  ];

  const recentUpdates = [
    {
      title: 'New Draft: Digital Privacy Protection Act 2024',
      date: '2 days ago',
      status: 'Open for Comments'
    },
    {
      title: 'Updated: Consumer Rights Amendment Bill',
      date: '5 days ago',
      status: 'Under Review'
    },
    {
      title: 'Analysis Complete: Environmental Protection Guidelines',
      date: '1 week ago',
      status: 'Published'
    },
    {
      title: 'Public Hearing: Education Policy Framework',
      date: '2 weeks ago',
      status: 'Upcoming'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647326520048-21dc3f07a9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJsaWFtZW50JTIwZ292ZXJubWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1NzEwMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Government Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl mb-6">Welcome to Niti Manthan</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A comprehensive platform for ministry engagement in policy-making. 
            Participate in shaping India's future through transparent, data-driven governance.
          </p>
          <Button 
            onClick={() => onNavigate('dashboard')}
            size="lg"
            className="bg-[#FF9933] hover:bg-[#e8862e] text-black"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-[#001F3F]">Quick Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navigate directly to the tools and features you need for effective policy engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className={`${card.color} hover:shadow-lg transition-shadow cursor-pointer`} onClick={card.action}>
                <CardHeader className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-[#001F3F]" />
                  <CardTitle className="text-lg text-[#001F3F]">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{card.description}</p>
                  <div className="text-center">
                    <ArrowRight className="h-5 w-5 mx-auto text-[#138808]" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#001F3F]">Impact Highlights</h2>
            <p className="text-gray-600">Real-time statistics showing citizen engagement and policy impact</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center bg-white border-2 hover:border-[#FF9933] transition-colors">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-[#138808]" />
                    <div className="text-3xl text-[#001F3F] mb-2">{item.value}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-6 text-[#001F3F]">Latest Updates</h2>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg text-[#001F3F]">{update.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        update.status === 'Open for Comments' ? 'bg-green-100 text-green-800' :
                        update.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        update.status === 'Published' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {update.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{update.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl mb-6 text-[#001F3F]">Featured Content</h2>
            <Card className="h-64 bg-gradient-to-br from-[#001F3F] to-[#003366] text-white">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <Eye className="h-12 w-12 mb-4 text-[#FF9933]" />
                <h3 className="text-xl mb-3">Policy Insights Dashboard</h3>
                <p className="text-gray-300 mb-6">
                  Explore comprehensive analytics and trends in policy feedback and citizen engagement.
                </p>
                <Button 
                  onClick={() => onNavigate('analytics')}
                  className="bg-[#FF9933] hover:bg-[#e8862e] text-black w-fit"
                >
                  Explore Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}