class MessageBus {
  constructor() {
    this.registration = {};
  }
  subscribe(topic, callback) {
    this.registration[topic] = this.registration[topic] || [];
    this.registration[topic].push(callback);
  }
  publish(topic, payload) {
    this.registration[topic].forEach(cb => {
      cb(payload);
    });
  }
}

class ComponentA {
  subscribe(messageBus, topic) {
    messageBus.subscribe(topic, function (payload) {
      console.log('payload', payload);
    });
  }
  doSomething() {
    console.log('shout hey!!');
  }
}
class ComponentB {
  publish(messageBus) {
    messageBus.publish('new_signup', { 'foo': 'bar', 'goo': 'gar' });
  }
}

var mb = new MessageBus();
var a = new ComponentA();
var b = new ComponentB();
a.subscribe(mb, 'new_signup');
b.publish(mb);
// debugger;
// console.log('mb', mb.registration);