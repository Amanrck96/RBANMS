'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, HelpCircle, Search, Filter, Loader2, ArrowUpDown } from 'lucide-react';
import { hasPermission } from '@/lib/auth-utils';
import { useToast } from '@/hooks/use-toast';

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'admissions' | 'fees' | 'academics' | 'campus' | 'placements' | 'general';
    order: number;
    createdAt: string;
    updatedAt: string;
}

const CATEGORIES = [
    { id: 'admissions', label: 'Admissions' },
    { id: 'fees', label: 'Fees & Aid' },
    { id: 'academics', label: 'Academics' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'placements', label: 'Placements' },
    { id: 'general', label: 'General' },
];

export default function AdminFAQsPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    // Dialog state
    const [isOpen, setIsOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState<'create' | 'edit'>('create');
    const [submitting, setSubmitting] = useState(false);
    const [currentFaqId, setCurrentFaqId] = useState<string | null>(null);

    // Form fields
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [category, setCategory] = useState<'admissions' | 'fees' | 'academics' | 'campus' | 'placements' | 'general'>('general');
    const [order, setOrder] = useState<number>(0);

    useEffect(() => {
        if (user) {
            fetchFAQs();
        }
    }, [user]);

    const fetchFAQs = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/faqs');
            const data = await res.json();
            if (data.faqs) {
                setFaqs(data.faqs);
            }
        } catch (error) {
            console.error('Failed to fetch FAQs:', error);
            toast({
                title: 'Error',
                description: 'Failed to fetch FAQs',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleOpenCreate = () => {
        setDialogMode('create');
        setCurrentFaqId(null);
        setQuestion('');
        setAnswer('');
        setCategory('general');
        setOrder(faqs.length + 1);
        setIsOpen(true);
    };

    const handleOpenEdit = (faq: FAQ) => {
        setDialogMode('edit');
        setCurrentFaqId(faq.id);
        setQuestion(faq.question);
        setAnswer(faq.answer);
        setCategory(faq.category);
        setOrder(faq.order);
        setIsOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || !answer.trim()) {
            toast({
                title: 'Validation Error',
                description: 'Question and answer are required',
                variant: 'destructive',
            });
            return;
        }

        setSubmitting(true);
        try {
            const token = await auth?.currentUser?.getIdToken();
            const method = dialogMode === 'create' ? 'POST' : 'PUT';
            const payload = dialogMode === 'create' 
                ? { question, answer, category, order } 
                : { id: currentFaqId, question, answer, category, order };

            const response = await fetch('/api/faqs', {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: 'Success',
                    description: dialogMode === 'create' ? 'FAQ created successfully' : 'FAQ updated successfully',
                });
                setIsOpen(false);
                fetchFAQs();
            } else {
                throw new Error(result.error || 'Request failed');
            }
        } catch (error: any) {
            toast({
                title: 'Operation Failed',
                description: error.message || 'Something went wrong',
                variant: 'destructive',
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (faqId: string) => {
        if (!confirm('Are you sure you want to delete this FAQ? This action cannot be undone.')) return;

        try {
            const token = await auth?.currentUser?.getIdToken();
            const response = await fetch(`/api/faqs?id=${faqId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                toast({
                    title: 'Deleted',
                    description: 'FAQ removed successfully',
                });
                setFaqs(faqs.filter(f => f.id !== faqId));
            } else {
                const result = await response.json();
                throw new Error(result.error || 'Failed to delete FAQ');
            }
        } catch (error: any) {
            toast({
                title: 'Delete Failed',
                description: error.message || 'Could not delete FAQ',
                variant: 'destructive',
            });
        }
    };

    if (!user) return null;

    const canDelete = hasPermission(user, 'canManageUsers'); // Only super admin has this permission or has role super_admin
    const canCreate = hasPermission(user, 'canEditAnyContent');

    const filteredFAQs = faqs
        .filter(faq => {
            const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions (FAQ)</h1>
                    <p className="text-gray-500 mt-1">Manage public FAQs, categories, and display ordering</p>
                </div>
                {canCreate && (
                    <Button onClick={handleOpenCreate} className="bg-blue-900 hover:bg-blue-950 text-white">
                        <Plus size={20} className="mr-2" />
                        Add FAQ
                    </Button>
                )}
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        type="text"
                        placeholder="Search FAQs by question or answer..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 h-10"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Filter className="text-gray-400 h-4 w-4 shrink-0" />
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-[180px] h-10">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="all">All Categories</SelectItem>
                            {CATEGORIES.map(cat => (
                                <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                    <Loader2 className="animate-spin text-blue-900 h-10 w-10 mb-4" />
                    <p>Loading FAQs...</p>
                </div>
            ) : filteredFAQs.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-200">
                    <CardContent className="py-16 text-center">
                        <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">No FAQs found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">
                            {searchQuery || filterCategory !== 'all' 
                                ? 'No FAQs match your search query or category filters. Try adjusting them.' 
                                : 'No FAQs exist in the system yet. Click Add FAQ to create the first one.'}
                        </p>
                        {canCreate && !searchQuery && filterCategory === 'all' && (
                            <Button onClick={handleOpenCreate} className="bg-blue-900 hover:bg-blue-950 text-white">Create FAQ</Button>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    <div className="text-sm text-slate-500 px-1">
                        Showing <strong>{filteredFAQs.length}</strong> FAQs
                    </div>
                    
                    <div className="grid gap-4">
                        {filteredFAQs.map((faq) => (
                            <Card key={faq.id} className="border-l-4 border-l-blue-900 hover:shadow-md transition-shadow">
                                <CardHeader className="py-4 px-6 pb-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="space-y-1.5 flex-grow">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                                    Order {faq.order}
                                                </span>
                                                <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
                                                    {CATEGORIES.find(c => c.id === faq.category)?.label || faq.category}
                                                </span>
                                            </div>
                                            <CardTitle className="text-lg font-bold text-slate-900 leading-snug">
                                                {faq.question}
                                            </CardTitle>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                onClick={() => handleOpenEdit(faq)}
                                                className="border-slate-200 text-slate-700 hover:bg-slate-50"
                                            >
                                                <Edit size={14} className="mr-1.5" />
                                                Edit
                                            </Button>
                                            {canDelete && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleDelete(faq.id)}
                                                    className="border-slate-200 text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-200"
                                                >
                                                    <Trash2 size={14} className="mr-1.5" />
                                                    Delete
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="py-2 px-6 pb-4">
                                    <div className="bg-slate-50 rounded-lg p-3 text-slate-600 text-sm whitespace-pre-wrap leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Create/Edit FAQ Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white text-slate-900 border-slate-200">
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold">
                                {dialogMode === 'create' ? 'Add New FAQ' : 'Edit FAQ'}
                            </DialogTitle>
                            <DialogDescription>
                                Fill in details to manage FAQ content. All inputs are saved to public information portal.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="question" className="font-semibold">Question</Label>
                                <Input
                                    id="question"
                                    placeholder="Enter the question..."
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    required
                                    className="bg-white border-slate-200"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="answer" className="font-semibold">Answer</Label>
                                <Textarea
                                    id="answer"
                                    placeholder="Enter the answer..."
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    rows={5}
                                    required
                                    className="bg-white border-slate-200 min-h-[120px]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="category" className="font-semibold">Category</Label>
                                    <Select value={category} onValueChange={(value: any) => setCategory(value)}>
                                        <SelectTrigger className="w-full bg-white border-slate-200">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            {CATEGORIES.map(cat => (
                                                <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="order" className="font-semibold">Display Order (Sorting)</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={order}
                                        onChange={(e) => setOrder(Number(e.target.value))}
                                        required
                                        min={0}
                                        className="bg-white border-slate-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <DialogFooter className="border-t border-slate-100 pt-4 flex gap-2">
                            <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setIsOpen(false)}
                                className="border-slate-200 hover:bg-slate-50"
                            >
                                Cancel
                            </Button>
                            <Button 
                                type="submit" 
                                disabled={submitting} 
                                className="bg-blue-900 hover:bg-blue-950 text-white"
                            >
                                {submitting && <Loader2 size={16} className="animate-spin mr-2" />}
                                {dialogMode === 'create' ? 'Create' : 'Save Changes'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
