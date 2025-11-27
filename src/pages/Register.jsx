import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { User, Briefcase, Eye, EyeOff, Camera } from 'lucide-react'

export default function Register() {
  const [searchParams] = useSearchParams()
  
  const [step, setStep] = useState(searchParams.get('role') ? 'form' : 'role')
  
  const [role, setRole] = useState(searchParams.get('role') || '')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    specialty: '',      
    location: '',   
    experience: '',     
    terms: false    
  })
  
  const navigate = useNavigate()


  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole)
    setStep('form')
  }

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    console.log('Registration attempt:', { ...formData, role })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          
   
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 text-primary mb-6">
              <Camera size={32} />
              <span className="font-heading font-semibold text-3xl">SnapConnect</span>
            </div>
            <h1 className="text-3xl font-heading font-semibold mb-2">Create Account</h1>
            <p className="text-text-secondary">Join our photography community</p>
          </div>

          {step === 'role' && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleRoleSelect('client')}
                className="bg-background p-8 rounded-xl text-center border-2 border-transparent hover:border-primary transition-default hover:-translate-y-1"
              >
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Client</h3>
                <p className="text-sm text-text-secondary">Find and book photographers</p>
              </button>
              
              <button
                onClick={() => handleRoleSelect('photographer')}
                className="bg-background p-8 rounded-xl text-center border-2 border-transparent hover:border-primary transition-default hover:-translate-y-1"
              >
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photographer</h3>
                <p className="text-sm text-text-secondary">Showcase your work and get clients</p>
              </button>
            </div>
          )}

 
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                  required
                />
              </div>

              {role === 'photographer' && (
                <>
                  <div>
                    <label className="block font-medium mb-2">Specialty</label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                      required
                    >
                      <option value="">Select specialty</option>
                      <option value="wedding">Wedding</option>
                      <option value="portrait">Portrait</option>
                      <option value="event">Event</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                      required
                    />
                  </div>
                </>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-default"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 cursor-pointer"
                  required
                />
                <span className="text-sm">I agree to the Terms and Conditions</span>
              </label>

              <div className="flex gap-3">
                {!searchParams.get('role') && (
                  <button
                    type="button"
                    onClick={() => setStep('role')}
                    className="bg-accent hover:bg-accent/90 text-text font-heading font-medium rounded-lg px-6 py-3 text-base transition-default inline-flex items-center justify-center gap-2"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-medium rounded-lg px-8 py-4 text-lg transition-default inline-flex items-center justify-center gap-2"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          <p className="text-center mt-6 text-text-secondary">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
