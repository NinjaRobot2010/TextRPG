export class Location {
  name;
  description;
  connections;
  npcs;

  constructor(name, description, connections = [], npcs, events) {
    this.name = name;
    this.description = description;
    this.connections = connections;
    this.npcs = npcs;
    this.events = events;
  }

  addConnections(value) {
    for (let i = 0; i < value.length; i++) {
      this.connections.push(value[i]);
    }
  }
}