export class NPC {
  name;
  location_id;
  item_ids;
  event_id;
  dialogue;

  constructor(name, location_id, item_ids, event_id, dialogue) {
    this.name = name;
    this.location_id = location_id;
    this.item_ids = item_ids;
    this.event_id = event_id;
    this.dialogue = dialogue;
  }
}