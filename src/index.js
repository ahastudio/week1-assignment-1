/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */

function textToNode(text) {
  return document.createTextNode(text);
}

// eslint-disable-next-line
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
      return;
    }
    element[key] = value;
  });

  children.flat().forEach((child) => {
    const childNode = (child instanceof Node) ? child : textToNode(child);
    element.appendChild(childNode);
  });

  return element;
}

function render({ count }) {
  function handleClickIncrease() {
    render({ count: count + 1 });
  }

  function handleClickReset(value) {
    render({ count: value });
  }

  const element = (
    <div>
      <header>
        <button type="button" onClick={handleClickIncrease}>
          Click me!
          (
          {count}
          )
        </button>
      </header>
      <div className="buttons">
        {[...Array(100)].map((_, i) => (
          <button
            type="button"
            onClick={() => handleClickReset(i)}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );

  const target = document.getElementById('app');
  target.textContent = '';
  target.appendChild(element);
}

render({
  count: 0,
});
