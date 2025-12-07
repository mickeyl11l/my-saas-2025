import { Twitter, Github, LinkedIn } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-gray-900 to-black py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SaaSKit 2025
            </h3>
            <p className="text-gray-400 mb-4">The most beautiful Next.js boilerplate of 2025.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Twitter className="h-5 w-5 text-gray-400" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Github className="h-5 w-5 text-gray-400" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <LinkedIn className="h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2025 SaaS Starter Kit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
