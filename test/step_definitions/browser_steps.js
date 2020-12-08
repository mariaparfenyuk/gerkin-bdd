const { When, Then, setDefaultTimeout } = require('cucumber')
const { browser } = require('protractor')
const { expect } = require('chai')
setDefaultTimeout(60000)

When(/^I open "([^"]*)" url$/, function(url) {
  return browser.get(url)
})

Then(/^Page title should be "EPAM | Enterprise Software Development, Design & Consulting"$/, async function() {
  const pageTitle = await browser.getTitle()
  expect(pageTitle).to.be.equal('EPAM | Enterprise Software Development, Design & Consulting')
})

When(/^I wait 10 seconds$/, function() {
  return browser.sleep(10000)
})