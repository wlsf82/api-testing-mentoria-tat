const CUSTOMERS_API_URL = `${Cypress.env('API_URL')}/customers`

describe('API Testing', () => {
  it('GET /customers using alias', () => {
    cy.request(CUSTOMERS_API_URL).as('getCustomers')

    cy.get('@getCustomers').its('status').should('eq', 200)
    cy.get('@getCustomers').its('body.customers').should('have.length', 10)
  })

  it('GET /customers?limit=5 using alias', () => {
    cy.request(`${CUSTOMERS_API_URL}?limit=5`).as('getCustomers')

    cy.get('@getCustomers').its('status').should('eq', 200)
    cy.get('@getCustomers').its('body.customers').should('have.length', 5)
  })

  it('GET /customers using .then', () => {
    cy.request(CUSTOMERS_API_URL).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.customers.length).to.eq(10)
      expect(response.body.pageInfo).to.exist
    })
  })

  it('GET /customers using .then and object destructuring', () => {
    cy.request(CUSTOMERS_API_URL).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.customers.length).to.eq(10)
      expect(body.pageInfo).to.exist
    })
  })
})