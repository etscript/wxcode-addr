import DialogBehavios from '../dialog-modal/dialog-behavior'

Component({
	behaviors: [DialogBehavios],
	properties: {
		message: {
			type: String,
			value: ''
		}
	}
})
