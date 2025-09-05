import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Download, Filter, RefreshCw, X, TrendingUp, MessageSquare, Calendar } from 'lucide-react';

export function WordCloudViewer() {
  const [selectedPolicy, setSelectedPolicy] = useState('all');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedWord, setSelectedWord] = useState<any>(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  // --- Paste your Base64 string for the PDF here ---
  const pdfBase64 = "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c3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoSWRlbnRpdHkpIC9TdXBwbGVtZW50IDAgPj4KL0ZvbnREZXNjcmlwdG9yIDE4IDAgUgovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9XIFswIFs0NDAgODgwIDU2NiAzMzYgNTU5IDI0NiA2NDYgMjQxIDU0NyA2NTEgNTQwIDMyNCA2MTEgNTI2IDU1NyA2NzYgNTQ3IDI0MCA1ODkgODY5IDU1NyA1NTcgNTU3IDE5NSA1NTcgNTU3IDU5MiA1NDYgMjQxIDUxMiA1MTkgNDgxIDQ5MiA1NTcgMzQ0IDU2NCA0NjkgNDkyIDUwMyAyNjEgNjQ3IDU0OCA2NDMgNjI2IDU1NyA1NjIgNTU3IDcyNyA2ODIgODY2IDI3MCA1NTcgNTU3IDU2NCAyNzQgNTM0IDYxOCA3NDUgNTU3IDU1NyA1NDcgMjM3IDMwNyBdCl0KPj4KZW5kb2JqCjIxIDAgb2JqCjw8IC9MZW5ndGggNzk4ID4+CnN0cmVhbQovQ0lESW5pdCAvUHJvY1NldCBmaW5kcmVzb3VyY2UgYmVnaW4KMTIgZGljdCBiZWdpbgpiZWdpbmNtYXAKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChVQ1MpIC9TdXBwbGVtZW50IDAgPj4gZGVmCi9DTWFwTmFtZSAvQWRvYmUtSWRlbnRpdHktVUNTIGRlZgovQ01hcFR5cGUgMiBkZWYKMSBiZWdpbmNvZGVzcGFjZXJhbmdlCjwwMDAwPiA8RkZGRj4KZW5kY29kZXNwYWNlcmFuZ2UKMiBiZWdpbmJmcmFuZ2UKPDAwMDA+IDwwMDAwPiA8MDAwMD4KPDAwMDE+IDwwMDNFPiBbPDAwNTc+IDwwMDZGPiA8MDA3Mj4gPDAwNjQ+IDwwMDIwPiA8MDA0Mz4gPDAwNkM+IDwwMDc1PiA8MDA0ND4gPDAwNjE+IDwwMDc0PiA8MDA1Mj4gPDAwNjU+IDwwMDcwPiA8MDA0Nz4gPDAwNkU+IDwwMDNBPiA8MDA1Mz4gPDAwNkQ+IDwwMDYyPiA8MDAzMD4gPDAwMzY+IDwwMDJDPiA8MDAzMj4gPDAwMzU+IDwwMDU0PiA8MDA2OD4gPDAwNjk+IDwwMDczPiA8MDA2Mz4gPDAwNzY+IDwwMDdBPiA8MDA2Nz4gPDAwNjY+IDwwMDcxPiA8MDA3OT4gPDAwNzg+IDwwMDZCPiA8MDAyRT4gPDAwNDE+IDwwMDQ2PiA8MDA1NT4gPDAwNTA+IDwwMDMxPiA8MDAyQj4gPDAwMzM+IDwwMDI1PiA8MDA0Rj4gPDAwNEQ+IDwwMDQ5PiA8MDAzND4gPDAwMzg+IDwwMDQ1PiA8MDAyRD4gPDAwNEM+IDwwMDQyPiA8MDA3Nz4gPDAwMzk+IDwwMDM3PiA8MDA0QT4gPDAwNkE+IDwwMDYwPiBdCmVuZGJmcmFuZ2UKZW5kY21hcApDTWFwTmFtZSBjdXJyZW50ZGljdCAvQ01hcCBkZWZpbmVyZXNvdXJjZSBwb3AKZW5kCmVuZAoKZW5kc3RyZWFtCmVuZG9iago2IDAgb2JqCjw8IC9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL1JvYm90by1SZWd1bGFyCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsyMCAwIFJdCi9Ub1VuaWNvZGUgMjEgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIApbCjUgMCBSCl0KL0NvdW50IDEKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDXQo+PgplbmRvYmoKeHJlZgowIDIzCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDEzOTYwIDAwMDAwIG4gCjAwMDAwMDAxODcgMDAwMDAgbiAKMDAwMDAwMDI4MiAwMDAwMCBuIAowMDAwMDAwOTA4IDAwMDAwIG4gCjAwMDAwMTM4MjAgMDAwMDAgbiAKMDAwMDAwMDMxOSAwMDAwMCBuIAowMDAwMDAwMzYyIDAwMDAwIG4gCjAwMDAwMDAzOTggMDAwMDAgbiAKMDAwMDAwMDc0MiAwMDAwMCBuIAowMDAwMDAwNTg0IDAwMDAwIG4gCjAwMDAwMDA0NTkgMDAwMDAgbiAKMDAwMDAwMDgwNSAwMDAwMCBuIAowMDAwMDAxMjE1IDAwMDAwIG4gCjAwMDAwMDY3OTYgMDAwMDAgbiAKMDAwMDAwMTAyOSAwMDAwMCBuIAowMDAwMDAxMTk1IDAwMDAwIG4gCjAwMDAwMDY4MTcgMDAwMDAgbiAKMDAwMDAwNzA4MSAwMDAwMCBuIAowMDAwMDEyNTA0IDAwMDAwIG4gCjAwMDAwMTI5NzAgMDAwMDAgbiAKMDAwMDAxMjQ4MyAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDIzCi9JbmZvIDEgMCBSCi9Sb290IDEzIDAgUgo+PgpzdGFydHhyZWYKMTQwNTgKJSVFT0YK";

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
    // This function now downloads the hardcoded PDF
    const dataUri = `data:application/pdf;base64,${pdfBase64}`;
    const exportFileDefaultName = `word-cloud-report-${new Date().toISOString().split('T')[0]}.pdf`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    document.body.appendChild(linkElement); // Required for Firefox
    linkElement.click();
    document.body.removeChild(linkElement); // Clean up
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
                      <span className="text-[#138808]">{word.trend}</span>
                    </td>
                    <td className="p-2 text-sm text-gray-600">
                      {word.contexts.slice(0,2).join(", ")}
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