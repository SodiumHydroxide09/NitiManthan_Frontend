import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Shield, 
  MessageSquare, 
  Users, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Download,
  Play,
  Flag,
  BarChart3
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AdminPanel() {
  const [selectedAction, setSelectedAction] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock admin stats
  const adminStats = {
    pendingReviews: 47,
    flaggedContent: 8,
    activeUsers: 8743,
    totalFeedback: 15492
  };

  // Mock pending feedback for review
  const pendingFeedback = [
    {
      id: 'NM-A1B2C3',
      author: 'Rajesh Kumar',
      draft: 'Digital Privacy Act',
      content: 'The proposed data localization requirements are too stringent and may impact innovation...',
      submittedOn: '2024-09-16 14:30',
      sentiment: 'critical',
      stakeholder: 'Industry',
      flagged: false,
      priority: 'high'
    },
    {
      id: 'NM-D4E5F6',
      author: 'Priya Sharma',
      draft: 'Consumer Rights Bill',
      content: 'I appreciate the government\'s efforts to strengthen consumer protection. However, the implementation...',
      submittedOn: '2024-09-16 11:15',
      sentiment: 'constructive',
      stakeholder: 'Citizen',
      flagged: false,
      priority: 'medium'
    },
    {
      id: 'NM-G7H8I9',
      author: 'Anonymous',
      draft: 'Environmental Guidelines',
      content: 'This policy is completely useless and shows government incompetence...',
      submittedOn: '2024-09-16 09:45',
      sentiment: 'negative',
      stakeholder: 'Citizen',
      flagged: true,
      priority: 'low'
    }
  ];

  // Mock system analytics
  const systemAnalytics = [
    { metric: 'Daily Active Users', current: 2341, change: '+12%', status: 'up' },
    { metric: 'Feedback Response Rate', current: 78, change: '+5%', status: 'up' },
    { metric: 'Average Processing Time', current: '2.3 days', change: '-15%', status: 'up' },
    { metric: 'User Satisfaction', current: 4.2, change: '+0.1', status: 'up' }
  ];

  const handleApprove = (feedbackId: string) => {
    toast.success(`Feedback ${feedbackId} approved successfully`);
  };

  const handleReject = (feedbackId: string) => {
    toast.error(`Feedback ${feedbackId} rejected`);
  };

  const handleFlag = (feedbackId: string) => {
    toast.warning(`Feedback ${feedbackId} flagged for further review`);
  };

  const runBulkAnalysis = () => {
    toast.success('Bulk AI analysis initiated. Results will be available in 10 minutes.');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'constructive':
        return '🤔';
      case 'critical':
        return '😟';
      case 'negative':
        return '😞';
      default:
        return '📝';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header with Admin Badge */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl text-[#001F3F]">Admin Panel</h1>
            <Badge className="bg-[#FF9933] text-black">
              <Shield className="mr-1 h-3 w-3" />
              Administrator
            </Badge>
          </div>
          <p className="text-gray-600">Manage feedback, users, and system operations</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={runBulkAnalysis}
            className="bg-[#138808] hover:bg-[#0f6b06]"
          >
            <Play className="mr-2 h-4 w-4" />
            Run AI Analysis
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Reviews</p>
                <p className="text-2xl text-[#001F3F]">{adminStats.pendingReviews}</p>
                <p className="text-sm text-orange-600">Requires attention</p>
              </div>
              <MessageSquare className="h-12 w-12 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Flagged Content</p>
                <p className="text-2xl text-[#001F3F]">{adminStats.flaggedContent}</p>
                <p className="text-sm text-red-600">Immediate review</p>
              </div>
              <Flag className="h-12 w-12 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl text-[#001F3F]">{adminStats.activeUsers.toLocaleString()}</p>
                <p className="text-sm text-blue-600">+12% this week</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Feedback</p>
                <p className="text-2xl text-[#001F3F]">{adminStats.totalFeedback.toLocaleString()}</p>
                <p className="text-sm text-green-600">All time</p>
              </div>
              <FileText className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Admin Tabs */}
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reviews">Feedback Queue</TabsTrigger>
          <TabsTrigger value="analytics">Bulk Analysis</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="reports">System Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Feedback Review Queue
                </CardTitle>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search feedback..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="flagged">Flagged Only</SelectItem>
                      <SelectItem value="high-priority">High Priority</SelectItem>
                      <SelectItem value="industry">Industry Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingFeedback.map((feedback, index) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-lg p-4 ${
                      feedback.flagged ? 'border-red-200 bg-red-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg text-[#001F3F]">{feedback.author}</h3>
                          <Badge variant="outline">{feedback.stakeholder}</Badge>
                          <Badge className={getPriorityColor(feedback.priority)}>
                            {feedback.priority} priority
                          </Badge>
                          {feedback.flagged && (
                            <Badge variant="destructive">
                              <Flag className="mr-1 h-3 w-3" />
                              Flagged
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Draft: {feedback.draft} • ID: {feedback.id} • {feedback.submittedOn}
                        </p>
                        <div className="flex items-start gap-2 mb-3">
                          <span className="text-xl">{getSentimentIcon(feedback.sentiment)}</span>
                          <p className="text-gray-700 text-sm flex-1">{feedback.content}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">AI Sentiment: {feedback.sentiment}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleFlag(feedback.id)}
                        >
                          <Flag className="mr-1 h-4 w-4" />
                          Flag
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleReject(feedback.id)}
                        >
                          <XCircle className="mr-1 h-4 w-4" />
                          Reject
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-[#138808] hover:bg-[#0f6b06]"
                          onClick={() => handleApprove(feedback.id)}
                        >
                          <CheckCircle className="mr-1 h-4 w-4" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Bulk Analysis Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg mb-2">Sentiment Analysis</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Run AI analysis on all pending feedback to automatically categorize sentiment
                  </p>
                  <Button onClick={runBulkAnalysis} className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Run Sentiment Analysis
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg mb-2">Content Moderation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Automatically detect and flag inappropriate or spam content
                  </p>
                  <Button variant="outline" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Run Content Check
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg mb-2">Topic Clustering</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Group similar feedback by topics and themes
                  </p>
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Generate Clusters
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Sentiment Analysis</span>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Processed 1,247 comments • 2 hours ago</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Content Moderation</span>
                      <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Processing 892 comments • Started 30 min ago</p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Topic Clustering</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Queued for processing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg mb-2">User Management Console</h3>
                <p className="text-gray-600 mb-4">
                  Manage user accounts, permissions, and access levels
                </p>
                <Button variant="outline">
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                System Reports & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systemAnalytics.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{item.metric}</span>
                      <Badge 
                        variant="outline"
                        className={item.status === 'up' ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700'}
                      >
                        {item.change}
                      </Badge>
                    </div>
                    <p className="text-2xl text-[#001F3F]">{item.current}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg mb-4">Available Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Daily Activity Report
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Feedback Summary
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    User Engagement
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}