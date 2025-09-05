import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Your message has been sent successfully. We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h1 className="text-4xl font-bold text-[#001F3F]">Contact Us</h1>
          <p className="text-gray-600 mt-2">We're here to help and answer any questions you might have</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#001F3F]">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#138808] mt-1" />
                <div>
                  <h4 className="font-semibold">Helpline</h4>
                  <p className="text-gray-600">1800-123-4567</p>
                  <p className="text-sm text-gray-500">Toll-free (24/7)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#138808] mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">support@nitimanthan.gov.in</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#138808] mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    Niti Manthan Division<br />
                    Ministry of Electronics and IT<br />
                    Electronics Niketan, 6 CGO Complex<br />
                    New Delhi - 110003
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#138808] mt-1" />
                <div>
                  <h4 className="font-semibold">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Closed on public holidays</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => onNavigate('help')}
              >
                Help & FAQs
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => onNavigate('feedback')}
              >
                Submit Feedback
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => onNavigate('services')}
              >
                Additional Services
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#001F3F]">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="policy">Policy Related</SelectItem>
                        <SelectItem value="feedback">General Feedback</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe your inquiry in detail..."
                    rows={6}
                    required
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    className="bg-[#001F3F] hover:bg-[#001F3F]/90 flex items-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      category: '',
                      message: ''
                    })}
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="mt-6 bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Emergency or Urgent Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                For urgent technical issues or security concerns that require immediate attention:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="destructive"
                  className="flex items-center space-x-2"
                  onClick={() => window.open('tel:1800-123-9999')}
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency Helpline: 1800-123-9999</span>
                </Button>
                <Button 
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                  onClick={() => window.open('mailto:emergency@nitimanthan.gov.in')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>emergency@nitimanthan.gov.in</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}