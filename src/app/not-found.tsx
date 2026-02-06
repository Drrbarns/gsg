import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-purple-200 mb-12">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="cursor-pointer">
            <Button size="lg" className="gap-2 bg-white text-purple-900 hover:bg-purple-50">
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/gsg-brands" className="cursor-pointer">
            <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Search className="w-5 h-5" />
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
