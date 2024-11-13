import { createMachine, assign } from 'xstate';

interface BookingFormContext {
	name: string;
	phone: string;
	lineId: string;
	selectedRoomName: string;
	error?: string;
}

export const bookingFormMachine = createMachine({
	id: 'bookingForm',
	initial: 'idle',
	context: {
		name: '',
		phone: '',
		lineId: '',
		selectedRoomName: '',
		error: undefined
	} as BookingFormContext,
	states: {
		idle: {
			on: {
				SUBMIT: {
					target: 'submitting',
					actions: assign((context) => ({
						name: context.event?.context.name,
						phone: context.event?.context.phone,
						lineId: context.event?.context.lineId,
						selectedRoomName: context.event?.context.selectedRoomName
					})),
					guard: (context) => {
						return (
							!!context.event.context.name &&
							!!context.event.context.phone &&
							!!context.event.context.lineId &&
							!!context.event.context.selectedRoomName
						);
					}
				}
			}
		},
		submitting: {
			on: {
				SUCCESS: {
					target: 'success'
				},
				ERROR: {
					target: 'error',
					actions: assign((context) => ({
						error: context.event?.context.error
					}))
				}
			}
		},
		success: {
			on: {
				RESET: {
					target: 'idle',
					actions: assign({
						name: '',
						phone: '',
						lineId: '',
						selectedRoomName: '',
						error: undefined
					})
				}
			}
		},
		error: {
			on: {
				RESET: {
					target: 'idle',
					actions: assign({
						name: '',
						phone: '',
						lineId: '',
						selectedRoomName: '',
						error: undefined
					})
				}
			}
		}
	}
});
