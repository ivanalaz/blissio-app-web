import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Blissio — početna stranica"
    >
      <Image
        src="/blissio-logo.png"
        alt=""
        width={2000}
        height={1000}
        priority
        className="h-16 w-auto object-contain object-left md:h-20"
        sizes="(max-width: 768px) 240px, 256px"
      />
    </Link>
  );
}
