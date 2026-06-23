import { useState } from 'react'

type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
  width?: number
  height?: number
}

export function OptimizedImage({
  src,
  alt,
  className,
  eager = false,
  width,
  height,
}: OptimizedImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : 'auto'}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  )
}
