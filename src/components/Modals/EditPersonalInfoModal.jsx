import React from 'react';
import { X } from 'lucide-react';
import FormInput from '../Form/FormInput';

function EditPersonalInfoModal({ isOpen, onClose, isDark, formData, setFormData }) {
  if (!isOpen) return null;

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className={`relative w-full max-w-2xl p-6 rounded-2xl shadow-xl transition-all ${isDark ? 'bg-[#212B36]' : 'bg-white'}`}>
        <button 
          onClick={onClose} 
          className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <X size={20} />
        </button>

        <div>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Edit Personal Information
          </h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Update your details to keep your profile up-to-date.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className={`text-md font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Social Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput 
                label="Facebook" 
                value={formData.facebook} 
                onChange={handleChange('facebook')} 
                isDark={isDark} 
              />
              <FormInput 
                label="X.com" 
                value={formData.twitter} 
                onChange={handleChange('twitter')} 
                isDark={isDark} 
              />
              <FormInput 
                label="Linkedin" 
                value={formData.linkedin} 
                onChange={handleChange('linkedin')} 
                isDark={isDark} 
              />
              <FormInput 
                label="Instagram" 
                value={formData.instagram} 
                onChange={handleChange('instagram')} 
                isDark={isDark} 
              />
            </div>
          </div>

          <div>
            <h3 className={`text-md font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput 
                label="First Name" 
                value={formData.firstName} 
                onChange={handleChange('firstName')} 
                isDark={isDark} 
              />
              <FormInput 
                label="Last Name" 
                value={formData.lastName} 
                onChange={handleChange('lastName')} 
                isDark={isDark} 
              />
              <FormInput 
                label="Email Address" 
                value={formData.email} 
                onChange={handleChange('email')} 
                isDark={isDark} 
              />
              <FormInput 
                label="Phone" 
                value={formData.phone} 
                onChange={handleChange('phone')} 
                isDark={isDark} 
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 mt-8">
          <button 
            onClick={onClose} 
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
          >
            Close
          </button>
          <button 
            onClick={onClose} 
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPersonalInfoModal;