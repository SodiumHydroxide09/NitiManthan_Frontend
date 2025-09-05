import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
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
  // --- Paste your Base64 string for the PDF here ---
  const pdfBase64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgaHR0cDovL3d3dy5yZXBvcnRsYWIuY29tCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNCAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YxIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKMyAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0Jhc2VGb250IC9aYXBmRGluZ2JhdHMgL05hbWUgL0YzIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNSAwIG9iago8PAovQ29udGVudHMgMTAgMCBSIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NiA4NDEuODg5OCBdIC9QYXJlbnQgOSAwIFIgL1Jlc291cmNlcyA8PAovRm9udCAxIDAgUiAvUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgL1RyYW5zIDw8Cgo+PiAKICAvVHlwZSAvUGFnZQo+PgplbmRvYmoKNiAwIG9iago8PAovQ29udGVudHMgMTEgMCBSIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NiA4NDEuODg5OCBdIC9QYXJlbnQgOSAwIFIgL1Jlc291cmNlcyA8PAovRm9udCAxIDAgUiAvUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgL1RyYW5zIDw8Cgo+PiAKICAvVHlwZSAvUGFnZQo+PgplbmRvYmoKNyAwIG9iago8PAovUGFnZU1vZGUgL1VzZU5vbmUgL1BhZ2VzIDkgMCBSIC9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iago4IDAgb2JqCjw8Ci9BdXRob3IgKFwoYW5vbnltb3VzXCkpIC9DcmVhdGlvbkRhdGUgKEQ6MjAyNTA5MDUyMjE3MzArMDAnMDAnKSAvQ3JlYXRvciAoXCh1bnNwZWNpZmllZFwpKSAvS2V5d29yZHMgKCkgL01vZERhdGUgKEQ6MjAyNTA5MDUyMjE3MzArMDAnMDAnKSAvUHJvZHVjZXIgKFJlcG9ydExhYiBQREYgTGlicmFyeSAtIHd3dy5yZXBvcnRsYWIuY29tKSAKICAvU3ViamVjdCAoXCh1bnNwZWNpZmllZFwpKSAvVGl0bGUgKE5pdGkgTWFudGhhbiAtIFBvbGljeSBBbmFseXRpY3MgRGFzaGJvYXJkIFJlcG9ydCkgL1RyYXBwZWQgL0ZhbHNlCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9Db3VudCAyIC9LaWRzIFsgNSAwIFIgNiAwIFIgXSAvVHlwZSAvUGFnZXMKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9GaWx0ZXIgWyAvQVNDSUk4NURlY29kZSAvRmxhdGVEZWNvZGUgXSAvTGVuZ3RoIDE3MTcKPj4Kc3RyZWFtCkdhdG08OWxvJkkmQUBzQm0pOmJxYF4wKVtuMDlrPk5ucExTaVpyN2xEJUFILGFbZGkuLHEzTCFuJS9RK01PIk9mcDEtLUBhaS5gWlwsYkFpTF1QSlFnJktfRGk2PDZKU01PWG5rIkIoXyQiLzJnbilkLj8qTzNtR01CTjwwTTtvbCQqbldecEFQJ3NuRSNvL3FtbTI8KDxfIiFkb2BKVSMyJFc2WjY1LGtmJzcwQEwyXUFqSVU6RXUrR1I7dTVZLVReTSgyOkwiRkI2Ol4+MlMyJEJzaUlFbEU3NFdoZEhFbWp0QC4/Y1poVWtgS0M4KV9uaGM+KUBNKjcjaDMyMiQ+Ky1rXDU3bVpkUkdmcGdMNG5GWFFMIytXazFhJkRjP2xzM15ONz86KlFCL08oPkZDTjBAbSI6VVxBNDRNb0I7Q20ybUZyMVVRPFY0LFFmbEkzR0htXjttR0toTmlbRVBpVUYsR0JWcyxidGlUaWZLRldqVTJLL1hxbVxQQVJZXTFEUDdKOCRVdVAuZFlzKEFCLl83LFtYaTMsUDouJGdvPDEiLlcsWTxDLFhfcGhhIjI1aGpCSiFRV2BUW1VcPSNNRmYhPy87QHRdVjo2OmJ0K0guZXVSXUloYE48QV8pZ0NJRytXPm44OFhKcVgkOmlbVVZMNz1URzRMLVQ/bl5XOy4xXUg7YllaOl50JDArIiNKT0AtZjhLJSRnS3BCbzNHRlFuRyVXNVNVK2Y3TztMMmoiWl8kUVIoJGBlNWxyQ0wrJDcwJEQsXFA3Ym5caSdCRlRdJFBSdUQ7aXJhV0FDKy1eLl1rQSMtTG1QSyFhT1hMJSZbOnFVZHBNYS5TO2lcbCoscWEhNkBhZmM5InM1dEJfbDdBS2hMOE8wKGpJMChWTidoQ1lTVFZXYmYxLyNmOj9YakgxND5oSVllYTFRbHEiTzAzYUROZyVoN20zJidEdWYyRW8kMVVJKig/SlsxQ0xtWGBXYTdFdTlsS25VVl1mUy9wZCtCPyhnJGElWWpkcHU6WV0nS1xDalsuWkpmXE1JYD5POFtGISNlVEx1UnNYUUE1RUBMI1BrX2FnTDYhVWg3clR0K11ARzluOzZCLlVBbkIyYTUoWD0sTEU0SHM+OSdnaU9OMk1RMVdccFhnLClmdV5CWDVUXGs2MT46NjI6USJcQ05OMW8vJWw7MEolKUxwT2o/P1tjVTFaRywhS1xoKWNDLnNRRTFVL0c9XEJyNWRrSSVkUWktU2BRZjJkJkVgck5hTlgiTzw5OWduYFd0PFhVNmU5I3JBbitKVVpnLHBuaig/NGlcQ1FsbnNDJCRVXFFjNS81WVBrTCtaMm4lOWNRWGFKXTJPK2tHbjpOYylyL19cYFsrXk5OJ1NpVi5jQkZmPGw2M0NZOF9na2ZXST5XLldTcEc4JFlMYDpNSShxPGRPT2ohVTVlQkRsQGFGLSw1OU8kV1BcI29ZMSEsRmA2T0U+QCRISSVrU1gxSFNjMyphLGtnZycxY0A6LkNZYzBIby86LHNCQV9uRFNfcV8mNEElQUZmT29NQ2hlLjdKaGUuN0poZTJlNz9vUDY2Vl8razhkOiFyJUYhNyxMO0w6SkgvcDZcYEg0byIrOlAvUixINCFKQVJlMXJeI2k6UEAsbVcpdEsyXkA9S1M3ZyNFYGRrWi5FaFR0WXFaXzovVGBCbShTQic8JTZbTG5GSjc5MVxqNi8iZ2kxKVdcYEUqOyNLSDo9OGNqTSFBYF9WW1VoOy9faj5jSWhDaTplXDgkYj9yIzBvT1pfcnMqa08pJGBfcWcqYSg5Ni1FYy1NSjhHPmhYN1tvQyJsYD03b00xWz5USz5sKkFhXnAqW19tYnBmYHRsLUp1b1JqL0RkXi8qIT40N2VdSk44blJxRXJEQVk3Q29URT0lY20qPC1qKk9lVExYbVk8O0g7LGcxMC8zXTtGayhBMjohUylPZyFecEQkIlNVM29fK2BdQ2xJWW9QajNccUtLV0MvPzFBaihQUEdaV1xkV1t1QkZgJEFXKW9LcXJLWTdYMVlIL0s4YCQ4RnVebz1saSs0QmpmITtTPzs1IXM1QSZvPWYmNURFRVgkKGk/aEBmYWw3KGNAL1VYR1A1PkcoXmsudFg5Kk9qcj8qWk5HJVBRI3BZN1dkOC1Jc1pAVVxvXCZQR1tRb19sdTQtUW1ZQGU5NERZRUQoLDFANVtPYnAlakc0JlwtWUFmQnBTWi8yQzM/MihUME4rVVRLZmJaKlFFOj9vbkEoY19ANjVTU1g0fj5lbmRzdHJlYW0KZW5kb2JqCjExIDAgb2JqCjw8Ci9GaWx0ZXIgWyAvQVNDSUk4NURlY29kZSAvRmxhdGVEZWNvZGUgXSAvTGVuZ3RoIDQzMQo+PgpzdHJlYW0KR2F0VW41dTU/XyY7QlROTUteNEA7ZXJpVmczT0dmMSFyQlwnLypbLCk5TmtAXCpQXllyazI2LDZrMTFeUE8nQEliajtoMTdOZ1wlZ1RzZW4/JUpJTSE+MilvNjZvdWtpWClCU1pmbTU2YlZWXFVqQytBOSktPSRSRCQ9LWZcNXF0TkVNOypvTUtaLFU3TWtNOzolOWRCRlBeb15QaCsjTTJQbGEwNmdEZmxsIkdbMCVIOlwxSU82J045MjZaTT9EQDNfRVJoQS1Fcj4lYHAhO1M3bCc4VkYvKDIvJVVHNmglK3BVJV9DV3A8UCxOaEEoL28sMyM/cVg7YDFmI1tKaUhgck5pRzgqQix0a0JxZyhDdHMiSzw7VDxrQk0kOz4ybjtvXXN0ZzFycDE+NlA1MCYrOnVQNFJlNkRORzUhXzVJaDFBaTY+J05kMXJQbGcnK0YmOTNQZ1dNUSkrKCVZLzAmMnFicmpkIl4wcilxJlIhcVglZStrPVxDWSpebU1oKzAjM1JIWzheWj1jN3RvakcuVz5uUVdbdXJrMVZPYU5FKyJkNy09citHZmhIfj5lbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCAxMgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwNzMgMDAwMDAgbiAKMDAwMDAwMDEyNCAwMDAwMCBuIAowMDAwMDAwMjMxIDAwMDAwIG4gCjAwMDAwMDAzNDMgMDAwMDAgbiAKMDAwMDAwMDQyNiAwMDAwMCBuIAowMDAwMDAwNjMwIDAwMDAwIG4gCjAwMDAwMDA4MzQgMDAwMDAgbiAKMDAwMDAwMDkwMiAwMDAwMCBuIAowMDAwMDAxMjIwIDAwMDAwIG4gCjAwMDAwMDEyODUgMDAwMDAgbiAKMDAwMDAwMzA5NCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9JRCAKWzw5MDU2M2RiMzdhNWYzZWEyMmU4ZGI4YTAyODNiMjA3ND48OTA1NjNkYjM3YTVmM2VhMjJlOGRiOGEwMjgzYjIwNzQ+XQolIFJlcG9ydExhYiBnZW5lcmF0ZWQgUERGIGRvY3VtZW50IC0tIGRpZ2VzdCAoaHR0cDovL3d3dy5yZXBvcnRsYWIuY29tKQoKL0luZm8gOCAwIFIKL1Jvb3QgNyAwIFIKL1NpemUgMTIKPj4Kc3RhcnR4cmVmCjM2MTYKJSVFT0YK";

  const handleExportReport = () => {
    // This function now downloads the hardcoded PDF
    const dataUri = `data:application/pdf;base64,${pdfBase64}`;
    const exportFileDefaultName = `dashboard-report-${new Date().toISOString().split('T')[0]}.pdf`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    document.body.appendChild(linkElement); // Required for Firefox
    linkElement.click();
    document.body.removeChild(linkElement); // Clean up
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

