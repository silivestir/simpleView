// src/SimpleLayout.js

class View {
  constructor(content = '') {
    this.element = document.createElement('div');
    this.element.textContent = content;
    this.element.style.border = "1px solid black";
    this.element.style.padding = "10px";
    this.element.style.margin = "5px";
    this.element.style.boxSizing = "border-box";
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}

class SurfaceView {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width || 300;
    this.canvas.height = height || 150;
    this.context = this.canvas.getContext('2d');
    this.canvas.style.border = "1px solid black";
    this.canvas.style.margin = "5px";
  }

  render(parent) {
    parent.appendChild(this.canvas);
  }

  clear(color = 'white') {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRect(x, y, width, height, fillColor = 'blue') {
    this.context.fillStyle = fillColor;
    this.context.fillRect(x, y, width, height);
  }
}

class Fragment {
  constructor(content = '') {
    this.element = document.createElement('div');
    this.element.style.border = "1px solid black";
    this.element.style.padding = "10px";
    this.element.style.margin = "10px";
    this.element.style.display = 'none'; // Initially hidden

    const fragmentContent = document.createElement('div');
    fragmentContent.innerHTML = content;
    this.element.appendChild(fragmentContent);
  }

  render(parent) {
    parent.appendChild(this.element);
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}

class LinearLayout {
  constructor(orientation = 'vertical') {
    this.element = document.createElement('div');
    this.element.style.display = 'flex';
    this.element.style.flexDirection = orientation === 'vertical' ? 'column' : 'row';
  }

  addChild(child) {
    child.render(this.element);
  }
}

class GridLayout {
  constructor(rows, columns) {
    this.element = document.createElement('div');
    this.element.style.display = 'grid';
    this.element.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    this.element.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  addChild(child) {
    child.render(this.element);
  }
}

// Custom Elements for Layout
class LinearLayoutComponent extends HTMLElement {
  constructor() {
    super();
    this.layout = new LinearLayout(this.getAttribute('orientation') || 'vertical');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.layout.element);
  }

  connectedCallback() {
    this.renderChildren();
  }

  renderChildren() {
    Array.from(this.children).forEach(child => {
      const view = new View(child.innerHTML);
      this.layout.addChild(view);
    });
  }
}

class GridLayoutComponent extends HTMLElement {
  constructor() {
    super();
    const rows = this.getAttribute('rows') || 2;
    const columns = this.getAttribute('columns') || 2;
    this.layout = new GridLayout(rows, columns);
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.layout.element);
  }

  connectedCallback() {
    this.renderChildren();
  }

  renderChildren() {
    Array.from(this.children).forEach(child => {
      const view = new View(child.innerHTML);
      this.layout.addChild(view);
    });
  }
}

// Register custom elements including Fragment
customElements.define('linear-layout', LinearLayoutComponent);
customElements.define('grid-layout', GridLayoutComponent);
customElements.define('surface-view', class extends HTMLElement {
  constructor() {
    super();
    const width = this.getAttribute('width') || 300;
    const height = this.getAttribute('height') || 150;
    this.surfaceView = new SurfaceView(width, height);
    const shadow = this.attachShadow({ mode: 'open' });
    this.surfaceView.render(shadow);
  }

  connectedCallback() {
    this.surfaceView.clear('lightgray');
    this.surfaceView.drawRect(50, 50, 100, 50, 'blue');
  }
});

customElements.define('fragment-component', class extends HTMLElement {
  constructor() {
    super();
    this.fragment = new Fragment(this.innerHTML); // Save innerHTML as fragment content
    const shadow = this.attachShadow({ mode: 'open' });
    this.fragment.render(shadow);
  }

  connectedCallback() {
    // Optional: do something on attach
  }

  show() {
    this.fragment.show();
  }

  hide() {
    this.fragment.hide();
  }
});
