import React from 'react';
import { shallow } from 'enzyme';
import PetImage from './PetImage';

describe('PetImage', () => {
  let wrapper;
  let mockPet;
  let mockPetUrl;

  beforeEach(()=>{
    mockPet = { id: 1, name: "Fido", pic: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi1ytO44LrdAhUE44MKHRt_B4YQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Fdog%2F&psig=AOvVaw2MhxK_sIy2XjmduZrqIH17&ust=1537023384535700"}
    
    mockPetUrl = mockPet.pic

    wrapper = shallow(<PetImage pet={ mockPet }/>)
  });

  

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});