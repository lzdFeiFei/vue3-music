import NoResult from './NoResult.vue'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

type NoResult = InstanceType<typeof NoResult>

const noResultDirective = createLoadingLikeDirective<NoResult>(
  NoResult as unknown as NoResult,
  'no-result'
)

export default noResultDirective
