import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DatePicker } from './DatePicker';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Download, 
  Filter,
  Users,
  MessageSquare,
  ThumbsUp,
  AlertTriangle
} from 'lucide-react';

export function TrendReport() {
  const [selectedPolicy, setSelectedPolicy] = useState('all');
  const [timeRange, setTimeRange] = useState('3m');
  const [reportType, setReportType] = useState('engagement');

  const handleExportReport = () => {
    // Simulate report export
    const reportData = {
      policy: selectedPolicy,
      timeRange: timeRange,
      type: reportType,
      generatedAt: new Date().toISOString(),
      data: 'Sample report data...'
    };
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `trend-report-${timeRange}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleCustomRange = () => {
    alert('Custom date range picker would open here');
  };

  // Mock trend data
  const engagementTrend = [
    { date: '2024-01', submissions: 245, views: 3200, participants: 189 },
    { date: '2024-02', submissions: 312, views: 4100, participants: 234 },
    { date: '2024-03', submissions: 387, views: 5200, participants: 298 },
    { date: '2024-04', submissions: 423, views: 6100, participants: 334 },
    { date: '2024-05', submissions: 398, views: 5800, participants: 312 },
    { date: '2024-06', submissions: 456, views: 6900, participants: 378 },
  ];

  const sentimentTrend = [
    { date: '2024-01', positive: 65, negative: 25, neutral: 10 },
    { date: '2024-02', positive: 68, negative: 22, neutral: 10 },
    { date: '2024-03', positive: 72, negative: 18, neutral: 10 },
    { date: '2024-04', positive: 69, negative: 21, neutral: 10 },
    { date: '2024-05', positive: 74, negative: 16, neutral: 10 },
    { date: '2024-06', positive: 76, negative: 14, neutral: 10 },
  ];

  const policyPerformance = [
    { policy: 'Digital India Act', submissions: 1247, sentiment: 74, status: 'active' },
    { policy: 'Corporate Reform', submissions: 892, sentiment: 68, status: 'active' },
    { policy: 'Data Protection', submissions: 756, sentiment: 71, status: 'draft' },
    { policy: 'Startup India 2.0', submissions: 634, sentiment: 79, status: 'active' },
    { policy: 'Green Energy Policy', submissions: 523, sentiment: 82, status: 'consultation' },
  ];

  const demographicData = [
    { segment: 'Youth (18-30)', value: 35, color: '#8884d8' },
    { segment: 'Professionals (31-45)', value: 28, color: '#82ca9d' },
    { segment: 'Senior Citizens (60+)', value: 20, color: '#ffc658' },
    { segment: 'Middle Age (46-60)', value: 17, color: '#ff7300' },
  ];

  const policies = [
    { id: 'all', name: 'All Policies' },
    { id: 'digital-india', name: 'Digital India Act 2024' },
    { id: 'corporate-reform', name: 'Corporate Governance Reform' },
    { id: 'data-protection', name: 'Data Protection Bill' },
    { id: 'startup-policy', name: 'Startup India 2.0' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[#138808] text-white';
      case 'draft': return 'bg-[#FF9933] text-white';
      case 'consultation': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTrendIcon = (current: number, previous: number) => {
    return current > previous ? (
      <TrendingUp className="h-4 w-4 text-[#138808]" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#001F3F]">Trend Reports</h1>
          <p className="text-gray-600 mt-2">
            Comprehensive analytics and insights on ministry engagement trends
          </p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={handleCustomRange}
          >
            <Calendar className="h-4 w-4" />
            <span>Custom Range</span>
          </Button>
          <Button 
            className="bg-[#001F3F] hover:bg-[#001F3F]/90 flex items-center space-x-2"
            onClick={handleExportReport}
          >
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Report Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Policy Focus</label>
              <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select policy" />
                </SelectTrigger>
                <SelectContent>
                  {policies.map(policy => (
                    <SelectItem key={policy.id} value={policy.id}>
                      {policy.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Time Period</label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">Last Month</SelectItem>
                  <SelectItem value="3m">Last 3 Months</SelectItem>
                  <SelectItem value="6m">Last 6 Months</SelectItem>
                  <SelectItem value="1y">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Engagement Trends</SelectItem>
                  <SelectItem value="sentiment">Sentiment Analysis</SelectItem>
                  <SelectItem value="demographic">Demographic Insights</SelectItem>
                  <SelectItem value="comparative">Comparative Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#001F3F]">2,847</div>
                <div className="text-sm text-gray-600">Total Submissions</div>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(2847, 2456)}
                <span className="text-sm text-[#138808]">+15.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#001F3F]">1,234</div>
                <div className="text-sm text-gray-600">Ministry Officials</div>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(1234, 1098)}
                <span className="text-sm text-[#138808]">+12.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#138808]">76%</div>
                <div className="text-sm text-gray-600">Positive Sentiment</div>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(76, 69)}
                <span className="text-sm text-[#138808]">+7pts</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#001F3F]">4.2</div>
                <div className="text-sm text-gray-600">Avg. Engagement Score</div>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(42, 38)}
                <span className="text-sm text-[#138808]">+0.4</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="engagement" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="engagement">Engagement Trends</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="policies">Policy Performance</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ministry Engagement Over Time</CardTitle>
              <p className="text-sm text-gray-600">
                Track participation trends across different metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="submissions" 
                      stroke="#001F3F" 
                      strokeWidth={3}
                      name="Submissions"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="participants" 
                      stroke="#138808" 
                      strokeWidth={3}
                      name="Participants"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#FF9933" 
                      strokeWidth={3}
                      name="Page Views"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Trends</CardTitle>
              <p className="text-sm text-gray-600">
                Monitor ministry sentiment changes over time
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sentimentTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="positive" 
                      stackId="1" 
                      stroke="#138808" 
                      fill="#138808" 
                      fillOpacity={0.8}
                      name="Positive %"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="neutral" 
                      stackId="1" 
                      stroke="#FF9933" 
                      fill="#FF9933" 
                      fillOpacity={0.8}
                      name="Neutral %"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="negative" 
                      stackId="1" 
                      stroke="#dc2626" 
                      fill="#dc2626" 
                      fillOpacity={0.8}
                      name="Negative %"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Policy Performance Comparison</CardTitle>
              <p className="text-sm text-gray-600">
                Compare engagement and sentiment across different policies
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {policyPerformance.map((policy, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold">{policy.policy}</h3>
                          <Badge className={getStatusColor(policy.status)}>
                            {policy.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{policy.submissions} submissions</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{policy.sentiment}% positive</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-[#001F3F]">
                          {policy.sentiment}%
                        </div>
                        <div className="text-sm text-gray-600">
                          Avg. Sentiment
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Participant Demographics</CardTitle>
                <p className="text-sm text-gray-600">
                  Age group distribution of active participants
                </p>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={demographicData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ segment, value }) => `${segment}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {demographicData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Participation</CardTitle>
                <p className="text-sm text-gray-600">
                  Top participating states and regions
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { state: 'Maharashtra', participation: 18, growth: '+12%' },
                    { state: 'Karnataka', participation: 15, growth: '+8%' },
                    { state: 'Tamil Nadu', participation: 13, growth: '+15%' },
                    { state: 'Delhi', participation: 12, growth: '+5%' },
                    { state: 'Gujarat', participation: 10, growth: '+20%' },
                  ].map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <div className="font-medium">{region.state}</div>
                        <div className="text-sm text-gray-600">{region.participation}% of total</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#138808]">{region.growth}</div>
                        <div className="text-xs text-gray-600">vs last period</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#138808] pl-4">
              <h4 className="font-semibold text-[#138808] flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Growing Engagement</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Ministry participation has increased by 24% over the last quarter, particularly in digital policy discussions.
              </p>
            </div>
            
            <div className="border-l-4 border-[#FF9933] pl-4">
              <h4 className="font-semibold text-[#FF9933] flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Youth Participation</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                35% of participants are under 30, showing strong engagement from younger demographics on technology policies.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-600 flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Areas for Improvement</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Rural ministry participation remains low at 12%. Consider regional language support and offline engagement strategies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}