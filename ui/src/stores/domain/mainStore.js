import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { CriteriaListModel } from '../models'

const CriteriaArray = [{
    id: 1,
    Name: 'Criteria',
    MinValue: 0,
    MaxValue: 1,
    TargetValue: 2.5,
    IsMinimization: false,
}, {
    id: 1,
    Name: 'Criteria 2',
    MinValue: 1,
    MaxValue: 1.5,
    TargetValue: 5,
    IsMinimization: true,
}]

const MainStore = types
  .models({
    _criteriaList: types.optional(CriteriaListModel, []),
  })
  .action(self => {

    const setCriteriaList = newCriteriaList => {
        applySnapshot(self._criteriaList, newCriteriaList)
    }

    return {
        setCriteriaList,
    }

  })
  .views(self => ({
    get criteriaList() {
        return getSnapshot(self._criteriaList)
    }
  }))

export default MainStore