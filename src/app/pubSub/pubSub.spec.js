import sinon from 'sinon';
import test from 'ava';
import { importWithoutStyles } from '../utils/utils';

const { default: makeRadio } = importWithoutStyles('src/app/pubSub/pubsub');

test('test should check publish', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const payload = { name: 'qwerty' };
	radio.subscribe('channel.test', spy);
	radio.publish('channel.test', payload);
	t.true(spy.calledWith(payload));
});

test('test should check quantity of function call', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const payload = 5;
	radio.subscribe('channel.test', spy);
	radio.publish('channel.test', payload);
	radio.publish('channel.test', payload);
	radio.publish('channel.test', payload);
	t.is(spy.callCount, 3);
});

test('test should check quantity of channels', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const payload = 5;
	radio.subscribe('channel.test', spy);
	radio.subscribe('channel1.test', spy);
	radio.subscribe('channel2.test', spy);
	t.is(Object.keys(radio.getChannels()).length, 3);
});

test('test should check quantity of subscribers', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const payload = 5;
	radio.subscribe('channel.test', spy);
	radio.subscribe('channel.test', spy);
	radio.subscribe('channel.test', spy);
	radio.publish('channel.test', payload);
	t.true(spy.calledThrice);
});

test('test should check remove functions', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	radio.publish('channel.testWithout2argument');
	const subscribe = radio.subscribe('channel.testretv', null);
	t.true(subscribe.remove instanceof Function);
});

test('test should check without subscribers', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const subscribe = radio.subscribe('channel.test', spy);
	t.true(subscribe.remove instanceof Function);
});

test('test should check quantity of channels after remove', (t) => {
	const radio = makeRadio(true);
	const spy = sinon.spy();
	const subscribe = radio.subscribe('channel.test', spy);
	subscribe.remove();
	const channels = radio.getChannels();
	const listeners = channels['channel.test'];
	t.is(listeners.length, 0);
});

test('test should check', (t) => {
	const radio = makeRadio();
	const radio2 = makeRadio();
	const spy = sinon.spy();
	const subscribe = radio.subscribe('channel.test', spy);
	subscribe.remove();
	const channels = radio.getChannels();
	const listeners = channels['channel.test'];
	t.is(listeners.length, 0);
});
