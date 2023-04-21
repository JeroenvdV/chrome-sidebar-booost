import { Frame } from 'chrome-sidebar'
import { url } from './settings'

if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
  const root = document.createElement('div')
  document.body.appendChild(root)
  const h = document.createElement('h1');
  h.textContent = url;
  root.appendChild(h);
  console.debug('testing', url);
}
