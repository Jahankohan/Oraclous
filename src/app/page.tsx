
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header/Nav (Optional - Simple version for now) */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">TradePrep</h1>
          <div>
            <a href="#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Features</a>
            <a href="#enroll" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ml-4">Enroll Now</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Prepare for the Financial Markets</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Gain the skills and confidence needed to succeed in trading and secure funding from prop firms.</p>
          <a href="#enroll" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300">Get Started Today</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose TradePrep?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Comprehensive Training</h4>
              <p className="text-gray-600">Placeholder text describing the comprehensive training provided.</p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Prop Firm Preparation</h4>
              <p className="text-gray-600">Placeholder text detailing how we prepare traders for prop firms.</p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Expert Mentorship</h4>
              <p className="text-gray-600">Placeholder text about the expert mentorship available.</p>
            </div>
            {/* Feature 4 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Risk Management Focus</h4>
              <p className="text-gray-600">Placeholder text explaining the focus on risk management.</p>
            </div>
            {/* Feature 5 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Community Support</h4>
              <p className="text-gray-600">Placeholder text highlighting the supportive community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment/Contact Section */}
      <section id="enroll" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-xl">
          <h3 className="text-3xl font-bold text-center mb-8">Enroll for Early Access</h3>
          <p className="text-center text-gray-600 mb-10">Sign up to get notified when we launch and receive exclusive early bird offers.</p>
          {/* Form will be integrated here */}
          <form action="https://formspree.io/f/mblooklb" method="POST" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Submit Enrollment</button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">We respect your privacy. Your information will only be used for enrollment updates.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} TradePrep. All rights reserved.</p>
          {/* Add social links or other footer content if needed */}
        </div>
      </footer>
    </div>
  );
}
