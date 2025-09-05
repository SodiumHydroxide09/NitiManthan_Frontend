import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  FileText, 
  Users, 
  BarChart3, 
  Bell, 
  Download, 
  Shield, 
  Globe, 
  Smartphone,
  Mail,
  Calendar,
  Search
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: FileText,
      title: 'Policy Document Access',
      description: 'Access complete policy documents, drafts, and amendments with advanced search and filtering capabilities.',
      features: ['Full-text search', 'Document versioning', 'Download in multiple formats', 'Offline access'],
      status: 'active'
    },
    {
      icon: Users,
      title: 'Ministry Forums',
      description: 'Participate in moderated discussions with fellow ministry officials and policy experts on various governance topics.',
      features: ['Moderated discussions', 'Expert participation', 'Topic-based groups', 'Real-time chat'],
      status: 'active'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Access detailed analytics dashboards showing trends, sentiment analysis, and participation metrics.',
      features: ['Custom reports', 'Data visualization', 'Export capabilities', 'Real-time updates'],
      status: 'active'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Receive personalized notifications about policies of interest, responses to your feedback, and important updates.',
      features: ['Personalized alerts', 'Multiple channels', 'Priority settings', 'Digest options'],
      status: 'active'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Access content and participate in discussions in multiple Indian languages with automatic translation.',
      features: ['22 Indian languages', 'Real-time translation', 'Voice input support', 'Regional content'],
      status: 'beta'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      description: 'Native mobile apps for iOS and Android with full feature parity and offline capabilities.',
      features: ['Offline mode', 'Push notifications', 'Voice input', 'Camera integration'],
      status: 'active'
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Participate via email with our intelligent email processing system that converts emails to platform feedback.',
      features: ['Email-to-feedback', 'Auto-categorization', 'Response tracking', 'Digest emails'],
      status: 'coming-soon'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Join virtual and physical town halls, policy discussions, and citizen engagement events.',
      features: ['Event calendar', 'RSVP system', 'Virtual attendance', 'Recording access'],
      status: 'beta'
    },
    {
      icon: Shield,
      title: 'Data Privacy Tools',
      description: 'Comprehensive data privacy controls allowing you to manage your digital footprint and data sharing preferences.',
      features: ['Privacy dashboard', 'Data export', 'Consent management', 'Anonymization options'],
      status: 'active'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[#138808] text-white';
      case 'beta': return 'bg-[#FF9933] text-white';
      case 'coming-soon': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Available';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button 
          variant="outline" 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Button>
        <div>
          <h1 className="text-4xl font-bold text-[#001F3F]">Additional Services</h1>
          <p className="text-gray-600 mt-2">Explore all the tools and services available to enhance your civic participation</p>
        </div>
      </div>

      {/* Service Overview */}
      <Card className="bg-gradient-to-r from-[#001F3F] to-[#138808] text-white">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">9+</div>
              <div className="text-lg">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-lg">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">22</div>
              <div className="text-lg">Supported Languages</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 text-[#001F3F]" />
                  <Badge className={getStatusColor(service.status)}>
                    {getStatusText(service.status)}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#138808] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  {service.status === 'active' ? (
                    <Button className="w-full bg-[#001F3F] hover:bg-[#001F3F]/90">
                      Access Service
                    </Button>
                  ) : service.status === 'beta' ? (
                    <Button variant="outline" className="w-full">
                      Join Beta
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Service */}
      <Card className="border-2 border-[#FF9933]">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Badge className="bg-[#FF9933] text-white">Featured</Badge>
            <CardTitle className="text-xl text-[#001F3F]">AI-Powered Policy Assistant</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Our new AI assistant helps you navigate complex policy documents, understand legal terminology, 
                and provides personalized recommendations based on your interests and previous participation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-[#138808]" />
                  <span>Intelligent document search and summarization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-[#138808]" />
                  <span>Personalized policy recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-[#138808]" />
                  <span>Impact analysis of your feedback</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-[#138808]" />
                  <span>Multi-language support with context preservation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Try the Assistant</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">
                    <strong>You:</strong> "Explain the Digital India Act in simple terms"
                  </p>
                </div>
                <div className="bg-[#001F3F] text-white p-3 rounded">
                  <p className="text-sm">
                    <strong>AI Assistant:</strong> "The Digital India Act aims to establish a comprehensive 
                    framework for digital governance, focusing on data protection, digital rights, and 
                    cybersecurity. Key provisions include..."
                  </p>
                </div>
                <Button className="w-full bg-[#FF9933] hover:bg-[#FF9933]/90">
                  Start Conversation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Access */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#001F3F]">Developer Services</CardTitle>
          <p className="text-gray-600">Access our APIs and developer tools to build applications that integrate with Niti Manthan</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Available APIs</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Policy Documents API</li>
                <li>• Feedback Submission API</li>
                <li>• Analytics and Reporting API</li>
                <li>• User Authentication API</li>
                <li>• Notification Services API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Developer Resources</h4>
              <div className="space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  API Documentation
                </Button>
                <Button variant="outline" size="sm">
                  SDK Downloads
                </Button>
                <Button variant="outline" size="sm">
                  Sample Code
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enterprise Solutions */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-xl text-[#001F3F]">Enterprise & Institutional Services</CardTitle>
          <p className="text-gray-600">Specialized solutions for organizations, NGOs, and research institutions</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Users className="h-8 w-8 text-[#001F3F] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Organization Accounts</h4>
                <p className="text-sm text-gray-600">Dedicated accounts for institutions with bulk user management and advanced analytics</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <BarChart3 className="h-8 w-8 text-[#001F3F] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Custom Analytics</h4>
                <p className="text-sm text-gray-600">Tailored reporting and analytics solutions for research and institutional needs</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Shield className="h-8 w-8 text-[#001F3F] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">White-label Solutions</h4>
                <p className="text-sm text-gray-600">Customizable platform deployments for state and local governments</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button 
              size="lg" 
              className="bg-[#001F3F] hover:bg-[#001F3F]/90"
              onClick={() => onNavigate('contact')}
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}