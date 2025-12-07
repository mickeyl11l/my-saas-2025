import { Github, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-12 mt-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SaaSKit 2025
            </h3>
            <p className="text-muted-foreground">
              The most beautiful Next.js boilerplate of 2025. Used by hundreds of founders.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">About</a></li>
              <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm border-t pt-8">
          © 2025 SaaS Starter Kit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
