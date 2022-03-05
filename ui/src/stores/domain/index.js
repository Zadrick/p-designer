import mainStore from './mainStore'


const storesRoot = {
  mainStore: mainStore.create(),
}

export * from './PatternsStore'



export {
  storesRoot as stores,
  mainStore,
}