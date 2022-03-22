import { MobXProviderContext } from 'mobx-react'
import { useContext } from 'react'

const useStore = storeName => {
  return useContext(MobXProviderContext)[storeName]
}

export default useStore