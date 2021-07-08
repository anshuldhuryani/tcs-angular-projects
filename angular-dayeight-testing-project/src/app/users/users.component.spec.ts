import { UsersComponent } from './users.component';

beforeAll(() => {
  console.log('Before All Describe Method');
})

beforeEach(() => {
  console.log('Before Each Describe Method');
})

// Creating Group
describe('Testing Users Component', () => {

  it('Checking Message Property', () => {
    var userObj = new UsersComponent();
    expect(userObj.message).toEqual('Hello World');
  })

})

// Creating Group
describe('Testing Addition Method', () => {

  var userObj;

  beforeAll(() => {
    console.log('Lets Begin!!');
    userObj = new UsersComponent();
  })

  beforeEach(() => {
    console.log('Hello');
  })

  // Unit Test Case
  it('Testing Two Positive Numbers', () => {
    expect(userObj.addition(100, 200)).toEqual(300);
  })

  // Unit Test Case
  it('Testing Two Negatives Numbers', () => {
    expect(userObj.addition(-100, -200)).toEqual(-300);
  })

  afterEach(() => {
    console.log('Bye');
  })

  afterAll(() => {
    console.log('The End..');
  })

});


beforeEach(() => {
  console.log('After Each Describe Method');
})


beforeAll(() => {
  console.log('After All Describe Method');
})