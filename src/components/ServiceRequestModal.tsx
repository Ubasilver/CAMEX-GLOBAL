import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check, Send, Upload, FileText } from 'lucide-react';
import { services, serviceCategories, type Service, type ServiceCategory, buildWhatsAppLink, companyInfo } from '@/data/services';

interface Props {
  service: Service | null;
  onClose: () => void;
}

type Step = 'category' | 'service' | 'details' | 'upload' | 'summary' | 'success';

export function ServiceRequestModal({ service: initialService, onClose }: Props) {
  const [step, setStep] = useState<Step>(initialService ? 'details' : 'category');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(
    initialService?.category ?? null
  );
  const [selectedService, setSelectedService] = useState<Service | null>(initialService);
  const [details, setDetails] = useState({ name: '', phone: '', email: '', contactMethod: 'WhatsApp', instructions: '' });

  if (!initialService && step === 'details') {
    setStep('category');
  }

  const steps: { id: Step; label: string }[] = [
    { id: 'category', label: 'Category' },
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Your Details' },
    { id: 'upload', label: 'Documents' },
    { id: 'summary', label: 'Review' },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === step);
  const filteredServices = selectedCategory
    ? services.filter((s) => s.category === selectedCategory)
    : services;

  function handleSend() {
    if (!selectedService) return;
    const msg = `Gooday sir, I am interested in your Services.%0A%0A*Service:* ${selectedService.name}%0A*Category:* ${selectedService.category}%0A*Price Range:* ${selectedService.priceMin === 0 && selectedService.priceMax === 0 ? 'Varies' : '₦' + selectedService.priceMin.toLocaleString() + ' – ₦' + selectedService.priceMax.toLocaleString()}%0A*Turnaround:* ${selectedService.turnaround}%0A%0A*Name:* ${details.name}%0A*Phone:* ${details.phone}%0A*Email:* ${details.email || 'N/A'}%0A*Preferred Contact:* ${details.contactMethod}%0A%0A*Instructions:* ${details.instructions || 'N/A'}`;
    window.open(buildWhatsAppLink(decodeURIComponent(msg)), '_blank');
    setStep('success');
  }

  const canProceed = () => {
    if (step === 'category') return selectedCategory !== null;
    if (step === 'service') return selectedService !== null;
    if (step === 'details') return details.name.trim() && details.phone.trim();
    return true;
  };

  return (
    <AnimatePresence>
      {initialService !== null || step !== 'category' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-ink-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-ink-900/95 backdrop-blur-sm border-b border-white/5 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-brand-400">CAMEX</span>
                <span className="text-ink-700">/</span>
                <span className="font-mono text-xs text-ink-500">REQUEST</span>
              </div>
              <button onClick={onClose} className="text-ink-500 hover:text-white transition-colors p-1" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {/* Progress */}
            {step !== 'success' && (
              <div className="px-6 pt-5 pb-2">
                <div className="flex items-center gap-2">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-2 flex-1">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${
                          i <= currentStepIndex
                            ? 'bg-brand-500 text-white'
                            : 'bg-white/5 text-ink-600'
                        }`}
                      >
                        {i < currentStepIndex ? <Check size={14} /> : i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`h-px flex-1 ${i < currentStepIndex ? 'bg-brand-500' : 'bg-white/5'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Category */}
                {step === 'category' && (
                  <motion.div key="category" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">Choose a service category</h3>
                    <p className="text-ink-500 text-sm mb-6">What do you need help with?</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {serviceCategories.filter((c) => c.id !== 'All').map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { setSelectedCategory(cat.id); setStep('service'); }}
                          className={`p-4 rounded-xl border text-left transition-colors ${
                            selectedCategory === cat.id
                              ? 'border-brand-500 bg-brand-500/10'
                              : 'border-white/5 hover:border-white/15 bg-ink-950/50'
                          }`}
                        >
                          <span className="font-medium text-white text-sm">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service */}
                {step === 'service' && (
                  <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">Choose a service</h3>
                    <p className="text-ink-500 text-sm mb-6">Category: {selectedCategory}</p>
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {filteredServices.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => { setSelectedService(s); setStep('details'); }}
                          className={`w-full p-4 rounded-xl border text-left transition-colors flex items-center justify-between gap-4 ${
                            selectedService?.name === s.name
                              ? 'border-brand-500 bg-brand-500/10'
                              : 'border-white/5 hover:border-white/15 bg-ink-950/50'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="font-medium text-white text-sm block">{s.name}</span>
                            <span className="text-xs text-ink-600">
                              {s.priceMin === 0 && s.priceMax === 0 ? 'Fee varies' : `₦${s.priceMin.toLocaleString()} – ₦${s.priceMax.toLocaleString()}`}
                              {' · '}
                              {s.turnaround}
                            </span>
                          </div>
                          <ArrowRight size={16} className="text-ink-600 flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Details */}
                {step === 'details' && (
                  <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">Your details</h3>
                    <p className="text-ink-500 text-sm mb-6">Service: {selectedService?.name}</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-ink-400 mb-1.5">Full Name</label>
                        <input
                          value={details.name}
                          onChange={(e) => setDetails({ ...details, name: e.target.value })}
                          className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-ink-400 mb-1.5">Phone Number</label>
                          <input
                            value={details.phone}
                            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                            className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 transition-colors"
                            placeholder="+234 ..."
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-ink-400 mb-1.5">Email (optional)</label>
                          <input
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 transition-colors"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-400 mb-1.5">Preferred Contact Method</label>
                        <div className="flex gap-2">
                          {['WhatsApp', 'Phone Call', 'Email'].map((m) => (
                            <button
                              key={m}
                              onClick={() => setDetails({ ...details, contactMethod: m })}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                details.contactMethod === m
                                  ? 'bg-brand-500 text-white'
                                  : 'bg-ink-950 text-ink-400 border border-white/10'
                              }`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-400 mb-1.5">Additional Instructions</label>
                        <textarea
                          value={details.instructions}
                          onChange={(e) => setDetails({ ...details, instructions: e.target.value })}
                          rows={3}
                          className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                          placeholder="Tell us what you need"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Upload */}
                {step === 'upload' && (
                  <motion.div key="upload" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">Upload documents</h3>
                    <p className="text-ink-500 text-sm mb-6">
                      {selectedService?.requiresUpload
                        ? 'This service may require documents. You can upload them now or bring them in person.'
                        : 'Document upload is optional for this service. You can skip this step.'}
                    </p>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-10 text-center hover:border-white/20 transition-colors cursor-pointer">
                      <Upload size={32} className="text-ink-600 mx-auto mb-3" />
                      <p className="text-ink-400 text-sm">Click to upload or drag files here</p>
                      <p className="text-ink-700 text-xs mt-1">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Summary */}
                {step === 'summary' && (
                  <motion.div key="summary" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">Review your request</h3>
                    <p className="text-ink-500 text-sm mb-6">Please confirm the details below.</p>
                    <div className="space-y-4 bg-ink-950/50 rounded-xl p-5 border border-white/5">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Service</span>
                        <span className="text-white text-sm font-medium text-right">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Fee</span>
                        <span className="text-white text-sm text-right">
                          {selectedService && (selectedService.priceMin === 0 && selectedService.priceMax === 0
                            ? 'Varies'
                            : `₦${selectedService.priceMin.toLocaleString()} – ₦${selectedService.priceMax.toLocaleString()}`)}
                        </span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Turnaround</span>
                        <span className="text-white text-sm text-right">{selectedService?.turnaround}</span>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Name</span>
                        <span className="text-white text-sm text-right">{details.name}</span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Phone</span>
                        <span className="text-white text-sm text-right">{details.phone}</span>
                      </div>
                      {details.email && (
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-xs text-ink-600 uppercase tracking-wider">Email</span>
                          <span className="text-white text-sm text-right">{details.email}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs text-ink-600 uppercase tracking-wider">Contact</span>
                        <span className="text-white text-sm text-right">{details.contactMethod}</span>
                      </div>
                      {details.instructions && (
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-xs text-ink-600 uppercase tracking-wider">Notes</span>
                          <span className="text-ink-300 text-sm text-right max-w-xs">{details.instructions}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-ink-600 mt-4">
                      Your request will be sent via WhatsApp to CAMEX. Estimated fees only — government charges may vary.
                    </p>
                  </motion.div>
                )}

                {/* Success */}
                {step === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-5">
                      <Check size={32} className="text-accent-green" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-xl mb-2">Request Sent!</h3>
                    <p className="text-ink-400 text-sm mb-6 max-w-sm mx-auto">
                      Your request has been sent to CAMEX via WhatsApp. We'll get back to you shortly.
                    </p>
                    <button onClick={onClose} className="btn-primary">Done</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer navigation */}
            {step !== 'success' && step !== 'category' && (
              <div className="sticky bottom-0 bg-ink-900/95 backdrop-blur-sm border-t border-white/5 px-6 py-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (step === 'details') setStep('service');
                    else if (step === 'service') setStep('category');
                    else if (step === 'upload') setStep('details');
                    else if (step === 'summary') setStep('upload');
                  }}
                  className="inline-flex items-center gap-1.5 text-ink-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                {step === 'details' && (
                  <button
                    onClick={() => setStep(selectedService?.requiresUpload ? 'upload' : 'summary')}
                    disabled={!canProceed()}
                    className="btn-primary disabled:opacity-40"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                )}
                {step === 'upload' && (
                  <button onClick={() => setStep('summary')} className="btn-primary">
                    Continue <ArrowRight size={16} />
                  </button>
                )}
                {step === 'summary' && (
                  <button onClick={handleSend} className="btn-whatsapp">
                    <Send size={16} /> Send Request
                  </button>
                )}
                {step === 'service' && selectedService && (
                  <button onClick={() => setStep('details')} className="btn-primary">
                    Continue <ArrowRight size={16} />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
