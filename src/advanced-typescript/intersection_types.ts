//technics of combining types = intersection in action

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
