// import MainStore from './mainStore'
import PatternStore from './patternStore'


const storesRoot = {
  // mainStore: MainStore.create(),
  patternStore: PatternStore.create(),
}

// export * from './mainStore'
export * from './patternStore'


export {
  storesRoot as stores,
  // MainStore,
  PatternStore,
}