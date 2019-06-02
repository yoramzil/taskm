"use strict";



define('tasks-client/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.JSONAPIAdapter.extend({
		namespace: 'api',
		host: 'http://tasks',
		headers: {
			// 'X-Token-Auth': 'b809vCwvtawRbsG0BmP1tWgnlXQypSKf',
			// 'X-CSRF-Token': 'b809vCwvtawRbsG0BmP1tWgnlXQypSKf'
		}
	});
});
define('tasks-client/app', ['exports', 'tasks-client/resolver', 'ember-load-initializers', 'tasks-client/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('tasks-client/components/task-body', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		odd: 0,
		actions: {
			deleteTask: function deleteTask(task) {
				this.sendAction('deleteTask', task);
			},
			taskComplete: function taskComplete(task) {
				this.sendAction('taskComplete', task);
			}
		}
	});
});
define('tasks-client/components/task-footer', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		done: 0,
		open: 0,
		didRender: function didRender() {
			this._super.apply(this, arguments);
			this.set('done', $('div.check_task_done').length);
			this.set('open', $('div.tasks_check').not('.check_task_done').length);
		}
	});
});
define('tasks-client/components/task-header', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({

		actions: {
			open_tasks_add: function open_tasks_add(event) {
				$('#input_task').show();
			}
		}

	});
});
define('tasks-client/components/task-input', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		store: Ember.inject.service('store'),
		actions: {
			close_tasks_add: function close_tasks_add(event) {
				$('#input_task').hide();
			},
			task_add_approve: function task_add_approve(event) {
				var taskValue = this.get('value');
				this.sendAction('createTask', taskValue);
				this.set('value', '');
				$('#input_task').hide();
			}
		}
	});
});
define('tasks-client/components/task-item', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({

		actions: {
			task_complete: function task_complete(task) {
				this.sendAction('taskComplete', task);
			},
			task_delete: function task_delete(task) {
				this.sendAction('deleteTask', task);
			}
		}
	});
});
define('tasks-client/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('tasks-client/helpers/app-version', ['exports', 'tasks-client/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('tasks-client/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('tasks-client/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('tasks-client/helpers/task-row-style', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.taskRowStyle = taskRowStyle;
	function taskRowStyle(oddRow) {
		return ++oddRow;
	}

	exports.default = Ember.Helper.helper(taskRowStyle);
});
define('tasks-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tasks-client/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('tasks-client/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('tasks-client/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('tasks-client/initializers/ember-cli-mirage', ['exports', 'tasks-client/config/environment', 'tasks-client/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    return (0, _startMirage.default)(null, { env: env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('tasks-client/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('tasks-client/initializers/export-application-global', ['exports', 'tasks-client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('tasks-client/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('tasks-client/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('tasks-client/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('tasks-client/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define("tasks-client/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('tasks-client/mirage/config', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        this.namespace = '/mapi';

        this.get('/mtasks', function () {
            return { data: [{ id: 1, type: 'task', attributes: { task: 'משימה א.', done: 0 } }, { id: 2, type: 'task', attributes: { task: 'משימה ב.', done: 0 } }, { id: 3, type: 'task', attributes: { task: 'משימה ג.', done: 0 } }, { id: 4, type: 'task', attributes: { task: 'משימה ד', done: 0 } }, { id: 5, type: 'task', attributes: { task: 'משימה  ו.', done: 0 } }, { id: 6, type: 'task', attributes: { task: 'משימה  ז', done: 0 } }] };
        });
    };
});
define("tasks-client/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('tasks-client/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('tasks-client/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		task: _emberData.default.attr(),
		done: _emberData.default.attr()
	});
});
define('tasks-client/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('tasks-client/router', ['exports', 'tasks-client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('tasks');
  });

  exports.default = Router;
});
define('tasks-client/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      this.replaceWith('tasks');
    }
  });
});
define('tasks-client/routes/tasks', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			var total = null;
			var completed = null;
			var open = null;

			// this.get('store').query('task', {
			//   filter: {
			//     done: 1
			//   }
			// }).then(function(recs) {
			//   completed = recs;
			// }).then(
			// 	this.get('store').query('task', {
			// 	  filter: {
			// 	    done: 0
			// 	  }
			// })).then(function(recs) {
			//   open = recs;
			// }).then(
			// 	total = this.store.findAll('task')
			// ).then(
			// 	return {
			// 		total: total,
			// 		completed: completed,
			// 		open: open
			// 	}
			// );

			total = this.store.findAll('task');

			return {
				total: total,
				completed: completed,
				open: open
			};
		},

		actions: {
			deleteTask: function deleteTask(task) {
				task.destroyRecord();
				setTimeout(function () {
					location.reload();
				}, 1000);
			},
			createTask: function createTask(taskvalue) {
				var newtask = this.store.createRecord('task', {
					task: taskvalue,
					done: false
				});
				newtask.save();
				setTimeout(function () {
					location.reload();
				}, 1000);
			},
			taskComplete: function taskComplete(task) {
				this.store.findRecord('task', task.get('id')).then(function (task) {
					var stat = task.get('done');
					task.set('done', !stat);
					task.save();
					setTimeout(function () {
						location.reload();
					}, 1000);
				});
			}
		}
	});
});
define('tasks-client/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("tasks-client/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2guIFFMc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\"],[1,[18,\"outlet\"],false],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/application.hbs" } });
});
define("tasks-client/templates/components/task-body", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3nB6YMYW", "block": "{\"symbols\":[\"taskitem\",\"index\"],\"statements\":[[6,\"div\"],[9,\"class\",\"tasks_body\"],[7],[0,\"\\n\\t\"],[6,\"ul\"],[9,\"class\",\"tasks_list\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"tasks\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[1,[25,\"task-item\",null,[[\"task\",\"ind\",\"odd\",\"deleteTask\",\"taskComplete\",\"task\"],[[19,1,[]],[19,2,[]],[19,0,[\"odd\"]],\"deleteTask\",\"taskComplete\",[20,[\"task\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/components/task-body.hbs" } });
});
define("tasks-client/templates/components/task-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eaTRXWa1", "block": "{\"symbols\":[],\"statements\":[[6,\"table\"],[9,\"class\",\"task_footer_table\"],[7],[0,\"\\n\\t\"],[6,\"tr\"],[7],[0,\"\\n\\t\\t\"],[6,\"td\"],[7],[0,\"לסיום: \"],[1,[18,\"open\"],false],[8],[0,\"\\n\\t\\t\"],[6,\"td\"],[7],[0,\"הושלמו: \"],[1,[18,\"done\"],false],[8],[0,\"\\n\\t\\t\"],[6,\"td\"],[7],[0,\"סהכ: \"],[1,[20,[\"tasks\",\"length\"]],false],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/components/task-footer.hbs" } });
});
define("tasks-client/templates/components/task-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zkTO+IWP", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"tasks_header\"],[7],[0,\"\\n\\t\"],[6,\"span\"],[9,\"class\",\"tasks_text\"],[7],[0,\"משימות\"],[8],[0,\"\\n\\t\"],[6,\"button\"],[9,\"class\",\"tasks_add\"],[7],[0,\"\\n\\t\\t\"],[6,\"span\"],[9,\"class\",\"tasks_add_inner\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"open_tasks_add\"],null],null],[7],[0,\"+\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/components/task-header.hbs" } });
});
define("tasks-client/templates/components/task-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6F7F6qp3", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"id\",\"input_task\"],[9,\"class\",\"centered\"],[7],[0,\"\\n\\t\"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\",\"type\",\"createTask\"],[[20,[\"value\"]],\"task_input_elem\",\"משימה חדשה\",\"text\",\"createTask\"]]],false],[0,\"\\n\\t\"],[11,1,[[20,[\"results\"]]]],[0,\"\\n\\t\"],[6,\"button\"],[9,\"class\",\"task_input_btn\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"task_add_approve\",[20,[\"task\"]]],null],null],[7],[0,\"אשר\"],[8],[0,\"\\n\\t\"],[6,\"span\"],[9,\"id\",\"input_task_close\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"close_tasks_add\"],null],null],[7],[0,\"x\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/components/task-input.hbs" } });
});
define("tasks-client/templates/components/task-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZwoXcsuh", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[10,\"class\",[26,[\"tasks_item \",[25,\"if\",[[20,[\"odd\"]],\"odd\"],null]]]],[10,\"data\",[26,[[18,\"ind\"],\" - \",[18,\"odd\"]]]],[7],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",[26,[\"tasks_check \",[25,\"if\",[[20,[\"task\",\"done\"]],\"check_task_done\"],null]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"task_complete\",[20,[\"task\"]]],null],null],[7],[8],[0,\"\\n\\t\"],[6,\"span\"],[10,\"class\",[26,[\"tasks_text \",[25,\"if\",[[20,[\"task\",\"done\"]],\"task_text_done\"],null]]]],[7],[1,[25,\"task-row-style\",[[20,[\"ind\"]]],null],false],[0,\".\"],[1,[20,[\"task\",\"task\"]],false],[8],[0,\"\\n\\t\"],[6,\"span\"],[9,\"class\",\"tasks_delete\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"task_delete\",[20,[\"task\"]]],null],null],[7],[0,\"X\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/components/task-item.hbs" } });
});
define("tasks-client/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1unWWMrp", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/index.hbs" } });
});
define("tasks-client/templates/tasks", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5jcBtYz0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"tasks_container\"],[7],[0,\"\\n\\t\"],[1,[18,\"task-header\"],false],[0,\"\\n\\t\"],[1,[25,\"task-body\",null,[[\"tasks\",\"deleteTask\",\"taskComplete\",\"task\"],[[20,[\"model\",\"total\"]],\"deleteTask\",\"taskComplete\",[20,[\"task\"]]]]],false],[0,\"\\n\\t\"],[1,[25,\"task-input\",null,[[\"tasks\",\"createTask\"],[[20,[\"model\",\"total\"]],\"createTask\"]]],false],[0,\"\\n\\t\"],[1,[25,\"task-footer\",null,[[\"tasks\"],[[20,[\"model\",\"total\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tasks-client/templates/tasks.hbs" } });
});
define('tasks-client/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('tasks-client/config/environment', [], function() {
  var prefix = 'tasks-client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("tasks-client/app")["default"].create({"name":"tasks-client","version":"0.0.0+80ca72de"});
}
//# sourceMappingURL=tasks-client.map
