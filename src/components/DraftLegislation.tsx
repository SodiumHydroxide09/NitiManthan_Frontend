import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  FileText, 
  Calendar, 
  Users, 
  MessageSquare, 
  Upload, 
  Send, 
  BarChart3,
  Eye,
  Download
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function DraftLegislation() {
  const [selectedDraft, setSelectedDraft] = useState('digital-privacy-act');
  const [feedbackText, setFeedbackText] = useState('');
  const [stakeholderType, setStakeholderType] = useState('');

  const handleViewFullText = () => {
    // Simulate opening full document in new tab
    window.open('/documents/' + selectedDraft + '.pdf', '_blank');
  };

  const handleDownloadPDF = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '/documents/' + selectedDraft + '.pdf';
    link.download = currentDraft.title + '.pdf';
    link.click();
    toast.success('Document download started');
  };

  const handleViewAllComments = () => {
    // Simulate viewing all comments
    alert('Opening all comments view...');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error('File size must be less than 10MB');
        return;
      }
      toast.success(`File "${file.name}" ready for upload`);
    }
  };

  const drafts = [
    {
      id: 'digital-privacy-act',
      title: 'Digital Privacy Protection Act 2024',
      ministry: 'Ministry of Electronics & IT',
      status: 'Open for Comments',
      deadline: '2024-10-15',
      totalComments: 1247,
      description: 'Comprehensive framework for digital privacy protection and data governance in India.',
      tags: ['Privacy', 'Digital Rights', 'Data Protection']
    },
    {
      id: 'consumer-rights-bill',
      title: 'Consumer Rights Amendment Bill',
      ministry: 'Ministry of Consumer Affairs',
      status: 'Under Review',
      deadline: '2024-09-30',
      totalComments: 892,
      description: 'Strengthening consumer protection mechanisms in the digital marketplace.',
      tags: ['Consumer Rights', 'E-commerce', 'Protection']
    },
    {
      id: 'environment-guidelines',
      title: 'Environmental Protection Guidelines',
      ministry: 'Ministry of Environment',
      status: 'Open for Comments',
      deadline: '2024-11-20',
      totalComments: 2105,
      description: 'Updated environmental norms for industrial and commercial establishments.',
      tags: ['Environment', 'Compliance', 'Sustainability']
    }
  ];

  const currentDraft = drafts.find(d => d.id === selectedDraft) || drafts[0];

  const recentComments = [
    {
      author: 'Dr. Rajesh Kumar',
      type: 'Academic',
      date: '2 hours ago',
      preview: 'The proposed data localization requirements need more clarity regarding cross-border...',
      sentiment: 'neutral'
    },
    {
      author: 'Tech Industry Association',
      type: 'Industry',
      date: '4 hours ago',
      preview: 'We appreciate the government\'s efforts but suggest modifications to Section 12...',
      sentiment: 'mixed'
    },
    {
      author: 'Citizens Privacy Forum',
      type: 'NGO',
      date: '1 day ago',
      preview: 'Strongly support the strengthened privacy provisions. However, enforcement mechanisms...',
      sentiment: 'positive'
    }
  ];

  const handleSubmitFeedback = () => {
    if (!feedbackText.trim() || !stakeholderType) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Generate tracking ID
    const trackingId = 'NM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    toast.success(`Feedback submitted successfully! Tracking ID: ${trackingId}`);
    setFeedbackText('');
    setStakeholderType('');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#001F3F] mb-2">Draft Legislations</h1>
          <p className="text-gray-600">Review current policy drafts and submit your feedback</p>
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedDraft} onValueChange={setSelectedDraft}>
            <SelectTrigger className="w-80">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {drafts.map(draft => (
                <SelectItem key={draft.id} value={draft.id}>
                  {draft.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Draft Overview */}
      <Card className="border-2 border-[#001F3F]">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl text-[#001F3F]">{currentDraft.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {currentDraft.ministry}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Deadline: {new Date(currentDraft.deadline).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {currentDraft.totalComments} comments
                </span>
              </div>
            </div>
            <Badge 
              variant={currentDraft.status === 'Open for Comments' ? 'default' : 'secondary'}
              className={currentDraft.status === 'Open for Comments' ? 'bg-[#138808]' : ''}
            >
              {currentDraft.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{currentDraft.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {currentDraft.tags.map(tag => (
              <Badge key={tag} variant="outline" className="border-[#FF9933]">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleViewFullText}
            >
              <FileText className="h-4 w-4" />
              View Full Text
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleDownloadPDF}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="comments">Comments Received</TabsTrigger>
          <TabsTrigger value="feedback">Add Feedback</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Document Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h3>Key Provisions:</h3>
                <ul>
                  <li>Mandatory consent for data collection and processing</li>
                  <li>Right to data portability and deletion</li>
                  <li>Data localization requirements for sensitive personal data</li>
                  <li>Establishment of Data Protection Authority</li>
                  <li>Penalties for non-compliance up to ₹15 crore or 4% of turnover</li>
                </ul>
                
                <h3>Impact Assessment:</h3>
                <p>This legislation is expected to affect approximately 50,000 businesses and provide enhanced privacy protection to over 800 million internet users in India.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Total Views</span>
                  <span className="text-2xl text-[#001F3F]">12,547</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Comments</span>
                  <span className="text-2xl text-[#001F3F]">{currentDraft.totalComments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Downloads</span>
                  <span className="text-2xl text-[#001F3F]">3,892</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg. Rating</span>
                  <span className="text-2xl text-[#138808]">4.2/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comments" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-[#001F3F]">Recent Comments</h3>
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                View All Comments
              </Button>
            </div>
            
            {recentComments.map((comment, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="font-medium">{comment.author}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {comment.type}
                      </Badge>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{comment.date}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-1 ${
                          comment.sentiment === 'positive' ? 'border-green-500 text-green-700' :
                          comment.sentiment === 'negative' ? 'border-red-500 text-red-700' :
                          'border-yellow-500 text-yellow-700'
                        }`}
                      >
                        {comment.sentiment}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Submit Your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="stakeholder-type">Stakeholder Category *</Label>
                  <Select value={stakeholderType} onValueChange={setStakeholderType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ministry">Ministry Official</SelectItem>
                      <SelectItem value="industry">Industry Representative</SelectItem>
                      <SelectItem value="ngo">NGO/Civil Society</SelectItem>
                      <SelectItem value="academic">Academic/Researcher</SelectItem>
                      <SelectItem value="legal">Legal Professional</SelectItem>
                      <SelectItem value="government">Government Official</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="feedback">Your Feedback *</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts, suggestions, or concerns about this draft legislation..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="min-h-[200px] mt-2"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {feedbackText.length}/5000 characters
                </p>
              </div>

              <div>
                <Label htmlFor="file-upload">Supporting Documents (Optional)</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Input type="file" id="file-upload" accept=".pdf,.doc,.docx" />
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: PDF, DOC, DOCX (Max 10MB)
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  All feedback will be reviewed and considered in the policy development process.
                </p>
                <Button 
                  onClick={handleSubmitFeedback}
                  className="bg-[#138808] hover:bg-[#0f6b06]"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Sentiment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Positive Feedback</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-sm">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Neutral Feedback</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-sm">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Critical Feedback</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                      <span className="text-sm">10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm">Data Localization Impact</span>
                    <Badge variant="destructive">87 mentions</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm">Compliance Costs</span>
                    <Badge variant="default">64 mentions</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Implementation Timeline</span>
                    <Badge variant="secondary">45 mentions</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}