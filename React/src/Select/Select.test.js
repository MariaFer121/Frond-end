import renderer from 'react-test-renderer'
import Select from './Select'
it("Should render", () => { 
    const component = renderer.create(<Select></Select>)
})