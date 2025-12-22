export class Quest {
  constructor(npc_id, name, opening_dialogue, closing_dialogue) {
    this.npc_id = npc_id;
    this.name = name;
    this.opening_dialogue = opening_dialogue;
    this.closing_dialogue = closing_dialogue;
  }
}