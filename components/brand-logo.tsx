import Image from 'next/image';
import { BRAND } from '@/lib/brand';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  showName?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  nameClassName?: string;
}

const dimensions = {
  sm: { mark: 28, container: 'h-8 w-8' },
  md: { mark: 32, container: 'h-9 w-9' },
} as const;

export function BrandLogo({
  showName = true,
  size = 'md',
  className,
  nameClassName,
}: BrandLogoProps) {
  const { mark, container } = dimensions[size];

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-graphite-950 ring-1 ring-stone-800/80',
          container
        )}
      >
        <Image
          src={BRAND.logo}
          alt={`${BRAND.name} logo`}
          width={mark}
          height={mark}
          className="h-[85%] w-[85%] object-contain"
          priority={size === 'md'}
        />
      </span>
      {showName && (
        <span
          className={cn(
            'font-display font-semibold text-lg tracking-[-0.03em] text-fg',
            nameClassName
          )}
        >
          {BRAND.name}
        </span>
      )}
    </span>
  );
}
