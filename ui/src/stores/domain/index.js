// import MainStore from './mainStore'
import LibraryStore from './libraryStore'
import PatternStore from './patternStore'
import componentStore from './componentStore'
import componentTypeStore from './componentTypeStore'


const storesRoot = {
  // mainStore: MainStore.create(),
  patternStore: PatternStore.create(),
  libraryStore: LibraryStore.create(),
  componentStore: componentStore.create(),
  componentTypeStore: componentTypeStore.create(),
}

export * from './libraryStore'
export * from './patternStore'
export * from './libraryStore'
export * from './componentTypeStore'


export {
  storesRoot as stores,
  // MainStore,
  PatternStore,
  LibraryStore,
  componentStore,
  componentTypeStore,
}