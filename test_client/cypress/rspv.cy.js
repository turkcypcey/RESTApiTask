describe('RSPV', () => {

	// Commands ----------------------------------------------------------------

	Cypress.Commands.add('addAttendee', (kwargs) => {
		const uuid = Cypress._.random(0, 1e6)
		kwargs = {
			...{
				name: 'test_name',
				notes: 'test_notes',
			},
			...kwargs,
		}
		kwargs.notes += uuid
		for (let [k,v] of Object.entries(kwargs)) {
			cy.get(`input[name="${k}"]`).clear().type(v)
		}
		cy.get('[data-action="addAttendee"]').click()
		return cy.contains(uuid).should('be.visible').parents('li').find('[data-field="id"]').invoke('text')
	})
	Cypress.Commands.add('deleteAttendee', (attendee_id) => {
		cy.contains(`[data-field="id"]`, attendee_id).should('exist')
		cy.contains(`[data-field="id"]`, attendee_id).parents("li").find(`[data-action="delete"]`).click()
		cy.contains(`[data-field="id"]`, attendee_id).should('not.exist')
	})


	// Setup -------------------------------------------------------------------

	beforeEach(() => {
		cy.visit('');  // Navigate to Env variable `CYPRESS_BASE_URL`
	});


	// Tests -------------------------------------------------------------------

	it('Has RSPV on page', () => {
		cy.contains('RSVP')
	})

	it('Has name and notes input elements', () => {
		cy.get('input[name="name"]').should('not.have.value')
		cy.get('input[name="notes"]').should('not.have.value')
		cy.get('button').contains('RSPV')
	})

	it('Create and Delete Attendee', () => {
		cy.addAttendee()
			.then(attendee_id => {
				cy.deleteAttendee(attendee_id)
			})
	})


})