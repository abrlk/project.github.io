const singletoneContainer = { instance: null };

class Radio {
	constructor() {
		let channels = {};
		this.getChannels = () => channels;
		this.setChannels = (newChannels) => {
			channels = Object.assign(channels, newChannels);
		};
	}

	publish(actionType, payload) {
		const channels = this.getChannels();
		console.log(`Event: ${actionType}`, 'EventData: ', payload);
		(channels[actionType] || []).forEach(m => m(payload));
		return this;
	}
	subscribe(actionType, callback = () => null) {
		const channels = this.getChannels();
		const channel = channels[actionType] || [];
		const index = channel.push(callback) - 1;
		channels[actionType] = channel;
		this.setChannels(channels);
		const self = this;
		return {
			remove() {
				channels[actionType] = channels[actionType].filter((elem, i) => i !== index);
				self.setChannels(channels);
			},
		};
	}
}

function makeRadio(isIndependent) {
	if (isIndependent) {
		return new Radio();
	}
	if (singletoneContainer.instance) {
		return singletoneContainer.instance;
	}
	singletoneContainer.instance = new Radio();
	return singletoneContainer.instance;
}

export default makeRadio;
