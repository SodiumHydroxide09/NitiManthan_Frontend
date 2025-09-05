import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  MessageSquare, 
  Eye, 
  Bell, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Star,
  FileText,
  Users
} from 'lucide-react';

export function MyWorkspace() {
  const [activeTab, setActiveTab] = useState('submissions');

  // Mock user data
  const userStats = {
    totalSubmissions: 12,
    approvedFeedback: 8,
    pendingReview: 3,
    engagementScore: 87
  };

  const submittedFeedback = [
    {
      id: 'NM-A2B3C4D5',
      title: 'Digital Privacy Protection Act 2024',
      submittedOn: '2024-09-15',
      status: 'Under Review',
      category: 'Data Protection',
      sentiment: 'positive',
      views: 34
    },
    {
      id: 'NM-E6F7G8H9',
      title: 'Consumer Rights Amendment Bill',
      submittedOn: '2024-09-10',
      status: 'Approved',
      category: 'Consumer Rights',
      sentiment: 'constructive',
      views: 67
    },
    {
      id: 'NM-I1J2K3L4',
      title: 'Environmental Protection Guidelines',
      submittedOn: '2024-09-05',
      status: 'Published',
      category: 'Environment',
      sentiment: 'positive',
      views: 123
    },
    {
      id: 'NM-M5N6O7P8',
      title: 'Education Policy Framework',
      submittedOn: '2024-08-28',
      status: 'Incorporated',
      category: 'Education',
      sentiment: 'positive',
      views: 89
    }
  ];

  const followedDrafts = [
    {
      title: 'Digital Privacy Protection Act 2024',
      ministry: 'Electronics & IT',
      lastUpdate: '2 days ago',
      status: 'Active',
      deadline: '2024-10-15',
      newComments: 23
    },
    {
      title: 'Healthcare Policy Reform',
      ministry: 'Health & Family Welfare',
      lastUpdate: '1 week ago',
      status: 'Active',
      deadline: '2024-11-30',
      newComments: 45
    },
    {
      title: 'Renewable Energy Guidelines',
      ministry: 'New & Renewable Energy',
      lastUpdate: '3 days ago',
      status: 'Active',
      deadline: '2024-12-10',
      newComments: 12
    }
  ];

  const notifications = [
    {
      type: 'feedback-approved',
      title: 'Your feedback on Digital Privacy Act has been approved',
      time: '2 hours ago',
      read: false
    },
    {
      type: 'new-response',
      title: 'Ministry responded to your Consumer Rights feedback',
      time: '1 day ago',
      read: false
    },
    {
      type: 'draft-updated',
      title: 'Environmental Protection Guidelines has been updated',
      time: '3 days ago',
      read: true
    },
    {
      type: 'deadline-reminder',
      title: 'Reminder: Education Policy feedback closes in 7 days',
      time: '5 days ago',
      read: true
    }
  ];

  const achievements = [
    {
      title: 'Active Contributor',
      description: 'Submitted feedback on 10+ policy drafts',
      icon: '🏆',
      earned: true,
      date: '2024-09-01'
    },
    {
      title: 'Quality Feedback',
      description: '90% of your feedback received positive ratings',
      icon: '⭐',
      earned: true,
      date: '2024-08-15'
    },
    {
      title: 'Early Adopter',
      description: 'One of the first 100 users on Niti Manthan',
      icon: '🚀',
      earned: true,
      date: '2024-07-10'
    },
    {
      title: 'Policy Influencer',
      description: 'Your feedback influenced 3+ policy changes',
      icon: '💡',
      earned: false,
      date: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
      case 'Approved':
      case 'Incorporated':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'constructive':
        return '🤔';
      case 'neutral':
        return '😐';
      case 'critical':
        return '😔';
      default:
        return '📝';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#001F3F] mb-2">My Workspace</h1>
          <p className="text-gray-600">Track your contributions and stay updated on policy developments</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-[#138808]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Submissions</p>
                <p className="text-2xl text-[#001F3F]">{userStats.totalSubmissions}</p>
              </div>
              <MessageSquare className="h-12 w-12 text-[#138808]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#FF9933]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Feedback</p>
                <p className="text-2xl text-[#001F3F]">{userStats.approvedFeedback}</p>
              </div>
              <CheckCircle className="h-12 w-12 text-[#FF9933]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl text-[#001F3F]">{userStats.pendingReview}</p>
              </div>
              <Clock className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Engagement Score</p>
                <p className="text-2xl text-[#001F3F]">{userStats.engagementScore}/100</p>
              </div>
              <TrendingUp className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Submitted Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submittedFeedback.map((feedback, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg text-[#001F3F] mb-1">{feedback.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>ID: {feedback.id}</span>
                          <span>Submitted: {new Date(feedback.submittedOn).toLocaleDateString()}</span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {feedback.views} views
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getSentimentIcon(feedback.sentiment)}</span>
                        <Badge className={getStatusColor(feedback.status)}>
                          {feedback.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{feedback.category}</Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="following" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Followed Drafts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {followedDrafts.map((draft, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg text-[#001F3F] mb-1">{draft.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{draft.ministry}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Last update: {draft.lastUpdate}</span>
                          <span>Deadline: {new Date(draft.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-[#138808]">
                        {draft.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-orange-500" />
                        <span className="text-sm text-gray-600">
                          {draft.newComments} new comments
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Updates
                        </Button>
                        <Button variant="outline" size="sm">
                          Unfollow
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </span>
                <Button variant="outline" size="sm">
                  Mark All as Read
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className={`border rounded-lg p-4 ${!notification.read ? 'bg-blue-50 border-blue-200' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-[#001F3F] mb-1">{notification.title}</p>
                        <p className="text-xs text-gray-600">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Achievements & Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`border-2 rounded-lg p-6 ${achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className={`text-lg mb-2 ${achievement.earned ? 'text-[#001F3F]' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-3 ${achievement.earned ? 'text-gray-700' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned ? (
                          <Badge className="bg-green-100 text-green-800">
                            Earned {new Date(achievement.date!).toLocaleDateString()}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-gray-500">
                            Not Earned Yet
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Engagement Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Monthly Engagement Goal</span>
                <span className="text-sm text-gray-600">8/10 drafts</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Quality Score</span>
                <span className="text-sm text-gray-600">87/100</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Community Impact</span>
                <span className="text-sm text-gray-600">650/1000 points</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm text-[#001F3F] mb-2">Next Level Benefits:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Early access to new policy drafts</li>
              <li>• Direct engagement with policy makers</li>
              <li>• Featured contributor status</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}