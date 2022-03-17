import MainStore from './mainStore'


const storesRoot = {
  mainStore: MainStore.create(),
}

export * from './mainStore'



export {
  storesRoot as stores,
  MainStore,
}