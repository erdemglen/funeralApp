// filepath: /Users/erdemgulen/Documents/1 Projects/CodingSkills/Projects/FuneralPlanner/frontend/src/pages/search.tsx
import { useState } from 'react';
import axios from 'axios';
import { Provider } from '../types';

const Search = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [maxDistance, setMaxDistance] = useState('5000');
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', providerId: '' });
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('http://localhost:5001/api/providers/search', {
        params: { longitude, latitude, maxDistance }
      });
      setProviders(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching providers:', error);
      setError('Failed to fetch providers. Please try again.');
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to get your current location. Please enter coordinates manually.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Please enter coordinates manually.');
    }
  };

  const toggleCompare = (providerId: string) => {
    if (compareList.includes(providerId)) {
      setCompareList(compareList.filter(id => id !== providerId));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, providerId]);
      } else {
        alert('You can compare up to 3 providers at once');
      }
    }
  };

  const openContactForm = (providerId: string) => {
    setContactForm({ ...contactForm, providerId });
    setShowContactForm(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    alert(`Message sent to provider with ID: ${contactForm.providerId}`);
    setShowContactForm(false);
    setContactForm({ name: '', email: '', message: '', providerId: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Funeral Service Providers Near You</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Longitude</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Latitude</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Max Distance (meters)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Max Distance (meters)"
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={getCurrentLocation}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Use My Location
          </button>
          <button 
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Search Providers
          </button>
        </div>
      </div>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {loading && <div className="text-center my-4">Loading...</div>}

      {compareList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Compare Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
            {providers
              .filter(provider => compareList.includes(provider._id))
              .map(provider => (
                <div key={`compare-${provider._id}`} className="border p-4 rounded bg-white">
                  <h3 className="font-bold">{provider.name}</h3>
                  <p className="text-sm text-gray-700">{provider.address}</p>
                  <p className="text-sm text-gray-700">{provider.phone}</p>
                  <div className="mt-2">
                    <strong className="text-sm">Services:</strong>
                    <ul className="text-sm list-disc pl-5 mt-1">
                      {provider.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => toggleCompare(provider._id)}
                    className="mt-3 text-red-500 text-sm hover:underline"
                  >
                    Remove from comparison
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <div key={provider._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-2">{provider.name}</h2>
            <p className="text-gray-600 mb-1">{provider.address}</p>
            <p className="text-gray-600 mb-3">{provider.phone}</p>
            <div className="mb-3">
              <strong>Services:</strong>
              <ul className="list-disc pl-5 mt-1">
                {provider.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => toggleCompare(provider._id)}
                className={`px-3 py-1 rounded text-sm ${
                  compareList.includes(provider._id) 
                    ? 'bg-gray-200 text-gray-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {compareList.includes(provider._id) ? 'Added to Compare' : 'Compare'}
              </button>
              <button
                onClick={() => openContactForm(provider._id)}
                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {providers.length === 0 && !loading && (
        <div className="text-center my-8 text-gray-500">
          No providers found. Please adjust your search criteria and try again.
        </div>
      )}

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Contact Provider</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;