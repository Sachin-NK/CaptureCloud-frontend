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
    <div className="w-full h-full bg-[url('/bgimg.jpg')] bg-cover bg-center flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-primary/10 backdrop-blur-3xl shadow-2xl rounded-2xl p-12 border border-white/20 animate-fadeIn">
          
   
          <div className="text-center mb-8">
            <img
                src="/logo.png"
                alt="Logo"
                className="w-32 h-32 object-contain mb-2 drop-shadow-xl mx-auto"
            />
            <h1 className="text-3xl font-semibold text-secondary tracking-wide mb-3">
              Capture Cloud
            </h1>
            <p className="text-accent text-sm mb-8">
              Photography Management System
            </p>
          </div>

          {step === 'role' && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleRoleSelect('client')}
                className="bg-primary/20 backdrop-blur-sm p-8 rounded-xl text-center border-2 border-secondary/20 hover:border-accent transition-all hover:-translate-y-1"
              >
                <User className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Client</h3>
                <p className="text-sm text-primary/80">Find and book photographers</p>
              </button>
              
              <button
                onClick={() => handleRoleSelect('photographer')}
                className="bg-primary/20 backdrop-blur-sm p-8 rounded-xl text-center border-2 border-secondary/20 hover:border-accent transition-all hover:-translate-y-1"
              >
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Photographer</h3>
                <p className="text-sm text-primary/80">Showcase your work and get clients</p>
              </button>
            </div>
          )}

 
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2 text-secondary">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-secondary">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2 text-secondary">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-secondary">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                  required
                />
              </div>

              {role === 'photographer' && (
                <>
                  <div>
                    <label className="block font-medium mb-2 text-secondary">Specialty</label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
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
                    <label className="block font-medium mb-2 text-secondary">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                      required
                    />
                  </div>
                </>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2 text-secondary">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary/70 hover:text-secondary"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2 text-secondary">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary/70 hover:text-secondary"
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
                  className="w-4 h-4 cursor-pointer accent-accent"
                  required
                />
                <span className="text-sm text-secondary">I agree to the Terms and Conditions</span>
              </label>

              <div className="flex gap-3">
                {!searchParams.get('role') && (
                  <button
                    type="button"
                    onClick={() => setStep('role')}
                    className="bg-secondary/20 hover:bg-secondary/30 text-secondary font-medium rounded-xl px-6 py-3 text-base transition-all inline-flex items-center justify-center gap-2 border border-secondary/20"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-secondary hover:shadow-xl text-primary font-medium rounded-xl px-8 py-4 text-lg transition-all duration-300 active:scale-95 shadow-md"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          <p className="text-center mt-6 text-primary/80">
            Already have an account?{' '}
            <Link to="/login" className="text-accent font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
