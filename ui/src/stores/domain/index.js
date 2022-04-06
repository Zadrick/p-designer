// import MainStore from './mainStore'
import LibraryStore from './libraryStore'
import PatternStore from './patternStore'


const storesRoot = {
  // mainStore: MainStore.create(),
  patternStore: PatternStore.create(),
  libraryStore: LibraryStore.create(),
}

export * from './libraryStore'
export * from './patternStore'


export {
  storesRoot as stores,
  // MainStore,
  PatternStore,
  LibraryStore,
}