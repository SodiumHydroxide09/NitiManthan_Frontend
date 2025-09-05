import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Search, HelpCircle, Book, Video, MessageCircle, Download } from 'lucide-react';

interface HelpPageProps {
  onNavigate: (page: string) => void;
}

export function HelpPage({ onNavigate }: HelpPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 'getting-started',
      question: 'How do I get started with Niti Manthan?',
      answer: 'Getting started is easy! Simply create an account using your email or Aadhaar number, verify your identity, and you can immediately start participating in policy discussions, submitting feedback, and tracking your contributions.'
    },
    {
      id: 'submit-feedback',
      question: 'How can I submit feedback on a policy draft?',
      answer: 'Navigate to the "Draft Legislations" section, select the policy you want to comment on, read through the document, and use the feedback form at the bottom of each section. You can provide detailed comments, suggestions, or concerns.'
    },
    {
      id: 'track-contributions',
      question: 'How do I track my contributions?',
      answer: 'Visit your "My Workspace" section where you can see all your submitted feedback, comments, responses from government officials, and the status of policies you\'ve contributed to. You can also see how your feedback has influenced policy changes.'
    },
    {
      id: 'account-verification',
      question: 'Why do I need to verify my account?',
      answer: 'Account verification ensures the authenticity of participants and maintains the integrity of the policy feedback process. We use secure government-approved verification methods including Aadhaar and mobile OTP.'
    },
    {
      id: 'policy-status',
      question: 'How do I know if my feedback was considered?',
      answer: 'Government officials review all feedback and provide responses in your workspace. You\'ll receive notifications when your feedback receives a response or when policies you\'ve commented on are updated.'
    },
    {
      id: 'privacy-data',
      question: 'How is my personal data protected?',
      answer: 'We follow strict government data protection guidelines. Your personal information is encrypted, stored securely, and only used for verification and communication purposes. We never share your data with third parties.'
    },
    {
      id: 'technical-issues',
      question: 'What should I do if I encounter technical problems?',
      answer: 'For technical issues, try refreshing the page, clearing your browser cache, or using a different browser. If problems persist, contact our technical support team through the Contact Us page or call our helpline.'
    },
    {
      id: 'mobile-access',
      question: 'Can I access Niti Manthan on my mobile device?',
      answer: 'Yes! Niti Manthan is fully responsive and works on all devices including smartphones and tablets. We also have a mobile app available for download from the Play Store and App Store.'
    }
  ];

  const tutorials = [
    {
      title: 'Getting Started Guide',
      description: 'Complete walkthrough for new users',
      duration: '5 min read',
      type: 'guide'
    },
    {
      title: 'How to Submit Effective Feedback',
      description: 'Best practices for policy feedback',
      duration: '8 min video',
      type: 'video'
    },
    {
      title: 'Understanding Sentiment Analysis',
      description: 'How we analyze public opinion',
      duration: '3 min read',
      type: 'guide'
    },
    {
      title: 'Using the Analytics Dashboard',
      description: 'Navigate reports and insights',
      duration: '6 min video',
      type: 'video'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-4xl font-bold text-[#001F3F]">Help & Support</h1>
          <p className="text-gray-600 mt-2">Find answers to your questions and get help using Niti Manthan</p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Help Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('contact')}>
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-[#138808] mx-auto mb-3" />
            <h3 className="font-semibold">Contact Support</h3>
            <p className="text-sm text-gray-600">Get personalized help</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Video className="h-8 w-8 text-[#FF9933] mx-auto mb-3" />
            <h3 className="font-semibold">Video Tutorials</h3>
            <p className="text-sm text-gray-600">Watch how-to guides</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Book className="h-8 w-8 text-[#001F3F] mx-auto mb-3" />
            <h3 className="font-semibold">User Manual</h3>
            <p className="text-sm text-gray-600">Download complete guide</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <HelpCircle className="h-8 w-8 text-[#138808] mx-auto mb-3" />
            <h3 className="font-semibold">Live Chat</h3>
            <p className="text-sm text-gray-600">Instant assistance</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="faqs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials & Guides</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Find quick answers to common questions</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No FAQs match your search. Try different keywords or contact support.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      <p className="text-gray-600 mt-2">{tutorial.description}</p>
                    </div>
                    {tutorial.type === 'video' ? (
                      <Video className="h-6 w-6 text-[#FF9933]" />
                    ) : (
                      <Book className="h-6 w-6 text-[#001F3F]" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                    <Button size="sm">
                      {tutorial.type === 'video' ? 'Watch' : 'Read'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Downloads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">User Manual (PDF)</h4>
                    <p className="text-sm text-gray-600">Complete guide to using Niti Manthan</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">Quick Reference Card</h4>
                    <p className="text-sm text-gray-600">Essential features at a glance</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">Mobile App</h4>
                    <p className="text-sm text-gray-600">Access Niti Manthan on your phone</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Get App
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Supported Browsers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chrome 90+ (Recommended)</li>
                      <li>• Firefox 88+</li>
                      <li>• Safari 14+</li>
                      <li>• Edge 90+</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Mobile Support</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• iOS 12+ (Safari, Chrome)</li>
                      <li>• Android 8+ (Chrome, Firefox)</li>
                      <li>• Native mobile apps available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Internet Connection</h4>
                    <p className="text-sm text-gray-600">
                      Minimum 1 Mbps for basic functionality. 5 Mbps recommended for video content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Contact Support CTA */}
      <Card className="bg-gradient-to-r from-[#001F3F] to-[#138808] text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-lg mb-6">
            Our support team is here to assist you with any questions or issues.
          </p>
          <div className="space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Contact Support
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#001F3F]"
              onClick={() => window.open('tel:1800-123-4567')}
            >
              Call Helpline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}