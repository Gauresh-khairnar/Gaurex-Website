import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function Logo({ className = "", showText = true, size = 32 }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <div 
        className="relative overflow-hidden rounded-md bg-white border border-gray-200 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpg"
          alt="GAUREX Monogram Logo"
          width={size}
          height={size}
          priority
          className="object-contain p-0.5"
        />
      </div>
      {showText && (
        <span className="text-xl font-black tracking-tight text-black transition-colors">
          GAUREX
        </span>
      )}
    </Link>
  );
}

