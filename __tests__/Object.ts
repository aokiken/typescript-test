import { cloneDeep } from 'lodash'

describe('Object', () => {

    it('shallow copy', () => {
        const obj1 = {a: 0, b: {c: 0}}
        const obj2 = Object.assign({}, obj1)
        expect(obj1).toEqual(obj2)

        obj1.a = 1
        expect(obj1.a).not.toBe(obj2.a)

        obj2.a = 2
        expect(obj1.a).not.toEqual(obj2.a)

        obj2.b.c = 3
        expect(obj1.b.c).toBe(obj2.b.c)
    })

    it('Deep Clone', () => {
        const obj1 = {a: 0, b: {c: 0}}
        const obj2 = JSON.parse(JSON.stringify(obj1)) // any
        expect(obj1).toEqual(obj2)

        obj1.a = 4
        expect(obj1.a).not.toBe(obj2.a)

        obj1.b.c = 4
        expect(obj1.b.c).not.toBe(obj2.b.c)
    })

    it('Deep Clone from lodash cloneDeep', () => {
        const obj1 = {a: 0, b: {c: 0}}
        const obj2 = cloneDeep(obj1) // typeof obj1
        expect(obj1).toEqual(obj2)

        obj1.a = 4
        expect(obj1.a).not.toBe(obj2.a)

        obj1.b.c = 4
        expect(obj1.b.c).not.toBe(obj2.b.c)
    })

})
