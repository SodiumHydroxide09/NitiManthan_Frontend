import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Users, Target, Award, Globe } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
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
          <h1 className="text-4xl font-bold text-[#001F3F]">About Niti Manthan</h1>
          <p className="text-gray-600 mt-2">Empowering Citizens, Enabling Policy</p>
        </div>
      </div>

      {/* Mission Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-[#001F3F]">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Niti Manthan is a revolutionary digital platform designed to bridge the gap between 
            citizens and policymakers. We believe that inclusive governance requires active 
            participation from all stakeholders, and our platform provides the tools and 
            infrastructure to make this vision a reality.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-[#138808]" />
              <span>Ministry Engagement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Empowering ministry officials to actively participate in the policy development process through 
              structured feedback, discussions, and policy consultations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-[#FF9933]" />
              <span>Policy Innovation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Facilitating evidence-based policy making through real-time sentiment analysis, 
              ministry feedback, and comprehensive data insights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-[#001F3F]" />
              <span>Transparency</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Promoting transparent governance by providing open access to policy drafts, 
              government responses, and implementation timelines.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-[#138808]" />
              <span>Digital India</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Supporting India's digital transformation by leveraging technology to make 
              governance more accessible, efficient, and citizen-centric.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Vision */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-[#001F3F]">Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            To create a collaborative governance system where every ministry official has a voice in policy making, 
            where government decisions are informed by inter-ministry sentiment, and where transparency 
            and accountability are the cornerstones of governance. We envision a future where 
            technology serves as the bridge between ministry aspirations and government actions.
          </p>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-[#001F3F]">How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-[#001F3F] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold">Policy Drafts Publication</h4>
                <p className="text-gray-600">Government publishes draft policies and legislation for public review</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF9933] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold">Ministry Participation</h4>
                <p className="text-gray-600">Ministry officials provide feedback, suggestions, and participate in discussions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#138808] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold">Analysis & Insights</h4>
                <p className="text-gray-600">AI-powered sentiment analysis and comprehensive reporting</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#001F3F] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold">Policy Refinement</h4>
                <p className="text-gray-600">Government incorporates feedback to refine and improve policies</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-[#001F3F] to-[#138808] text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
          <p className="text-lg mb-6">
            Be part of India's governance transformation. Your voice matters in shaping the policies that govern our nation.
          </p>
          <div className="space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('drafts')}
            >
              View Policy Drafts
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#001F3F]"
              onClick={() => onNavigate('dashboard')}
            >
              Explore Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}