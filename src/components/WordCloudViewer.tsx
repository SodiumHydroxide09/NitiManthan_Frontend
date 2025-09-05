import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Search, Download, Filter, RefreshCw, X, TrendingUp, MessageSquare, Calendar } from 'lucide-react';

export function WordCloudViewer() {
  const [selectedPolicy, setSelectedPolicy] = useState('all');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedWord, setSelectedWord] = useState<any>(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  // Mock word cloud data with detailed analysis
  const wordCloudData = [
    { 
      word: 'transparency', 
      frequency: 156, 
      sentiment: 'positive', 
      size: 48,
      trend: '+23%',
      contexts: ['Government Operations', 'Policy Making', 'Public Information'],
      relatedPolicies: ['Digital India Act', 'RTI Amendment'],
      weeklyData: [23, 28, 31, 35, 39, 42, 45],
      topComments: [
        'We need more transparency in government decisions',
        'Transparency builds trust between citizens and government',
        'Great initiative for transparent governance'
      ]
    },
    { 
      word: 'accountability', 
      frequency: 134, 
      sentiment: 'positive', 
      size: 42,
      trend: '+18%',
      contexts: ['Government Performance', 'Public Service', 'Electoral Process'],
      relatedPolicies: ['Corporate Governance Reform', 'Public Service Delivery'],
      weeklyData: [18, 22, 25, 28, 32, 35, 38],
      topComments: [
        'Accountability is key to good governance',
        'We need accountable public servants',
        'Accountability mechanisms should be strengthened'
      ]
    },
    { 
      word: 'corruption', 
      frequency: 128, 
      sentiment: 'negative', 
      size: 40,
      trend: '-12%',
      contexts: ['Government Offices', 'Public Services', 'Licensing'],
      relatedPolicies: ['Anti-Corruption Bill', 'Whistleblower Protection'],
      weeklyData: [45, 42, 38, 35, 32, 28, 25],
      topComments: [
        'Corruption is still a major issue',
        'Need stronger anti-corruption measures',
        'Zero tolerance for corruption'
      ]
    },
    { 
      word: 'efficiency', 
      frequency: 112, 
      sentiment: 'positive', 
      size: 36,
      trend: '+15%',
      contexts: ['Public Services', 'Digital Systems', 'Process Improvement'],
      relatedPolicies: ['e-Governance Initiative', 'Service Delivery Reform'],
      weeklyData: [15, 18, 21, 24, 27, 30, 33],
      topComments: [
        'Government services are becoming more efficient',
        'Digital transformation improves efficiency',
        'Need more efficient processes'
      ]
    },
    { 
      word: 'bureaucracy', 
      frequency: 98, 
      sentiment: 'negative', 
      size: 32,
      trend: '-8%',
      contexts: ['Administrative Processes', 'Government Offices', 'Red Tape'],
      relatedPolicies: ['Administrative Reform', 'Ease of Doing Business'],
      weeklyData: [35, 33, 31, 29, 27, 25, 23],
      topComments: [
        'Too much bureaucracy slows things down',
        'Reduce bureaucratic hurdles',
        'Bureaucracy needs to be simplified'
      ]
    },
    { 
      word: 'digital', 
      frequency: 89, 
      sentiment: 'positive', 
      size: 30,
      trend: '+25%',
      contexts: ['Technology Adoption', 'Online Services', 'Digital Infrastructure'],
      relatedPolicies: ['Digital India Act', 'Digital Payment Policy'],
      weeklyData: [12, 15, 18, 21, 24, 27, 30],
      topComments: [
        'Digital transformation is excellent',
        'Love the digital services',
        'More digital initiatives needed'
      ]
    },
    { 
      word: 'reform', 
      frequency: 87, 
      sentiment: 'positive', 
      size: 28,
      trend: '+20%',
      contexts: ['Policy Changes', 'Structural Changes', 'Legal Framework'],
      relatedPolicies: ['Economic Reform Package', 'Judicial Reform'],
      weeklyData: [10, 13, 16, 19, 22, 25, 28],
      topComments: [
        'Much needed reforms',
        'Reforms are in the right direction',
        'Support these reform initiatives'
      ]
    },
    { 
      word: 'inclusive', 
      frequency: 76, 
      sentiment: 'positive', 
      size: 26,
      trend: '+17%',
      contexts: ['Social Policy', 'Equal Access', 'Minority Rights'],
      relatedPolicies: ['Inclusive Growth Policy', 'Social Justice Act'],
      weeklyData: [8, 11, 14, 17, 20, 23, 26],
      topComments: [
        'Policies should be inclusive',
        'Great focus on inclusivity',
        'Need more inclusive approach'
      ]
    },
    { 
      word: 'delays', 
      frequency: 72, 
      sentiment: 'negative', 
      size: 24,
      trend: '-10%',
      contexts: ['Project Implementation', 'Service Delivery', 'Decision Making'],
      relatedPolicies: ['Fast Track Implementation', 'Time-bound Services'],
      weeklyData: [28, 26, 24, 22, 20, 18, 16],
      topComments: [
        'Too many delays in implementation',
        'Reduce project delays',
        'Delays frustrate citizens'
      ]
    },
    { 
      word: 'innovation', 
      frequency: 68, 
      sentiment: 'positive', 
      size: 22,
      trend: '+22%',
      contexts: ['Technology Solutions', 'Policy Innovation', 'Service Innovation'],
      relatedPolicies: ['Innovation Policy', 'Startup India'],
      weeklyData: [6, 9, 12, 15, 18, 21, 24],
      topComments: [
        'Innovation in governance is great',
        'Need more innovative solutions',
        'Support innovation initiatives'
      ]
    },
    { 
      word: 'participation', 
      frequency: 65, 
      sentiment: 'positive', 
      size: 20,
      trend: '+19%',
      contexts: ['Citizen Engagement', 'Public Consultation', 'Democratic Process'],
      relatedPolicies: ['Citizen Participation Framework', 'Public Consultation Policy'],
      weeklyData: [5, 8, 11, 14, 17, 20, 23],
      topComments: [
        'More citizen participation needed',
        'Great platform for participation',
        'Participation makes democracy stronger'
      ]
    },
    { 
      word: 'complexity', 
      frequency: 62, 
      sentiment: 'negative', 
      size: 18,
      trend: '-7%',
      contexts: ['Administrative Procedures', 'Legal Framework', 'Service Access'],
      relatedPolicies: ['Simplification Initiative', 'Ease of Access Program'],
      weeklyData: [22, 21, 20, 19, 18, 17, 16],
      topComments: [
        'Processes are too complex',
        'Simplify complex procedures',
        'Complexity creates barriers'
      ]
    },
    { 
      word: 'accessibility', 
      frequency: 58, 
      sentiment: 'positive', 
      size: 16,
      trend: '+14%',
      contexts: ['Service Access', 'Digital Inclusion', 'Physical Access'],
      relatedPolicies: ['Accessibility Standards', 'Universal Access Program'],
      weeklyData: [4, 7, 10, 13, 16, 19, 22],
      topComments: [
        'Improve accessibility for all',
        'Good accessibility features',
        'Need better accessibility'
      ]
    },
    { 
      word: 'sustainable', 
      frequency: 54, 
      sentiment: 'positive', 
      size: 14,
      trend: '+16%',
      contexts: ['Environmental Policy', 'Long-term Planning', 'Resource Management'],
      relatedPolicies: ['Sustainable Development Goals', 'Green Policy Framework'],
      weeklyData: [3, 6, 9, 12, 15, 18, 21],
      topComments: [
        'Focus on sustainable development',
        'Sustainability is important',
        'Support sustainable policies'
      ]
    },
    { 
      word: 'outdated', 
      frequency: 51, 
      sentiment: 'negative', 
      size: 12,
      trend: '-5%',
      contexts: ['Legacy Systems', 'Old Procedures', 'Traditional Methods'],
      relatedPolicies: ['Modernization Initiative', 'System Upgrade Program'],
      weeklyData: [18, 17, 16, 15, 14, 13, 12],
      topComments: [
        'Many systems are outdated',
        'Need to modernize outdated processes',
        'Replace outdated infrastructure'
      ]
    },
  ];

  const policies = [
    { id: 'all', name: 'All Policies' },
    { id: 'digital-india', name: 'Digital India Act 2024' },
    { id: 'corporate-reform', name: 'Corporate Governance Reform' },
    { id: 'data-protection', name: 'Data Protection Bill' },
    { id: 'startup-policy', name: 'Startup India 2.0' },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-[#138808]';
      case 'negative': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSentimentBg = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100';
      case 'negative': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const filteredWords = wordCloudData.filter(word => {
    if (sentimentFilter !== 'all' && word.sentiment !== sentimentFilter) return false;
    return true;
  });

  const handleWordClick = (word: any) => {
    setSelectedWord(word);
    setIsAnalysisOpen(true);
  };

  const handleRefresh = () => {
    // Simulate data refresh
    window.location.reload();
  };

  const handleExport = () => {
    // Simulate export functionality
    const dataStr = JSON.stringify(filteredWords, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'word-cloud-data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#001F3F]">Word Cloud Viewer</h1>
          <p className="text-gray-600 mt-2">
            Visualize ministry sentiment and key themes from policy feedback
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2" onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button className="bg-[#001F3F] hover:bg-[#001F3F]/90 flex items-center space-x-2" onClick={handleExport}>
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters & Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Policy</label>
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
              <label className="block text-sm font-medium mb-2">Sentiment</label>
              <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All sentiments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sentiments</SelectItem>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Time Range</label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 3 months</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Search Words</label>
              <div className="relative">
                <Input placeholder="Search for specific words..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#001F3F]">1,247</div>
              <div className="text-sm text-gray-600">Total Words</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#138808]">68%</div>
              <div className="text-sm text-gray-600">Positive Sentiment</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">22%</div>
              <div className="text-sm text-gray-600">Negative Sentiment</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">10%</div>
              <div className="text-sm text-gray-600">Neutral Sentiment</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Cloud Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Word Cloud</CardTitle>
          <p className="text-sm text-gray-600">
            Larger words appear more frequently in citizen feedback. Click on words for detailed analysis.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-8 min-h-[400px] relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-2 h-full">
              {filteredWords.map((word, index) => (
                <button
                  key={word.word}
                  className={`${getSentimentColor(word.sentiment)} hover:opacity-75 hover:scale-110 transition-all duration-200 cursor-pointer font-semibold rounded px-2 py-1 hover:bg-gray-100`}
                  style={{ 
                    fontSize: `${word.size}px`,
                    transform: `rotate(${Math.random() * 60 - 30}deg)`,
                    margin: `${Math.random() * 20}px`
                  }}
                  title={`${word.word}: ${word.frequency} mentions (${word.sentiment}) - Click for analysis`}
                  onClick={() => handleWordClick(word)}
                >
                  {word.word}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Word Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Word Analysis Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Word</th>
                  <th className="text-left p-2">Frequency</th>
                  <th className="text-left p-2">Sentiment</th>
                  <th className="text-left p-2">Trend</th>
                  <th className="text-left p-2">Context</th>
                </tr>
              </thead>
              <tbody>
                {filteredWords.slice(0, 10).map((word) => (
                  <tr key={word.word} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{word.word}</td>
                    <td className="p-2">{word.frequency}</td>
                    <td className="p-2">
                      <Badge 
                        className={`${getSentimentBg(word.sentiment)} ${getSentimentColor(word.sentiment)} border-0`}
                      >
                        {word.sentiment}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <span className="text-[#138808]">↗ +12%</span>
                    </td>
                    <td className="p-2 text-sm text-gray-600">
                      Policy discussions, citizen feedback
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Sentiment Analysis Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-[#138808] pl-4">
              <h4 className="font-semibold text-[#138808]">Most Positive Themes</h4>
              <p className="text-sm text-gray-600">
                Ministry officials are most positive about transparency, accountability, and digital initiatives.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-600">Areas of Concern</h4>
              <p className="text-sm text-gray-600">
                Main concerns revolve around bureaucratic delays, complexity, and implementation challenges.
              </p>
            </div>
            <div className="border-l-4 border-[#FF9933] pl-4">
              <h4 className="font-semibold text-[#FF9933]">Trending Topics</h4>
              <p className="text-sm text-gray-600">
                Digital transformation and sustainable development are emerging as key discussion points.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Word Analysis Modal */}
      <Dialog open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#001F3F]">
                Analysis: "{selectedWord?.word}"
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsAnalysisOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          {selectedWord && (
            <div className="space-y-6">
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#001F3F]">{selectedWord.frequency}</div>
                    <div className="text-sm text-gray-600">Total Mentions</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className={`text-2xl font-bold ${getSentimentColor(selectedWord.sentiment)}`}>
                      {selectedWord.sentiment}
                    </div>
                    <div className="text-sm text-gray-600">Sentiment</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#138808]">{selectedWord.trend}</div>
                    <div className="text-sm text-gray-600">Weekly Trend</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#001F3F]">{selectedWord.relatedPolicies.length}</div>
                    <div className="text-sm text-gray-600">Related Policies</div>
                  </CardContent>
                </Card>
              </div>

              {/* Trend Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Weekly Trend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-end space-x-2">
                    {selectedWord.weeklyData.map((value: number, index: number) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="bg-[#001F3F] w-full rounded-t"
                          style={{ height: `${(value / Math.max(...selectedWord.weeklyData)) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-1">W{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Context and Policies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Contexts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedWord.contexts.map((context: string, index: number) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2">
                          {context}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Related Policies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedWord.relatedPolicies.map((policy: string, index: number) => (
                        <div key={index} className="p-2 bg-gray-50 rounded flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#001F3F] rounded-full"></div>
                          <span className="text-sm">{policy}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Comments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Representative Comments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedWord.topComments.map((comment: string, index: number) => (
                      <div key={index} className="border-l-4 border-[#001F3F] pl-4 py-2 bg-gray-50 rounded-r">
                        <p className="text-sm italic">"{comment}"</p>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
                          <Calendar className="h-3 w-3" />
                          <span>2 days ago</span>
                          <span>•</span>
                          <span>Policy Discussion</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <Button variant="outline">View All Comments</Button>
                <div className="space-x-2">
                  <Button variant="outline">Export Analysis</Button>
                  <Button className="bg-[#001F3F] hover:bg-[#001F3F]/90">
                    View Related Policies
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}