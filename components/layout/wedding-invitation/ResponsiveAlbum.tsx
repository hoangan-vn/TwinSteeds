'use client';

import { cn } from '@/lib';
import Album from './Album';

interface ResponsiveAlbumProps {
  layout?: 'centered' | 'full-width' | 'custom';
  className?: string;
  mainImageWidth?: string;
  thumbnailsWidth?: string;
}

const ResponsiveAlbum = ({ layout = 'centered', className, mainImageWidth, thumbnailsWidth }: ResponsiveAlbumProps) => {
  const layoutClasses = {
    centered: 'max-w-6xl mx-auto',
    'full-width': 'w-full',
    custom: className || 'w-full'
  };

  return (
    <div className={cn('w-full', layoutClasses[layout])}>
      <Album mainImageWidth={mainImageWidth} thumbnailsWidth={thumbnailsWidth} className={className} />
    </div>
  );
};

export default ResponsiveAlbum;
