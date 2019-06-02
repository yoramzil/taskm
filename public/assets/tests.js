'use strict';

define('tasks-client/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n6:2 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/task-body.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-body.js should pass ESLint\n\n7:4 - Use closure actions, unless you need bubbling (ember/closure-actions)\n10:4 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('components/task-header.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-header.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:20 - \'event\' is defined but never used. (no-unused-vars)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:6 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n8:6 - \'$\' is not defined. (no-undef)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/task-input.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-input.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:21 - \'event\' is defined but never used. (no-unused-vars)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:6 - \'$\' is not defined. (no-undef)\n7:6 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:22 - \'event\' is defined but never used. (no-unused-vars)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:6 - Use closure actions, unless you need bubbling (ember/closure-actions)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:6 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n14:6 - \'$\' is not defined. (no-undef)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/task-item.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-item.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:6 - Use closure actions, unless you need bubbling (ember/closure-actions)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:6 - Use closure actions, unless you need bubbling (ember/closure-actions)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('helpers/task-row-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/task-row-style.js should pass ESLint\n\n');
  });

  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/tasks.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/tasks.js should pass ESLint\n\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:8 - Unexpected \'debugger\' statement. (no-debugger)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n30:6 - Unexpected \'debugger\' statement. (no-debugger)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n33:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n34:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n38:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n39:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
});
define('tasks-client/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('tasks-client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tasks-client/tests/helpers/start-app', 'tasks-client/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('tasks-client/tests/helpers/start-app', ['exports', 'tasks-client/app', 'tasks-client/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('tasks-client/tests/integration/components/task-body-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-body', 'Integration | Component | task body', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "S10u9oTc",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-body\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rqm1jiy+",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-body\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-client/tests/integration/components/task-header-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-header', 'Integration | Component | task header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "kcT5U8kL",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "oaYXS290",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-client/tests/integration/components/task-input-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-input', 'Integration | Component | task input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uetWa6xt",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-input\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "i+AnjvKt",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-input\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-client/tests/integration/components/task-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-item', 'Integration | Component | task item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "JzRbeWmT",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3TSgA8Dh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-client/tests/integration/helpers/task-row-style-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-row-style', 'helper:task-row-style', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "6+Ac6zLQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"task-row-style\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('tasks-client/tests/test-helper', ['tasks-client/app', 'tasks-client/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('tasks-client/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-body-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-body-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-input-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/task-row-style-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/task-row-style-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/task-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/tasklist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tasklist-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tasks-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks-test.js should pass ESLint\n\n');
  });
});
define('tasks-client/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('tasks-client/tests/unit/models/rental-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('rental', 'Unit | Model | rental', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tasks-client/tests/unit/models/task-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('task-list', 'Unit | Model | task list', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tasks-client/tests/unit/models/task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tasks-client/tests/unit/models/tasklist-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('tasklist', 'Unit | Model | tasklist', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tasks-client/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tasks-client/tests/unit/routes/tasks-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tasks', 'Unit | Route | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('tasks-client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
