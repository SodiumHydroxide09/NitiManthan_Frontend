import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DatePickerDemo } from './DatePicker';
import { Badge } from './ui/badge';
import { 
  Download, 
  TrendingUp, 
  Users, 
  BarChart3, 
  PieChart, 
  FileText,
  Calendar,
  Filter
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar,
  Area,
  AreaChart
} from 'recharts';

export function AnalyticsReports() {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [selectedAct, setSelectedAct] = useState('all');
  const [region, setRegion] = useState('all');
  const [stakeholderType, setStakeholderType] = useState('all');

  // Mock data
  const sentimentTrendData = [
    { month: 'Jan', positive: 65, neutral: 25, negative: 10 },
    { month: 'Feb', positive: 70, neutral: 22, negative: 8 },
    { month: 'Mar', positive: 68, neutral: 24, negative: 8 },
    { month: 'Apr', positive: 72, neutral: 20, negative: 8 },
    { month: 'May', positive: 75, neutral: 18, negative: 7 },
  ];

  const draftComparisonData = [
    { name: 'Digital Privacy Act', comments: 1247, sentiment: 4.2, engagement: 85 },
    { name: 'Consumer Rights Bill', comments: 892, sentiment: 3.8, engagement: 72 },
    { name: 'Environmental Guidelines', comments: 2105, sentiment: 4.5, engagement: 91 },
    { name: 'Education Policy', comments: 634, sentiment: 4.1, engagement: 68 },
  ];

  const stakeholderBreakdown = [
    { name: 'Citizens', value: 45, color: '#001F3F' },
    { name: 'Industry', value: 30, color: '#FF9933' },
    { name: 'NGOs', value: 15, color: '#138808' },
    { name: 'Academics', value: 10, color: '#6B7280' }
  ];

  const regionalData = [
    { region: 'North', engagement: 28 },
    { region: 'South', engagement: 35 },
    { region: 'East', engagement: 18 },
    { region: 'West', engagement: 32 },
    { region: 'Central', engagement: 22 },
    { region: 'Northeast', engagement: 12 }
  ];

  const wordCloudData = [
    { text: 'Privacy', size: 48, color: '#001F3F' },
    { text: 'Rights', size: 42, color: '#FF9933' },
    { text: 'Digital', size: 36, color: '#138808' },
    { text: 'Protection', size: 38, color: '#001F3F' },
    { text: 'Consumer', size: 34, color: '#FF9933' },
    { text: 'Data', size: 40, color: '#138808' },
    { text: 'Policy', size: 32, color: '#6B7280' },
    { text: 'Government', size: 30, color: '#001F3F' },
    { text: 'Citizens', size: 35, color: '#FF9933' },
    { text: 'Reform', size: 28, color: '#138808' },
    { text: 'Compliance', size: 26, color: '#6B7280' },
    { text: 'Innovation', size: 31, color: '#001F3F' },
  ];

  const exportReport = (format: string) => {
    // Mock export functionality
    console.log(`Exporting report as ${format}`);
    // In real implementation, this would generate and download the file
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#001F3F] mb-2">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive analysis of policy feedback and engagement</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => exportReport('pdf')}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" onClick={() => exportReport('csv')}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" onClick={() => exportReport('excel')}>
            <Download className="mr-2 h-4 w-4" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm mb-2 block">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="last-year">Last year</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm mb-2 block">Act/Bill</label>
              <Select value={selectedAct} onValueChange={setSelectedAct}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Acts</SelectItem>
                  <SelectItem value="digital-privacy">Digital Privacy Act</SelectItem>
                  <SelectItem value="consumer-rights">Consumer Rights Bill</SelectItem>
                  <SelectItem value="environment">Environmental Guidelines</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm mb-2 block">Region</label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                  <SelectItem value="central">Central India</SelectItem>
                  <SelectItem value="northeast">Northeast</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm mb-2 block">Stakeholder</label>
              <Select value={stakeholderType} onValueChange={setStakeholderType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="citizens">Citizens</SelectItem>
                  <SelectItem value="industry">Industry</SelectItem>
                  <SelectItem value="ngo">NGOs</SelectItem>
                  <SelectItem value="academic">Academics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Engagement</p>
                <p className="text-2xl text-[#001F3F]">24,783</p>
                <p className="text-sm text-blue-600">+15% this month</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Sentiment</p>
                <p className="text-2xl text-[#001F3F]">4.3/5</p>
                <p className="text-sm text-green-600">+0.2 improvement</p>
              </div>
              <TrendingUp className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Drafts</p>
                <p className="text-2xl text-[#001F3F]">24</p>
                <p className="text-sm text-orange-600">8 closing soon</p>
              </div>
              <FileText className="h-12 w-12 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Rate</p>
                <p className="text-2xl text-[#001F3F]">78%</p>
                <p className="text-sm text-purple-600">Above target</p>
              </div>
              <BarChart3 className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sentiment Trend Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sentimentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="positive" stackId="1" stroke="#138808" fill="#138808" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="neutral" stackId="1" stroke="#FF9933" fill="#FF9933" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="negative" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stakeholder Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Stakeholder Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={stakeholderBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {stakeholderBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Draft Comparison and Regional Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Draft Comparison */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Draft Legislation Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={draftComparisonData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="comments" fill="#001F3F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Regional Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.region}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#001F3F] h-2 rounded-full" 
                        style={{width: `${(item.engagement / 40) * 100}%`}}
                      ></div>
                    </div>
                    <span className="text-sm w-8">{item.engagement}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Cloud Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Word Cloud Analysis
            <Badge variant="outline">Interactive</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
                {wordCloudData.map((word, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: `${word.size / 2}px`,
                      color: word.color,
                      cursor: 'pointer'
                    }}
                    className="hover:opacity-75 transition-opacity font-medium"
                    title={`${word.text} - Click for details`}
                  >
                    {word.text}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Word sizes represent frequency of mention in feedback. Click on words for detailed analysis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Report Viewer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-4 text-[#001F3F]">Key Findings</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Digital privacy concerns dominate 67% of all feedback</li>
                <li>• Southern states show highest engagement (35% of total)</li>
                <li>• Industry feedback has 23% higher sentiment scores</li>
                <li>• Environmental policies generate most passionate responses</li>
                <li>• Rural representation increased by 18% this quarter</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg mb-4 text-[#001F3F]">Recommendations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Enhance data privacy communication strategies</li>
                <li>• Increase outreach in northern and northeastern states</li>
                <li>• Develop targeted engagement for academic stakeholders</li>
                <li>• Implement faster response mechanisms for critical feedback</li>
                <li>• Create specialized channels for technical industry input</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Report generated on {new Date().toLocaleDateString()} | Last updated: {new Date().toLocaleTimeString()}
              </span>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Auto-Reports
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}