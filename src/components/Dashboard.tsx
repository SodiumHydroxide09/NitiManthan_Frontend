import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { 
  MessageSquare, 
  TrendingUp, 
  Users, 
  FileText, 
  Download,
  BarChart3,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DashboardProps {
  onNavigate?: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps = {}) {
  const handleExportReport = () => {
    // Simulate dashboard export
    const dashboardData = {
      timestamp: new Date().toISOString(),
      totalComments: 15492,
      activeDrafts: 24,
      engagedCitizens: 8743,
      avgSentiment: 4.3,
      sentimentData: [
        { name: 'Positive', value: 45 },
        { name: 'Neutral', value: 35 },
        { name: 'Negative', value: 20 }
      ]
    };
    
    const dataStr = JSON.stringify(dashboardData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `dashboard-report-${new Date().toISOString().split('T')[0]}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleViewWordCloud = () => {
    if (onNavigate) {
      onNavigate('wordcloud');
    } else {
      alert('Word Cloud navigation not available');
    }
  };
  // Mock data for charts
  const sentimentData = [
    { name: 'Positive', value: 45, color: '#138808' },
    { name: 'Neutral', value: 35, color: '#E0E0E0' },
    { name: 'Negative', value: 20, color: '#FF4444' }
  ];

  const trendsData = [
    { month: 'Jan', comments: 1200, sentiment: 4.2 },
    { month: 'Feb', comments: 1800, sentiment: 4.5 },
    { month: 'Mar', comments: 2100, sentiment: 4.1 },
    { month: 'Apr', comments: 2800, sentiment: 4.7 },
    { month: 'May', comments: 3200, sentiment: 4.3 }
  ];

  const categoryData = [
    { name: 'Ministry Officials', value: 45 },
    { name: 'Industry', value: 30 },
    { name: 'NGOs', value: 15 },
    { name: 'Academics', value: 10 }
  ];

  const activeDeadlines = [
    { title: 'Digital Privacy Act', deadline: '15 days left', priority: 'high' },
    { title: 'Consumer Rights Bill', deadline: '23 days left', priority: 'medium' },
    { title: 'Environmental Guidelines', deadline: '45 days left', priority: 'low' }
  ];

  const keyInsights = [
    "Digital privacy concerns dominate recent feedback",
    "Ministry participation increased by 23% this quarter",
    "Environmental policies show highest engagement rates",
    "Inter-ministry response time improved by 40%"
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#001F3F] mb-2">Policy Analytics Dashboard</h1>
          <p className="text-gray-600">Real-time insights into ministry engagement and policy feedback</p>
        </div>
        <Button 
          className="bg-[#FF9933] hover:bg-[#e8862e] text-black"
          onClick={handleExportReport}
        >
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-[#138808]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Comments</p>
                <p className="text-2xl text-[#001F3F]">15,492</p>
                <p className="text-sm text-[#138808]">+12% from last month</p>
              </div>
              <MessageSquare className="h-12 w-12 text-[#138808]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#FF9933]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Drafts</p>
                <p className="text-2xl text-[#001F3F]">24</p>
                <p className="text-sm text-[#FF9933]">8 closing soon</p>
              </div>
              <FileText className="h-12 w-12 text-[#FF9933]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ministry Officials</p>
                <p className="text-2xl text-[#001F3F]">8,743</p>
                <p className="text-sm text-blue-600">+18% engagement</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Sentiment</p>
                <p className="text-2xl text-[#001F3F]">4.3/5</p>
                <p className="text-sm text-purple-600">Positive trend</p>
              </div>
              <TrendingUp className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Analysis Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001F3F]">
              <BarChart3 className="mr-2 h-5 w-5" />
              Sentiment Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Trends Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001F3F]">
              <TrendingUp className="mr-2 h-5 w-5" />
              Feedback Trends (Last 5 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="comments" stroke="#001F3F" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Charts and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stakeholder Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001F3F]">
              <Users className="mr-2 h-5 w-5" />
              Stakeholder Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{category.name}</span>
                    <span className="text-sm text-gray-600">{category.value}%</span>
                  </div>
                  <Progress value={category.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001F3F]">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeDeadlines.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.deadline}</p>
                  </div>
                  <Badge variant={
                    item.priority === 'high' ? 'destructive' : 
                    item.priority === 'medium' ? 'default' : 
                    'secondary'
                  }>
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {item.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001F3F]">
              <TrendingUp className="mr-2 h-5 w-5" />
              AI-Generated Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {keyInsights.map((insight, index) => (
                <div key={index} className="p-3 rounded-lg bg-blue-50 border-l-4 border-l-[#138808]">
                  <p className="text-sm text-gray-700">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Cloud Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-[#001F3F]">
            <span className="flex items-center">
              Word Cloud Preview
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleViewWordCloud}
            >
              View Full Cloud
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 h-40 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <span className="text-2xl text-[#001F3F]">Privacy</span>
                <span className="text-lg text-[#138808]">Digital</span>
                <span className="text-3xl text-[#FF9933]">Rights</span>
                <span className="text-lg text-gray-600">Consumer</span>
                <span className="text-xl text-blue-600">Protection</span>
                <span className="text-lg text-purple-600">Environment</span>
                <span className="text-2xl text-[#001F3F]">Policy</span>
                <span className="text-lg text-[#138808]">Reform</span>
              </div>
              <p className="text-sm text-gray-500">Interactive word cloud based on recent feedback</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}