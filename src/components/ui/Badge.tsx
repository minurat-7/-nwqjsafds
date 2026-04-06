import { cn } from '../../utils/cn';

type BadgeVariant = 'default' | 'tread' | 'driveline' | 'other' | 'beginner' | 'intermediate' | 'advanced';

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  tread: 'bg-blue-50 text-blue-700 border border-blue-200',
  driveline: 'bg-red-50 text-red-700 border border-red-200',
  other: 'bg-gray-100 text-gray-600 border border-gray-200',
  beginner: 'bg-green-50 text-green-700 border border-green-200',
  intermediate: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  advanced: 'bg-orange-50 text-orange-700 border border-orange-200',
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
