const assert = require('assert')

describe('Name That Capital Page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:4200/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'CountryCapitals')
    })
})

describe('User imputs country to get capital')
it('should display correct capital', function () {
    const input = $('.form-control')
    const div = $('#capital')
    const button = $('button')
    browser.url('http://localhost:4200/');
    input.setValue('USA');
    button.click();
    console.log(input)
    console.log(div.getText())
    
    
})

it('should display correct capital', function () {
    const input = $('.form-control')
    const div = $('#capital')
    const button = $('button')
    browser.url('http://localhost:4200/');
    input.setValue('Congo');
    button.click();
    console.log(input)
    console.log(div.getText())
    
    
  })


describe("interacting with elements", function() {
      it("get Text for element", ()=> {
        browser.url('http://localhost:4200/');
          let text = $("h1").getText()
          console.log(text)
      })
  })