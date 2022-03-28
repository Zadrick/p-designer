import { types } from 'mobx-state-tree';

const projects = types.model('project', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    patternName: types.optional(types.string, ''),
    rating: types.optional(types.number, 0),
})

export default projects