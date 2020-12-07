const {When, Then, setDefaultTimeout} = require('@cucumber/cucumber')
const { browser } = require('protractor')
const { expect } = require('chai')
setDefaultTimeout(60000)

When(/^I open epam.com$/, function() {
  return browser.get('https://www.epam.com/')
})

Then(/^"EPAM | Enterprise Software Development, Design & Consulting"$/, async function() {
  const pageTitile = await browser.getTitle()
  expect(pageTitle).to.be.equal("EPAM | Enterprise Software Development, Design & Consulting")
})

When(/^I wait 10 seconds$/, function() {
  return browser.sleep(10000)
})