
class Radio {
	constructor() {
		this.channels = {};
	}
	publish(actionType, payload) {
		console.log(`Event: ${actionType}`, 'EventData: ', payload);

		(this.channels[actionType] || []).forEach(m =>
			m(payload));
		return this;
	}
	subscribe(actionType, callback = () => null) {
		this.channels[actionType] = this.channels[actionType] || [];
		const index = this.channels[actionType].push(callback) - 1;
		return {
			remove() {
				delete this.channels[actionType][index];
			},
		};
	}
}

export default new Radio();
