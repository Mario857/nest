import { SetMetadata } from '../../decorators';
import { CACHE_TTL_METADATA } from '../cache.constants';

/**
 * Decorator that sets the cache ttl setting the duration for cache expiration.
 *
 * For example: `@CacheTTL(5)`
 *
 * @param ttl number set the cache expiration time, use 0 to disable cache or Infinity to set non expiring cache
 *
 * @see [Caching](https://docs.nestjs.com/techniques/caching)
 *
 * @publicApi
 */
export const CacheTTL = (ttl: number) => SetMetadata(CACHE_TTL_METADATA, ttl);
