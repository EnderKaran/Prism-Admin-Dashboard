import React, { useState } from 'react';
import { Pencil, Facebook, Twitter, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import EditPersonalInfoModal from '../components/Modals/EditPersonalInfoModal';
import EditAddressModal from '../components/Modals/EditAddressModal';

const InfoItem = ({ label, value, isDark }) => (
  <div>
    <p className={`text-xs uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
      {label}
    </p>
    <p className={`mt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
      {value}
    </p>
  </div>
);

const socialLinks = [
  { icon: Facebook },
  { icon: Twitter },
  { icon: Linkedin },
  { icon: Instagram },
];

function ProfilePage({ theme, setTheme }) {
  const isDark = theme === 'dark';

  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'Terry',
    lastName: 'Franci',
    email: 'terryfranci@example.com',
    phone: '+09 123 456 78',
    facebook: 'https://www.facebook.com/PimjoHQ',
    twitter: 'https://x.com/PimjoHQ',
    linkedin: 'https://www.linkedin.com/company/pimj',
    instagram: 'https://instagram.com/PimjoHQ'
  });

  const [addressData, setAddressData] = useState({
    country: 'United States',
    cityState: 'Phoenix, Arizona, United States.',
    postalCode: 'ERT 2489',
    taxId: 'AS4568384'
  });

  return (
    <>
      <div className={`flex-1 overflow-y-auto p-8 ${isDark ? 'bg-[#161C24]' : 'bg-slate-50'}`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Profile
          </h1>
          <div className="flex items-center gap-4">
            <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="hover:text-indigo-500 cursor-pointer">Home</span> 
              <span className="mx-2">&gt;</span> 
              <span>Profile</span>
            </div>
           
          </div>
        </div>

        {/* Kullanıcı Banner Kartı */}
        <div className={`p-6 rounded-xl border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-colors ${isDark ? 'bg-[#212B36] border-slate-700/50' : 'bg-white border-slate-200/50'}`}>
          <div className="flex items-center gap-4">
            <img 
              src="https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="terryfranci" 
              className="w-16 h-16 rounded-full" 
            />
            <div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {formData.firstName} {formData.lastName}
              </h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Senior Developer, Phoenix, Arizona
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((LinkIcon, index) => (
              <button 
                key={index} 
                className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                <LinkIcon.icon size={16} />
              </button>
            ))}
            <button 
              onClick={() => setInfoModalOpen(true)} 
              className={`flex items-center gap-2 ml-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
            >
              <Pencil size={14} /> <span>Edit</span>
            </button>
          </div>
        </div>

        {/* Kişisel Bilgiler Kartı */}
        <div className={`mt-8 p-6 rounded-xl border shadow-sm transition-colors ${isDark ? 'bg-[#212B36] border-slate-700/50' : 'bg-white border-slate-200/50'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Personal Information
            </h3>
            <button 
              onClick={() => setInfoModalOpen(true)} 
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
            >
              <Pencil size={14} /> <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            <InfoItem label="First Name" value={formData.firstName} isDark={isDark} />
            <InfoItem label="Last Name" value={formData.lastName} isDark={isDark} />
            <InfoItem label="Email address" value={formData.email} isDark={isDark} />
            <InfoItem label="Phone" value={formData.phone} isDark={isDark} />
            <div className="md:col-span-2">
              <p className={`text-xs uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Bio
              </p>
              <p className={`mt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Senior Developer
              </p>
            </div>
          </div>
        </div>

        {/* Address Kartı */}
        <div className={`mt-8 p-6 rounded-xl border shadow-sm transition-colors ${isDark ? 'bg-[#212B36] border-slate-700/50' : 'bg-white border-slate-200/50'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Address
            </h3>
            <button 
              onClick={() => setAddressModalOpen(true)} 
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
            >
              <Pencil size={14} /> <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            <InfoItem label="Country" value={addressData.country} isDark={isDark} />
            <InfoItem label="City/State" value={addressData.cityState} isDark={isDark} />
            <InfoItem label="Postal Code" value={addressData.postalCode} isDark={isDark} />
            <InfoItem label="TAX ID" value={addressData.taxId} isDark={isDark} />
          </div>
        </div>
      </div>

      {/* Modal'lar */}
      <EditPersonalInfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setInfoModalOpen(false)} 
        isDark={isDark}
        formData={formData}
        setFormData={setFormData}
      />
      <EditAddressModal 
        isOpen={isAddressModalOpen} 
        onClose={() => setAddressModalOpen(false)} 
        isDark={isDark}
        addressData={addressData}
        setAddressData={setAddressData}
      />
    </>
  );
}

export default ProfilePage;