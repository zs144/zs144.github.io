// Main application entry point
import { AuthManager } from './auth.js';
import { ApiClient } from './api.js';
import { UIComponents } from './ui.js';

class Application {
  constructor() {
    this.auth = new AuthManager();
    this.api = new ApiClient();
    this.ui = new UIComponents();
  }
  
  async initialize() {
    await this.auth.validateToken();
    this.ui.render();
  }
}

const app = new Application();
app.initialize();
