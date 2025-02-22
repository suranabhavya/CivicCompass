import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm font-semibold text-gray-900">Product</Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">Features</Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">Marketplace</Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">Company</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold text-gray-900">Log in &rarr;</Link>
        </div>
      </nav>
    </header>
  );
}
